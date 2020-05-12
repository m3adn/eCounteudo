# OSPF - Trabalho prático 7

Considere o seguinte cenário de rede:

![Cenário trabalho 7](/img/redes/3R2C3L.png)

Considere que dispões da fede 192.168.0.0/16 para atribuir às redes locais e a rede 10.1.1.0/24 para atribuir à ligações entre os routers. Cada uma redes locais derá suportar 200 hosts ligados.

Implemente o cenário no simulador e configure os equipamentos.

## Divisão em sub-redes

### Redes

|         LAN       |       Rede        |   IPs livres |    Broadcast  |    Gateway    |
|        :---       |       :---        |    :---:     |     :---      |     :---      |
| LAN 0 (200 hosts) | 192.168.0.0   /25 |   1 - 254    | 192.168.0.255 | 192.168.0.254 |
| LAN 1 (200 hosts) | 192.168.1.0   /24 |   1 - 254    | 192.168.1.255 | 192.168.1.254 |
| LAN 2 (200 hosts) | 192.168.2.0   /24 |   1 - 254    | 192.168.2.255 | 192.168.2.254 |

### Routers links

|    Link    |   Rede         |  IPs livres | Broadcast  |    Serial     |
|    :---    |   :---         |  :---       | :---       |     :---:     |
| R0 - R1    | 10.1.1.0   /30 |  1 - 2      | 10.1.1.3   | 0/0/0 - 0/0/0 |
| R1 - R2    | 10.1.1.4   /30 |  5 - 6      | 10.1.1.7   | 0/0/1 - 0/0/0 |
| R0 - R2    | 10.1.1.8   /30 |  9 - 10     | 10.1.1.11  | 0/0/1 - 0/0/1 |

## Configurar os IPs
