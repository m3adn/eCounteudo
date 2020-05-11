# Resumos

## OSPF Métrica

No caso da CISCO usa o valor de referencia 100Mbps ($10^8$).

Para calcular do custo usamos a expressão:

$$custo = \frac{10^8}{largura \ da \ banda}$$

Usar o comando `auto-cost reference-bandwidth "value"` para alterar o valor de referencia.

| Ligação e Largura de Banda | Custo |
| :--- | :---: |
| Linha série 56Kbps    | 1785 |
| T1 1.544Mbps          |   64 |
| E2 2.048Mbps          |   48 |
| 4 Mbps (Token Ring)   |   25 |
| 10 Mbps (Token Ring)  |   10 |
| 16 Mbps (Token Ring)  |    6 |
| 100 Mbps (Token Ring) |    1 |

