function gerarCpfValido() {
  const rand = () => Math.floor(Math.random() * 9);
  const n = Array.from({ length: 9 }, rand);

  const calcDv = (base) => {
    let soma = 0;
    for (let i = 0; i < base.length; i++) {
      soma += base[i] * (base.length + 1 - i);
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  const dv1 = calcDv(n);
  const dv2 = calcDv([...n, dv1]);
  return [...n, dv1, dv2].join("");
}

const preencherPorLabel = (label, valor) => {
  cy.contains(label)
    .closest("div")
    .find("input")
    .last()
    .clear({ force: true })
    .type(valor, { force: true });
};

describe("SEA - Desafio QA (E2E)", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  afterEach(function () {
  if (this.currentTest.state === "passed") {
    const titulo = this.currentTest.title.replace(/[^\w\d-]+/g, "_");
    cy.screenshot(`PASS__${titulo}`, { capture: "viewport" });
  }
  });

  it("Funcionalidade 1: Navegar até Funcionário(s)", () => {
    cy.contains("Funcionário(s)").click();
    cy.contains("+ Adicionar Funcionário").should("be.visible");
  });

  it("Funcionalidade 2: Cadastrar funcionário e validar que aparece na lista", () => {
    const nome = `Cypress ${Date.now()}`;
    const cpf = gerarCpfValido();

    cy.contains("Funcionário(s)").click();
    cy.contains("+ Adicionar Funcionário").click();
    cy.contains("Adicionar Funcionário").should("be.visible");

    preencherPorLabel("Nome", nome);
    preencherPorLabel("CPF", cpf);
    preencherPorLabel("RG", "1234567");

    // Garante que CPF não ficou vazio (evita o "Preencha este campo")
    cy.contains("CPF")
      .closest("div")
      .find("input")
      .last()
      .invoke("val")
      .should("not.be.empty");

    // Data (type="date" => YYYY-MM-DD)
    cy.contains("Data de nascimento")
      .closest("div")
      .find("input")
      .last()
      .clear({ force: true })
      .type("2002-12-16", { force: true });

    cy.contains("Masculino").click({ force: true });

    // CA é obrigatório — preencher com 4 dígitos
    cy.contains("Informe o número do CA")
      .closest("div")
      .find("input")
      .last()
      .clear({ force: true })
      .type("1234", { force: true });

    cy.contains("Salvar").scrollIntoView().click();

    cy.wait(10000);
    cy.reload();

    // Em vez de procurar "Funcionário(s)", valide pela listagem voltando
    cy.contains("+ Adicionar Funcionário", { timeout: 10000 }).should("be.visible");
    cy.contains(nome, { timeout: 10000 }).should("be.visible");
  });
});
