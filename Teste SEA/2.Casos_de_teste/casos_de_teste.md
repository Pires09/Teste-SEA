# Casos de Teste — Desafio (SEA)

**Data:** 22/12/2025  
**Autor:** Gabriel Pires  
**Navegadores testados:** Chrome / Edge  

> Legenda de Status: **PASS** (passou) | **FAIL** (falhou) | **N/E** (não executado)

---

## Caso de Teste 001 — Acesso ao módulo Funcionário(s)
**Objetivo:** Garantir que o módulo Funcionário(s) esteja acessível e carregue corretamente.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Aplicação acessível  
**Passos:**
1. Acessar a aba "Funcionário(s)".
**Resultado esperado:** Tela do módulo Funcionário(s) abre corretamente, sem erros visuais críticos.  
**Resultado obtido:** Módulo acessou e carregou corretamente (listagem e botão “+ Adicionar Funcionário” visíveis).  
**Status:** PASS  
**Evidência:** `3.Evidencias/5.Automatização`

---

## Caso de Teste 002 — Conformidade visual (fonte)
**Objetivo:** Verificar se a fonte utilizada na aplicação está igual à do protótipo.  
**Prioridade:** Média  
**Navegador:** Chrome / Edge  
**Pré-condição:** Protótipo disponível  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Comparar fonte da aplicação com a fonte do protótipo.
**Resultado esperado:** Fonte aplicada igual à do protótipo.  
**Resultado obtido:** Divergência de fonte (e padronização visual) em relação ao protótipo.  
**Status:** FAIL  
**Bug relacionado:** BUG-001

---

## Caso de Teste 003 — Conformidade visual (cores)
**Objetivo:** Validar se as cores da aplicação correspondem às cores definidas no protótipo.  
**Prioridade:** Média  
**Navegador:** Chrome / Edge  
**Pré-condição:** Protótipo disponível  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Comparar cores principais (botões, header, sidebar, textos) com o protótipo.
**Resultado esperado:** Paleta de cores igual à do protótipo.  
**Resultado obtido:** Divergência de cores/fundo em relação ao protótipo.  
**Status:** FAIL  
**Bug relacionado:** BUG-001, BUG-008

---

## Caso de Teste 004 — Presença de itens/componentes conforme protótipo
**Objetivo:** Confirmar que todos os componentes previstos no protótipo existem na aplicação.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Protótipo disponível  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Verificar presença de botões, campos, menus, caixas de seleção, etc. conforme protótipo.
**Resultado esperado:** Todos os itens do protótipo existem na aplicação e estão posicionados corretamente.  
**Resultado obtido:** Há divergências em itens/elementos do protótipo (labels/textos/itens visuais não seguem o padrão esperado).  
**Status:** FAIL  
**Bug relacionado:** BUG-002, BUG-003, BUG-004

---

## Caso de Teste 005 — Layout da caixa de seleção (protótipo vs aplicação)
**Objetivo:** Validar se o estilo/layout da caixa de seleção está conforme o protótipo.  
**Prioridade:** Baixa  
**Navegador:** Chrome / Edge  
**Pré-condição:** Protótipo disponível  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Comparar o layout/estilo da caixa de seleção com o protótipo.
**Resultado esperado:** Layout idêntico ao protótipo.  
**Resultado obtido:** Layout/estilo do checkbox diverge do protótipo.  
**Status:** FAIL  
**Bug relacionado:** BUG-011

---

## Caso de Teste 006 — Validação CPF: campo vazio
**Objetivo:** Garantir que o sistema impeça salvamento quando CPF obrigatório estiver vazio.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Formulário disponível  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Deixar o CPF vazio.
3. Tentar salvar/cadastrar.
**Dados:** CPF = vazio  
**Resultado esperado:** Bloqueio do salvamento e mensagem de validação apropriada.  
**Resultado obtido:** Bloqueio do salvamento ocorre via validação padrão do navegador (“Preencha este campo.”).  
**Status:** PASS

---

## Caso de Teste 007 — Validação CPF: formato inválido (letras)
**Objetivo:** Verificar se o sistema trata CPF com caracteres inválidos e bloqueia o cadastro.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Informar CPF com letras.
3. Tentar salvar/cadastrar.
**Dados:** CPF = "abc" (ou similar)  
**Resultado esperado:** Campo rejeita entrada inválida ou exibe mensagem de erro; não salva.  
**Resultado obtido:** O campo CPF aceita letras (ex.: `qadfgvisagf`) e o sistema permite salvar o cadastro. Após salvar, o registro inválido aparece na listagem sem mensagem de validação.  
**Status:** FAIL  
**Bug relacionado:** BUG-015  
**Evidência:** `3.Evidencias/2.Formulário-Validações/BUG-015/aplicacao_lista_BUG-015.png`  
**Vídeo:** `3.Evidencias/2.Formulário-Validações/BUG-015/validacao_nome_cpf_aplicacao.mp4`

