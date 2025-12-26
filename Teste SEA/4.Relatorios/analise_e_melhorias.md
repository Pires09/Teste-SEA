# Análise e Melhorias — Desafio QA (SEA)
**Autor:** Gabriel Pires  
**Data:** 22/12/2025  

## 1) Qualidade funcional (prioridade alta)
### CRUD de Funcionários
- **Problema:** menu “…” não disponibiliza Alterar/Excluir (BUG-012), bloqueando fluxo completo.
- **Melhoria:** implementar menu de contexto com ações funcionais e atualização imediata da lista após editar ou excluir.

### Validações (integridade de dados)
- **Problema:** Nome aceita números e CPF aceita letras/CPF inválido (BUG-015).
- **Melhoria:** validação client-side + server-side, com mensagens claras, máscara e validação de DV do CPF.

### EPI no formulário
- **Problema:** “Adicionar EPI” não permite múltiplos EPIs conforme protótipo (BUG-009).
- **Melhoria:** criar lista dinâmica de EPIs por atividade, permitir adicionar/remover itens e validar campos obrigatórios.

## 2) Navegação
- **Problema:** sidebar não redireciona para “Em breve” (BUG-007) e hover sem feedback (BUG-006).
- **Melhoria:** definir rotas/handlers para cada item da sidebar apontando para o componente “Em breve” e implementar estados hover/ativo.

## 3) Conformidade com protótipo (UI/Design)
- **Problema:** fonte/cor fora do padrão (BUG-001), stepper com labels/estado divergentes (BUG-003/004), background e alinhamentos (BUG-005/008), badges inconsistentes (BUG-013).
- **Melhoria:** centralizar “design tokens” (tipografia e paleta) e padronizar componentes reutilizáveis (stepper, badges, cards).

## 4) Usabilidade e escalabilidade
- **Problema:** lista não escala com muitos registros (BUG-014).
- **Melhoria:** aplicar scroll interno com altura fixa OU paginação. Garantir que ações do card fiquem acessíveis e visíveis.

## 5) Testabilidade / Automação
- **Sugestões:**
  - adicionar atributos `data-cy` / `data-testid` nos campos e botões para tornar automação mais estável;
  - automatizar também cenários críticos após correção: “Alterar/Excluir” e navegação para “Em breve”.
