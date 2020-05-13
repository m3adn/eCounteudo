# OSPF - Trabalho prático 8

Considere o seguinte cenário de rede:

![Cenário protocolo 6](/img/redes/5R4L.png)

Tem disponíveis as seguintes redes para atribuir aos equipamentos:

- LAN0 e LAN1: 192.168.0.0 /16
- LAN0 e LAN1: 172.16.0.0  /16
- Entre Routers: 10.0.0.0  /24

Efetue a divisão em sub-redes, de modo a garantir que cada uma redes pode conter o seguinte número de hosts:

- LAN0: 500 Host
- LAN1: 200 Host
- LAN2: 200 Host
- LAN3: 500 Host

Implemente o cenário no simulador e configure os equipamentos. Utilize o OSPF como protocolo de routing.

Verifique os seguintes pontos:

- As rotas escolhidas por cada um dos routers é o esperado?
- Verifique a métrica de cada uma das redes.
- O que acontece quando a ligação IPS0 e ISP1 é quebrada?
- Altere a largura de banda (usando o comando clock rate) das linhas entre os routers e verifique como é que o custo das rotas é afetado.
- É possível alterar a informação de largura de banda das ligações de modo a que os routers selecionem uma rota diferente das escolhida inicialmente?

## Divisão em sub-redes

### LANs

|         LAN       |       Rede                       |   IPs livres  |    Broadcast  |    Gateway    |
|        :---       |       :---                       |    :---:      |     :---      |     :---      |
| LAN 0 (500 hosts) | 192.168.0.0  /23 (255.255.254.0) |   1 - .1.254  | 192.168.1.255 | 192.168.1.254 |
| LAN 1 (200 hosts) | 192.168.2.0  /24 (255.255.254.0) |   1 - 254     | 192.168.2.255 | 192.168.2.254 |
| LAN 2 (200 hosts) | 172.16.0.0   /24 (255.255.254.0) |   1 - 254     | 172.16.0.255  | 172.16.0.254  |
| LAN 3 (500 hosts) | 172.16.2.0   /23 (255.255.254.0) |   2.1 - 3.254 | 172.16.3.255  | 172.16.3.254  |

### Routers links

|    Link         |   Rede                           |  IPs livres | Broadcast  |    Serial     |
|    :---         |   :---                           |  :---       | :---       |     :---:     |
| ISP 0 - R0      | 10.0.0.0   /30 (255.255.255.252) |  1 - 2      | 10.0.0.3   | 0/0/0 - 0/0/0 |
| ISP 0 - ISP1    | 10.0.0.4   /30 (255.255.255.252) |  5 - 6      | 10.0.0.7   | 0/0/1 - 0/0/0 |
| ISP 1 - R1      | 10.0.0.8   /30 (255.255.255.252) |  9 - 10     | 10.0.0.11  | 0/0/1 - 0/0/0 |
| ISP 2 - R0      | 10.0.0.12  /30 (255.255.255.252) |  13 - 14    | 10.0.0.15  | 0/0/0 - 0/0/1 |
| ISP 2 - R1      | 10.0.0.16  /30 (255.255.255.252) |  17 - 18    | 10.0.0.19  | 0/0/1 - 0/0/1 |

## Configurar os IPs

### Router ISP 0

```bash
Router>enable
Router#configure terminal
Router(config)#hostname ISP0
ISP0(config)#interface serial 0/0/0
ISP0(config-if)#ip address 10.0.0.1 255.255.255.252
ISP0(config-if)#clock rate 64000
ISP0(config-if)#no shutdown

ISP0(config-if)#interface serial 0/0/1
ISP0(config-if)#ip address 10.0.0.5 255.255.255.252
ISP0(config-if)#clock rate 64000
ISP0(config-if)#no shutdown
ISP0(config-if)#end
```

### Router ISP 1

```bash
Router>ena
Router>enable
Router#configure terminal

Router(config)#hostname ISP1
ISP1(config)#interface serial 0/0/0
ISP1(config-if)#ip address 10.0.0.6 255.255.255.252
ISP1(config-if)#no shutdown

ISP1(config-if)#interface serial 0/0/1
ISP1(config-if)#ip address 10.0.0.9 255.255.255.252
ISP1(config-if)#clock rate 64000
ISP1(config-if)#no shutdown

ISP1(config-if)#end
```

### Router ISP 2