---

## Caso de Teste 008 — Validação CPF: dígitos inválidos (DV incorreto)
**Objetivo:** Garantir que CPF com dígitos verificadores incorretos seja rejeitado e impeça o salvamento do cadastro.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Formulário "+ Adicionar Funcionário" disponível.  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Clicar em "+ Adicionar Funcionário".
3. Preencher os campos obrigatórios com dados válidos (ex.: Nome e Data de nascimento).
4. Informar um CPF com dígitos inválidos (DV incorreto) — exemplo: `111.111.111-11` (ou `11111111111`).
5. Clicar em "Salvar".
6. Observar se o sistema permite salvar e se o registro aparece na listagem.

**Dados:** CPF inválido (DV incorreto) = `11111111111`  
**Resultado esperado:** Sistema deve invalidar o CPF (DV/tamanho/formato) e impedir o salvamento, exibindo mensagem de validação.  
**Resultado obtido:** O sistema aceita CPF com dígitos inválidos e permite salvar o cadastro. Após salvar, o registro aparece na listagem sem mensagem de validação.  
**Status:** FAIL  
**Bug relacionado:** BUG-015  
**Evidência:** `3.Evidencias/2.Formulário-Validações/BUG-015/aplicacao_lista_BUG-015_cpf_digitos_invalidos.png`  
**Vídeo:** `3.Evidencias/2.Formulário-Validações/BUG-015/validacao_cpf_digitos_invalidos_aplicacao.mp4`

---

## Caso de Teste 009 — Validação CPF: CPF válido
**Objetivo:** Confirmar que CPF válido permite prosseguir com o cadastro.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Preencher CPF válido.
3. Preencher demais campos obrigatórios.
4. Salvar/cadastrar.
**Dados:** CPF válido  
**Resultado esperado:** Cadastro permitido e salvo com sucesso.  
**Resultado obtido:** Cadastro permitido (CPF válido aceito) e registro salvo com sucesso.  
**Status:** PASS  
**Evidência:** `3.Evidencias/5.Automatização`

---

## Caso de Teste 010 — Validação Data: campo vazio
**Objetivo:** Garantir que o sistema bloqueie o salvamento quando o campo "Data de nascimento" estiver vazio (quando obrigatório).  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Formulário "+ Adicionar Funcionário" disponível.  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Clicar em "+ Adicionar Funcionário".
3. Preencher os demais campos obrigatórios com valores válidos.
4. Deixar o campo "Data de nascimento" vazio.
5. Clicar em "Salvar".

**Resultado esperado:** Bloqueio do salvamento e validação indicando que o campo deve ser preenchido.  
**Resultado obtido:** Ao deixar "Data de nascimento" vazio, o sistema bloqueia o salvamento (validação do próprio campo/navegador).  
**Status:** PASS  

---

## Caso de Teste 011 — Validação Data: data inexistente/formato inválido
**Objetivo:** Verificar que datas inválidas (ex.: 31/02) e formatos incorretos não sejam aceitos no campo de data.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Formulário "+ Adicionar Funcionário" disponível.  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Clicar em "+ Adicionar Funcionário".
3. Tentar informar uma data inválida (ex.: 31/02) ou digitar um formato incorreto no campo "Data de nascimento".

**Resultado esperado:** O sistema deve impedir a inserção de data inválida e/ou não permitir o formato incorreto.  
**Resultado obtido:** Não é possível inserir datas inválidas, pois o próprio componente de data limita e impede valores fora do padrão (prevenção de erro).  
**Status:** PASS  

---

## Caso de Teste 012 — Validação Data: data válida
**Objetivo:** Confirmar que data válida permite prosseguir com o cadastro.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Informar data válida.
3. Preencher demais campos obrigatórios.
4. Salvar/cadastrar.
**Resultado esperado:** Cadastro permitido e salvo com sucesso.  
**Resultado obtido:** Data válida aceita e cadastro salvo com sucesso (junto aos demais obrigatórios).  
**Status:** PASS  
**Evidência:** `3.Evidencias/5.Automatização/print_cypress.png`

---

## Caso de Teste 013 — Botão “Adicionar EPI”: presença e layout
**Objetivo:** Verificar se o botão “Adicionar EPI” existe e segue o layout do protótipo.  
**Prioridade:** Média  
**Navegador:** Chrome / Edge  
**Pré-condição:** Protótipo disponível  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Verificar se existe o botão “Adicionar EPI” e se o layout está conforme protótipo.
**Resultado esperado:** Botão presente e com layout conforme protótipo.  
**Resultado obtido:** Botão presente, porém layout/posicionamento diverge do protótipo.  
**Status:** FAIL  
**Bug relacionado:** BUG-009

