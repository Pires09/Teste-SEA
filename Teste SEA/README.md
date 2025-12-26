# Desafio QA — SEA (Gabriel Pires)

Repositório com documentação e execução do desafio de Analista de Teste (QA), incluindo plano de testes, casos de teste, registro de bugs com evidências e automação E2E com Cypress.

## Links do desafio
- Aplicação: http://analista-teste.seatecnologia.com.br/
- Protótipo (referência): https://tinyurl.com/yl58hs4m

## Estrutura do projeto
- `1.Plano_de_testes/`
  - `plano_de_Testes.md` → Plano de testes (escopo, estratégia, critérios)
- `2.Casos_de_teste/`
  - `casos_de_teste.md` → Casos de teste + status (PASS/FAIL/N/E)
- `3.Evidencias/`
  - Evidências organizadas por categoria e por bug (prints/vídeos)
- `cypress/`
  - `e2e/spec.cy.js` → Cenários automatizados (2 funcionalidades)
- `cypress.config.js` → Configuração do Cypress (baseUrl, vídeo, screenshots)

## Relatórios (Organizados em uma pasta única)
- `relatorio_final.md` → resumo consolidado (métricas, achados, recomendações)
- `analise_e_melhorias.md` → análise geral e melhorias recomendadas

## Como executar a automação (Cypress)

### Requisitos
- Node.js 
- Cypress
