# Relatório Final — Desafio Analista de Teste (SEA)
**Autor:** Gabriel Pires  
**Data:** 22/12/2025  
**Aplicação:** http://analista-teste.seatecnologia.com.br/  
**Protótipo (referência):** https://tinyurl.com/yl58hs4m  
**Ambiente:** Windows 11 | Chrome 143 | Edge 143  

---

## 1. Objetivo
Avaliar a aplicação web em desenvolvimento, validando conformidade com o protótipo e qualidade das funcionalidades do módulo **Funcionário(s)**, incluindo validações do formulário, persistência, CRUD, navegação e compatibilidade nos navegadores testados.

---

## 2. Escopo executado
**A) Conformidade com o protótipo**
- Fonte, cores, presença de itens, layout e espaçamentos.

**B) Funcionalidades do módulo Funcionário(s)**
- Validações de CPF e data; adicionar EPI e atividades; salvar e consultar funcionário; editar e excluir registros.

**C) Navegação**
- Itens do menu levando para “Em breve”.

**D) Compatibilidade**
- Execução e renderização nos navegadores testados.

---

## 3. Estratégia e abordagem
- Testes exploratórios orientados pelos requisitos do desafio.
- Casos de teste manuais para fluxos principais e validações.
- Registro de defeitos com evidências, incluindo comparação com protótipo quando aplicável.
- Automação de no mínimo 2 funcionalidades utilizando Cypress, com evidência de execução.

**Priorização por risco**
- **Alta:** salvar dados e conseguir consultar ou abrir novamente o cadastro, salvar funcionário, editar/excluir, validações (CPF/data).
- **Média:** adicionar EPI ou atividades, navegação “Em breve”.
- **Baixa:** ajustes visuais finos, quando não afetam uso.

---

## 4. Tipos de teste aplicados
- **Funcionais:** CRUD de funcionários; validações de CPF/data; fluxos de EPI/atividades.
- **UI/Design:** fonte, paleta de cores, layout/posicionamento e presença de componentes.
- **Navegação:** redirecionamento para telas futuras (“Em breve”).
- **Compatibilidade:** Chrome / Edge.
- **Segurança (observações básicas):** validação de entrada e mensagens de erro sem exposição de informações sensíveis.

---

## 5. Ambiente e massa de teste
- **SO:** Windows 11  
- **Navegadores:** Chrome / Edge  
- **Ferramentas:** captura de tela e vídeo; cypress.
- **Dados:** CPFs válidos/inválidos, nomes inválidos (com números), datas válidas/inválidas.

---

## 6. Resumo da execução (Casos de Teste)
Foram executados 26 casos de teste, abrangendo conformidade com o protótipo (UI), validações do formulário, salvamento e consulta de registros, navegação e compatibilidade entre navegadores.

**Resultado geral**
- **PASS:** 8  
- **FAIL:** 17  
- **N/E:** 1  

**Casos não executados / bloqueados**
- CT019 — Recuperação/consulta de funcionário salvo: **N/E**, pois o menu “…”, ou ellipsis, não disponibiliza/aciona corretamente as ações necessárias (BUG-012).

**Principais falhas por categoria**
- **UI/Protótipo:** divergências de fonte/cores/itens/layout e componentes (CT002, CT003, CT004, CT005, CT013, CT016, CT017).
- **Validações do Formulário:** CPF aceita letras e CPF inválido, além de Nome aceitar números (CT007, CT008, CT026) — BUG-015.
- **CRUD (Editar/Excluir):** menu “…” não oferece fluxo de alterar/excluir (CT021, CT022) — BUG-012.
- **Navegação:** sidebar não redireciona para “Em breve” (CT023) — BUG-007.
- **Compatibilidade:** fluxo principal falha em Chrome e Edge por dependência do menu “…” (CT024 e CT025) — BUG-012.

---

## 7. Lista consolidada de Bugs (001–015)
**Altas**
- BUG-002 — “Próximo passo” não habilita/desabilita e não avança em nenhum estado.
- BUG-007 — Sidebar não redireciona para “Em breve”.
- BUG-009 — “Adicionar EPI” (layout + funcionalidade) não segue protótipo.
- BUG-012 — Menu “…” não exibe “Alterar/Excluir”.
- BUG-015 — Validações Nome/CPF permitem dados inválidos.

**Médias**
- BUG-001 — Fonte/cor fora do padrão do protótipo.
- BUG-003 — Stepper repete “ITEM 1” (labels incorretas).
- BUG-004 — Rótulo “Concluído” fora do padrão.
- BUG-011 — “Não usa EPI” não oculta bloco de atestado + checkbox fora do padrão.
- BUG-013 — Badges do card inconsistentes (CPF/Status/Cargo).
- BUG-014 — Lista não comporta aumento de registros (sem scroll/paginação).

**Baixas**
- BUG-005 — Card lateral esquerdo com dimensões/alinhamento divergentes.
- BUG-006 — Hover na sidebar sem destaque.
- BUG-008 — Background da tela “Funcionário(s)” fora do padrão.
- BUG-010 — Dropdown de atividades com texto truncado (“Ativid”).

---

## 8. Automação (Cypress)
Foram automatizados 2 fluxos E2E:

**Funcionalidade 1 — Acesso ao módulo Funcionário(s)**
- Clica em “Funcionário(s)” e valida presença de “+ Adicionar Funcionário”.

**Funcionalidade 2 — Cadastro de funcionário + validação em listagem**
- Preenche Nome, CPF (gerado com DV), RG, Data de nascimento, Sexo e CA obrigatório.
- Salva e valida presença do registro na listagem.

**Arquivos**
- `cypress/e2e/spec.cy.js`
- `cypress.config.js` (baseUrl = `http://analista-teste.seatecnologia.com.br`)

**Evidência**
- `3.Evidencias/5.Automatização/print_cypress.png`

### Como executar
- `npx cypress open` (modo interativo)
- `npx cypress run` (headless)

---

## 9. Recomendações e melhorias
**Validações e integridade de dados**
- Implementar validação robusta de CPF (máscara, apenas dígitos, 11 caracteres, DV) e bloquear persistência quando inválido.
- Restringir Nome para letras + espaços + acentos.

**Fluxo/funcionalidade**
- Corrigir menu “…” para suportar Alterar/Excluir (CRUD completo).
- Corrigir fluxo “Adicionar EPI” permitindo múltiplos EPIs e remoção conforme protótipo.
- Corrigir navegação do menu lateral para sempre direcionar a “Em breve”.

**UI/Protótipo**
- Centralizar tokens visuais (fonte Segoe UI e cor #649FBF) e aplicar globalmente.
- Padronizar stepper (labels Item 1–9 e rótulo Concluído).
- Padronizar badges nos cards e garantir consistência (CPF/Status/Cargo).
- Definir comportamento de lista com crescimento (scroll interno ou paginação).
- Ajustes finos: hover da sidebar, background e alinhamentos.

---

## 10. Limitações / dependências observadas
- **BUG-012** bloqueou a validação completa do fluxo de recuperação/edição/exclusão (CT019 N/E e compatibilidade CT024/CT025 parcial).
- **BUG-007** limita validação de telas futuras (“Em breve”) e elementos visuais associados (mencionado em BUG-008).