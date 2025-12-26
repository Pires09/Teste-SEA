# Plano de Testes — Desafio (SEA)
**Versão:** 1.0  
**Data:** 22/12/2025 
**Autor:** Gabriel Pires  

## 1. Objetivo
Avaliar a aplicação web em desenvolvimento disponível em:
- App: http://analista-teste.seatecnologia.com.br/
- Protótipo (referência): https://tinyurl.com/yl58hs4m

O foco é verificar:
- Conformidade com o protótipo (design e estrutura).
- Funcionalidades principais do módulo de Funcionários (formulário, CRUD, persistência).
- Navegação.
- Compatibilidade nos principais navegadores testados.

## 2. Escopo

**A) Conformidade com o protótipo**
- Fonte.
- Cores.
- Presença de itens.
- Layout, alinhamento e espaçamentos conforme protótipo.

**B) Funcionalidades do formulário / Funcionários**
- Validações de CPF.
- Validações de data.
- Adicionar EPI.
- Adicionar atividades.
- Salvar dados do funcionário.
- Consultar funcionário salvo.
- Edição e exclusão.

**C) Navegação**
- Links e itens de menu levando para a página “Em breve”.

**D) Compatibilidade**
- Execução correta nos navegadores testados.

## 3. Estratégia de Testes

### 3.1 Abordagem
- Testes exploratórios seguindo os requisitos prévios.
- Casos de teste manuais para fluxos principais e validações.
- Registro de defeitos com evidências (prints/vídeos) e comparação com protótipo quando aplicável.
- Automação de no mínimo 2 funcionalidades (Cypress/Playwright/Selenium), com evidência de execução.

### 3.2 Priorização (por risco)
- Alta: persistência/recuperação, salvar funcionário, editar/excluir, validações (CPF/data).
- Média: adicionar EPI/atividades, navegação para “Em breve”.
- Baixa: ajustes visuais finos, quando não afeta uso, e inconsistências de espaçamento.

## 4. Tipos de Teste

### 4.1 Funcionais
- CRUD de funcionários (criar, recuperar, editar, excluir).
- Fluxos: adicionar EPI e adicionar atividade.
- Validações: CPF e data (válido/inválido, formato e obrigatoriedade).

### 4.2 UI/Design
- Fonte utilizada.
- Paleta de cores.
- Layout e posicionamento de elementos.
- Componentes presentes.

### 4.3 Navegação
- Links para telas futuras.

### 4.4 Compatibilidade
- Execução e renderização consistente em:
  - Chrome Versão 143.0.3650.96 (64 bits).
  - Edge Versão 143.0.7499.170 (64 bits).

### 4.5 Segurança (observações básicas)
- Validações de entrada: comportamento com campos vazios/valores inválidos.
- Mensagens de erro sem exposição de informações sensíveis.
- Comportamento básico do formulário frente a entradas inesperadas.

## 5. Ambiente e Dados de Teste

### 5.1 Ambiente
- URL: http://analista-teste.seatecnologia.com.br/
- SO: Windows
- Navegadores: Chrome e Edge
- Ferramentas: Captura de tela/vídeo

### 5.2 Dados de teste (exemplos)
- CPFs válidos (formato e dígitos corretos)
- CPFs inválidos (dígitos incorretos, tamanho incorreto, letras, vazio)
- RGs válidos (formato e dígitos corretos)
- RGs inválidos (dígitos incorretos, tamanho incorreto, letras, vazio)
- Datas válidas e inválidas (formato, data inexistente, campo vazio)

## 6. Critérios de Entrada e Saída

### 6.1 Entrada
- Aplicação acessível via URL
- Protótipo disponível
- Funcionalidades mínimas navegáveis (mesmo que incompletas)

### 6.2 Saída
- Casos de teste executados com evidências e status (Pass/Fail)
- Bugs registrados com severidade, impacto e evidências
- Automação entregue (mínimo 2 funcionalidades) + instruções de execução + evidência de execução
- Relatório final consolidado


## 7. Entregáveis
- Plano de Testes (este documento)
- Casos de Teste (arquivo/markdown) + resultados
- Relatórios de Bug (BUG-XXX.md)
- Evidências organizadas (prints e vídeos)
- Projeto de automação + instruções para execução
- Relatório final (resumo, achados, recomendações)

---

## 8. Padrões de Registro (Bugs/Evidências)
- Todo bug deve conter: título, tipo, severidade, impacto, ambiente, passos, atual x esperado, sugestão e evidências.
- Quando aplicável, o passo a passo deve iniciar com: **"1. Acessar a aba 'Funcionário(s)'"**.
- Indicar frequência: sempre / às vezes / intermitente.
- Evidências (quando comparando protótipo):
  - 1 imagem da aplicação + 1 imagem do protótipo
- Nome sugerido:
  - `BUG-XXX_app.png`, `BUG-XXX_prototipo.png`, `BUG-XXX_video.mp4`