---

## Caso de Teste 014 — Botão “Adicionar EPI”: funcionamento
**Objetivo:** Validar que é possível adicionar um EPI corretamente via interface.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Clicar em “Adicionar EPI”.
3. Inserir um EPI e confirmar inclusão (conforme comportamento do sistema).
**Resultado esperado:** EPI é adicionado corretamente e aparece na lista/seleção.  
**Resultado obtido:** Funcionalidade não executa corretamente conforme protótipo/esperado.  
**Status:** FAIL  
**Bug relacionado:** BUG-009

---

## Caso de Teste 015 — Adicionar múltiplos EPIs
**Objetivo:** Garantir que múltiplos EPIs possam ser adicionados sem perda ou comportamento incorreto.  
**Prioridade:** Média  
**Navegador:** Chrome / Edge  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Adicionar 2 ou mais EPIs.
**Resultado esperado:** Sistema mantém lista correta sem sobrescrever/duplicar indevidamente.  
**Resultado obtido:** Não foi possível validar adequadamente devido a falha na funcionalidade de adicionar EPI.  
**Status:** FAIL  
**Bug relacionado:** BUG-009

---

## Caso de Teste 016 — Atividades: texto e nomenclatura
**Objetivo:** Verificar se o texto/label de atividade está correto e conforme o protótipo.  
**Prioridade:** Média  
**Navegador:** Chrome / Edge  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Verificar rótulo/campo relacionado a “atividade”.
**Resultado esperado:** Texto correto e conforme protótipo.  
**Resultado obtido:** Texto exibido de forma truncada/incompleta (ex.: “Ativid”).  
**Status:** FAIL  
**Bug relacionado:** BUG-010

---

## Caso de Teste 017 — Atividades: inclusão e ordenação/numeração
**Objetivo:** Validar a inclusão de atividades e a exibição/ordenação conforme esperado.  
**Prioridade:** Média  
**Navegador:** Chrome / Edge  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Adicionar mais de uma atividade.
3. Verificar sequência/ordem exibida.
**Resultado esperado:** Atividades adicionadas corretamente e sequência/ordem conforme protótipo.  
**Resultado obtido:** Divergência na exibição/nomes das atividades (texto truncado), afetando a leitura do padrão/ordenação.  
**Status:** FAIL  
**Bug relacionado:** BUG-010

---

## Caso de Teste 018 — Persistência: salvar funcionário
**Objetivo:** Confirmar que o cadastro do funcionário é salvo corretamente no sistema.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Preencher dados obrigatórios (incluindo CPF válido e data válida).
3. Salvar/cadastrar.
**Resultado esperado:** Registro salvo e confirmado (ex.: aparece na lista/mensagem de sucesso).  
**Resultado obtido:** Registro salvo e exibido na lista após cadastro.  
**Status:** PASS  
**Evidência:** `3.Evidencias/5.Automatização/print_cypress.png`

---

## Caso de Teste 019 — Recuperação: consultar funcionário salvo
**Objetivo:** Garantir que um funcionário salvo possa ser recuperado/visualizado sem erro.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Existir funcionário salvo  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Localizar o funcionário cadastrado.
3. Abrir/visualizar os dados cadastrados (via menu de opções “...” / ação de editar/visualizar, conforme fluxo esperado).

**Resultado esperado:** Dados recuperados corretamente e sem erros (visualização/abertura do registro disponível).  
**Resultado obtido:** Não executado. Não foi possível abrir/visualizar os dados do funcionário, pois o menu de opções “...” não apresenta/aciona corretamente as ações necessárias (Alterar/Excluir), bloqueando o fluxo de consulta/recuperação.  
**Status:** N/E  
**Bug relacionado:** BUG-012

---

## Caso de Teste 020 — Persistência após recarregar a página
**Objetivo:** Verificar que os dados persistem após recarregar a página.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Existir funcionário salvo  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Recarregar a página (F5).
3. Consultar novamente o funcionário.
**Resultado esperado:** Registro permanece salvo e recuperável após recarregar.  
**Resultado obtido:** O registro permanece salvo após recarregar a página.  
**Status:** PASS

---

## Caso de Teste 021 — Edição via menu “...”
**Objetivo:** Validar que é possível editar um funcionário via menu de opções e salvar alterações.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Existir funcionário salvo  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. No registro, abrir o menu de opções “...”.
3. Selecionar “Editar/Alterar” e alterar um campo.
4. Salvar edição.
**Resultado esperado:** Alteração salva e refletida ao reabrir o registro.  
**Resultado obtido:** Menu de opções não apresenta fluxo/opções conforme protótipo (ações não disponíveis como esperado).  
**Status:** FAIL  
**Bug relacionado:** BUG-012