```bash
Router>enable
Router#configure terminal
Router(config)#hostname ISP2
ISP2(config)#interface serial 0/0/0
ISP2(config-if)#ip address 10.0.0.13 255.255.255.252
ISP2(config-if)#clock rate 64000
ISP2(config-if)#no shutdown

ISP2(config-if)#interface serial 0/0/1
ISP2(config-if)#ip address 10.0.0.17 255.255.255.252
ISP2(config-if)#clock rate 64000
ISP2(config-if)#no shutdown

ISP2(config-if)#end
```

### Router R0

```bash
Router> enable
Router# configure terminal
Router(config)# hostname R0

R0(config)# interface serial 0/0/0
R0(config-if)# ip address 10.0.0.2 255.255.255.252
R0(config-if)# no shutdown

R0(config)# interface serial 0/0/1
R0(config-if)# ip address 10.0.0.14 255.255.255.252
R0(config-if)# no shutdown

R0(config-if)# exit

R0(config)# interface fastEthernet 0/0
R0(config-if)# ip address 192.168.1.254 255.255.254.0
R0(config-if)# no shutdown

R0(config-if)# interface fastEthernet 0/1
R0(config-if)# ip address 192.168.2.254 255.255.255.0
R0(config-if)# no shutdown

R0(config-if)# end
```

### Router R1

```bash
Router> enable
Router# configure terminal
Router(config)# hostname R1

R1(config)# interface serial 0/0/0
R1(config-if)# ip add 10.0.0.10 255.255.255.252
R1(config-if)# no shutdown

R1(config-if)# interface serial 0/0/1
R1(config-if)# ip add 10.0.0.18 255.255.255.252
R1(config-if)# no shutdown

R1(config-if)# exit

R1(config)# interface fastEthernet 0/0
R1(config-if)# ip address 172.16.0.254 255.255.255.0
R1(config-if)# no shutdown

R1(config-if)# interface fastEthernet 0/1
R1(config-if)# ip address 172.16.3.254 255.255.254.0
R1(config-if)# no shutdown

R1(config-if)# end
```

## Configurar protocolo OSPF

### Router R0

```bash
R0# enable
R0# configure terminal

R0(config)# router ospf 100
R0(config-router)# exit

R0(config)# interface serial 0/0/0
R0(config-if)# ip ospf 100 area 0
R0(config-if)# interface serial 0/0/1
R0(config-if)# ip ospf 100 area 0

R0(config-if)# exit

R0(config)# interface fastEthernet 0/0
R0(config-if)# ip ospf 100 area 0
R0(config-if)# interface fastEthernet 0/1
R0(config-if)# ip ospf 100 area 0

R0(config-if)# exit
R0(config)# router ospf 100
R0(config-router)# passive-interface fastEthernet 0/0
R0(config-router)# passive-interface fastEthernet 0/1

R0(config-router)# end
```

### Router R1

```bash
R1> enable
R1# configure terminal

R1(config)# router ospf 100
R1(config-router)# exit

R1(config)# interface serial 0/0/0
R1(config-if)# ip ospf 100 area 0
R1(config-if)# interface serial 0/0/1
R1(config-if)# ip ospf 100 area 0

R1(config-if)# exit

R1(config)# interface fastEthernet 0/0
R1(config-if)# ip ospf 100 area 0
R1(config-if)# interface fastEthernet 0/1
R1(config-if)# ip ospf 100 area 0

R1(config-if)# exit

R1(config)# router ospf 100
R1(config-router)# passive-interface fastEthernet 0/0
R1(config-router)# passive-interface fastEthernet 0/1
R1(config-router)# end
```

### Router ISP 0

```bash
ISP0> enable
ISP0# configure terminal
ISP0(config)# router ospf 100

ISP0(config-router)# exit

ISP0(config)# interface serial 0/0/0
ISP0(config-if)# ip ospf 100 area 0
ISP0(config-if)# interface serial 0/0/1
ISP0(config-if)# ip ospf 100 area 0

ISP0(config-if)# end
```

### Router ISP 1

```bash
ISP1> enable
ISP1# configure terminal
ISP1(config)# router ospf 100
ISP1(config-router)# exit

ISP1(config)# interface serial 0/0/0
ISP1(config-if)# ip ospf 100 area 0
ISP1(config-if)# interface serial 0/0/1
ISP1(config-if)# ip ospf 100 area 0
ISP1(config-if)# end
```

### Router ISP 2

```bash
ISP2> enable
ISP2# configure terminal
ISP2(config)# router ospf 100
ISP2(config-router)# exit

ISP2(config)# interface serial 0/0/0
ISP2(config-if)# ip ospf 100 area 0
ISP2(config-if)# interface serial 0/0/1
ISP2(config-if)# ip ospf 100 area 0
ISP2(config-if)# end
```