---

## Caso de Teste 022 — Exclusão via menu “...”
**Objetivo:** Confirmar que é possível excluir um funcionário e que ele não aparece mais na listagem/consulta.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Existir funcionário salvo  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. No registro, abrir o menu de opções “...”.
3. Selecionar “Excluir” e confirmar (se houver confirmação).
**Resultado esperado:** Registro removido e não aparece mais na listagem/consulta.  
**Resultado obtido:** Menu de opções não apresenta a ação “Excluir” conforme protótipo/fluxo esperado.  
**Status:** FAIL  
**Bug relacionado:** BUG-012

---

## Caso de Teste 023 — Navegação: links para “Em breve”
**Objetivo:** Garantir que os links/menus direcionem para “Em breve” conforme requisito.  
**Prioridade:** Média  
**Navegador:** Chrome / Edge  
**Passos:**
1. Clicar em itens de menu/links disponíveis (fora de Funcionário(s)).
2. Verificar redirecionamento.
**Resultado esperado:** Todos os links levam para a página “Em breve”.  
**Resultado obtido:** Clique em ícones/itens da sidebar não redireciona conforme esperado.  
**Status:** FAIL  
**Bug relacionado:** BUG-007

---

### Caso de Teste 024 — Compatibilidade: fluxo principal no Chrome
**Objetivo:** Validar o fluxo principal (criar/consultar/editar/excluir) no Chrome.  
**Prioridade:** Alta  
**Navegador:** Chrome  
**Pré-condição:** Aplicação acessível e módulo "Funcionário(s)" disponível.  

**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Executar o Caso de Teste 018 (salvar funcionário).
3. Executar o Caso de Teste 019 (recuperar funcionário).
4. Executar o Caso de Teste 021 (editar).
5. Executar o Caso de Teste 022 (excluir).

**Resultado esperado:** Fluxo completo funciona no Chrome sem inconsistências.  
**Resultado obtido:** Cadastro (CT018) executado com sucesso. As etapas de recuperar/editar/excluir (CT019/CT021/CT022) não puderam ser concluídas corretamente devido a falha no menu “...” (ações Alterar/Excluir não funcionam conforme esperado).  
**Status:** FAIL  
**Bug relacionado:** BUG-012  

---

## Caso de Teste 025 — Compatibilidade: fluxo principal no Edge
**Objetivo:** Validar o fluxo principal (criar/consultar/editar/excluir) no Edge.  
**Prioridade:** Alta  
**Navegador:** Edge  
**Pré-condição:** Aplicação acessível e módulo "Funcionário(s)" disponível.  

**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Executar o Caso de Teste 018 (salvar funcionário).
3. Executar o Caso de Teste 019 (recuperar funcionário).
4. Executar o Caso de Teste 021 (editar).
5. Executar o Caso de Teste 022 (excluir).

**Resultado esperado:** Fluxo completo funciona no Edge sem inconsistências.  
**Resultado obtido:** Cadastro (CT018) executado com sucesso. As etapas de recuperar/editar/excluir (CT019/CT021/CT022) não puderam ser concluídas corretamente devido a falha no menu “...” (ações Alterar/Excluir não funcionam conforme esperado).     
**Status:** FAIL  
**Bug relacionado:** BUG-012

---

## Caso de Teste 026 — Validação Nome: não aceitar números
**Objetivo:** Garantir que o campo Nome rejeite valores inválidos contendo números e impeça o salvamento do cadastro.  
**Prioridade:** Alta  
**Navegador:** Chrome / Edge  
**Pré-condição:** Formulário "+ Adicionar Funcionário" disponível.  
**Passos:**
1. Acessar a aba "Funcionário(s)".
2. Clicar em "+ Adicionar Funcionário".
3. Preencher o campo Nome com números (ex.: `111111111111`).
4. Preencher os demais campos obrigatórios com valores válidos (CPF numérico válido e data válida).
5. Clicar em "Salvar".
**Resultado esperado:** Sistema deve bloquear o salvamento e exibir mensagem de validação para o campo Nome.  
**Resultado obtido:** O campo Nome aceita números e o sistema permite salvar o cadastro. Após salvar, o registro inválido aparece na listagem sem mensagem de validação.  
**Status:** FAIL  
**Bug relacionado:** BUG-015  
**Evidência:** `3.Evidencias/2.Formulário-Validações/BUG-015`  
**Vídeo:** `3.Evidencias/2.Formulário-Validações/BUG-015/validacao_nome_cpf_aplicacao.mp4`

