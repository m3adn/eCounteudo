# RIP - Trabalho prático 6

> Considere o seguinte cenário de rede:

![Cenário protocolo 6](/img/redes/p6.png)

> Tem disponíveis as seguintes redes para atribuir aos equipamentos:
>
> - LAN 0 e LAN 1: 192.168.0.0/16
>
> - LAN 2 e LAN 3: 172.16.0.0/16
>
> - ligações entre routers: 10.0.0.0/24
>
> Efetue a divisão em sub-redes, de modo a garantir que cada umas das redes pode conter o seguinte número de hosts:
>  
> - LAN 0: 120hosts
>
> - LAN 1: 200hosts
>
> - LAN 2: 64hosts
>
> - LAN 3: 120hosts
>
> Implemente o cenário no simulador e configure os equipamentos. Utilize o RIP como protocolo de routing.
>
> Verifique os seguintes pontos:
>
> - As rotas escolhidas por cada um routers é o esperado?
>
> - Verifique a métrica de cada uma das redes.
>
> - O que acontece quando a ligação entre ISP0 e IPS1 é quebrada?

## Divisão em sub-redes

### Redes

|         LAN       |       Rede        |   IPs livres |    Broadcast  |    Gateway    |
|        :---       |       :---        |    :---:     |     :---      |     :---      |
| LAN 0 (120 hosts) | 192.168.0.0   /25 |   1 - 126    | 192.168.0.127 | 192.168.0.126 |
| LAN 1 (200 hosts) | 192.168.1.0   /24 |   1 - 254    | 192.168.1.255 | 192.168.0.254 |
| LAN 2 (64 hosts)  | 172.16.0.0    /25 |   1 - 126    | 171.16.0.127  | 172.16.0.126  |
| LAN 2 (120 hosts) | 172.16.0.128  /25 | 129 - 254    | 171.16.0.255  | 172.16.0.254  |

### Routers links

|    Link       |   Rede         |  IPs livres | Broadcast  |    Serial     |
|    :---       |   :---         |  :---       | :---       |     :---:     |
| ISP 0 - R0    | 10.0.0.0   /30 |  1 - 2      | 10.0.0.3   | 0/0/0 - 0/0/0 |
| ISP 0 - ISP 1 | 10.0.0.4   /30 |  5 - 6      | 10.0.0.7   | 0/0/1 - 0/0/0 |
| ISP 1 - R1    | 10.0.0.8   /30 |  9 - 10     | 10.0.0.11  | 0/0/1 - 0/0/0 |
| ISP 2 - R0    | 10.0.0.12  /30 | 13 - 14     | 10.0.0.15  | 0/0/0 - 0/0/1 |
| ISP 2 - R0    | 10.0.0.16  /30 | 17 - 18     | 10.0.0.19  | 0/0/1 - 0/0/1 |

## Implementação

- Configuração dos routers

### Router ISP 0

```bash
Router> enable

Router# configure terminal

Router(config)# hostname ISP0

ISP0(config)# interface serial 0/0/0
ISP0(config-if)# ip address 10.0.0.1 255.255.255.252
ISP0(config-if)# no shutdown

ISP0(config-if)# exit

ISP0(config)# interface serial 0/0/1
ISP0(config-if)# ip address 10.0.0.5 255.255.255.252
ISP0(config-if)# clock rate 64000
ISP0(config-if)# no shutdown

ISP0(config-if)# exit

ISP0(config)# router rip
ISP0(config-router)# version 2
ISP0(config-router)# network 10.0.0.0
ISP0(config-router)# network 10.0.0.4
ISP0(config-router)# no auto-summary
ISP0(config-router)# end

ISP0# copy running-config startup-config
```

### Router ISP 1

```bash
Router> enable

Router# configure terminal

Router(config)# hostname ISP1

ISP1(config)# interface serial 0/0/0
ISP1(config-if)# ip address 10.0.0.6 255.255.255.252
ISP1(config-if)# no shutdown

ISP1(config-if)# exit

ISP1(config)# interface serial 0/0/1
ISP1(config-if)# ip address 10.0.0.9 255.255.255.252
ISP1(config-if)# clock rate 64000
ISP1(config-if)# no shutdown

ISP1(config-if)# exit

ISP1(config)# router rip
ISP1(config-router)# version 2
ISP1(config-router)# network 10.0.0.4
ISP1(config-router)# network 10.0.0.8
ISP1(config-router)# no auto-summary
ISP1(config-router)# end

ISP1# copy running-config startup-config
```

### Router ISP 2

```bash
Router> enable

Router# configure terminal

Router(config)# hostname ISP2

ISP2(config)# interface serial 0/0/0
ISP2(config-if)# ip address 10.0.0.17 255.255.255.252
ISP2(config-if)# clock rate 64000
ISP2(config-if)# no shutdown

ISP2(config-if)# exit

ISP2(config)# interface serial 0/0/1
ISP2(config-if)# ip address 10.0.0.13 255.255.255.252
ISP2(config-if)# clock rate 64000
ISP2(config-if)# no shutdown

ISP2(config-if)# exit

ISP2(config)# router rip
ISP2(config-router)# version 2
ISP2(config-router)# network 10.0.0.16
ISP2(config-router)# network 10.0.0.12
ISP2(config-router)# no auto-summary
ISP2(config-router)# end

ISP2# copy running-config startup-config
```

### Router R0

```bash
Router> enable

Router# configure terminal

Router(config)# hostname R0

R0(config)# interface fastEthernet 0/0
R0(config-if)# ip address 192.168.0.126 255.255.255.128
R0(config-if)# no shutdown

R0(config-if)# exit

R0(config)# interface fastEthernet 0/1
R0(config-if)# ip address 192.168.1.254 255.255.255.0
R0(config-if)# no shutdown

R0(config-if)# exit

R0(config)# interface serial 0/0/0
R0(config-if)# ip address 10.0.0.2 255.255.255.252
R0(config-if)# no shutdown

R0(config-if)# exit

R0(config)# interface serial 0/0/1
R0(config-if)# ip address 10.0.0.18 255.255.255.252
R0(config-if)# no shutdown

R0(config-if)# exit

R0(config)# router rip
R0(config)# version 2
R0(config-router)# network 192.168.0.0
R0(config-router)# network 192.168.1.0
R0(config-router)# network 10.0.0.0
R0(config-router)# network 10.0.0.16
R0(config-router)# passive-interface fastEthernet 0/0
R0(config-router)# passive-interface fastEthernet 0/1
R0(config-router)# no auto-summary
R0(config-router)# end

R0# copy running-config startup-config
```

### Router R1

```bash
Router> enable

Router# configure terminal

Router(config)# hostname R1
R1(config)# interface fastEthernet 0/0
R1(config-if)# ip address 172.16.0.126 255.255.255.128
R1(config-if)# no shutdown

R1(config-if)#exit

R1(config)# interface fastEthernet 0/1
R1(config-if)# ip address 172.16.0.254 255.255.255.128
R1(config-if)# no shutdown

R1(config-if)# exit

R1(config)# interface serial 0/0/0
R1(config-if)# ip address 10.0.0.10 255.255.255.252
R1(config-if)# no shutdown

R1(config-if)# exit

R1(config)# interface serial 0/0/1
R1(config-if)# ip address 10.0.0.14 255.255.255.252
R1(config-if)# no shutdown

R1(config-if)# exit

R1(config)#router rip
R1(config)# version 2
R1(config-router)#network 172.16.0.0
R1(config-router)#network 172.16.0.128
R1(config-router)#network 10.0.0.8
R1(config-router)#network 10.0.0.12
R1(config-router)#passive-interface fastEthernet 0/0
R1(config-router)#passive-interface fastEthernet 0/1
R1(config-router)#no auto-summary
R1(config-router)#end

R1# copy running-config startup-config
```

## Tabelas de routing

`show ip route`

R0

```bash
     10.0.0.0/30 is subnetted, 4 subnets
C       10.0.0.0 is directly connected, Serial0/0/0
C       10.0.0.4 is directly connected, Serial0/0/1
R       10.0.0.8 [120/2] via 10.0.0.5, 00:00:08, Serial0/0/1
R       10.0.0.12 [120/1] via 10.0.0.5, 00:00:08, Serial0/0/1
     172.16.0.0/16 is variably subnetted, 3 subnets, 2 masks
R       172.16.0.0/16 [120/2] via 10.0.0.5, 00:00:08, Serial0/0/1
R       172.16.0.0/25 [120/2] via 10.0.0.5, 00:00:08, Serial0/0/1
R       172.16.0.128/25 [120/2] via 10.0.0.5, 00:00:08, Serial0/0/1
     192.168.0.0/25 is subnetted, 1 subnets
C       192.168.0.0 is directly connected, FastEthernet0/0
C    192.168.1.0/24 is directly connected, FastEthernet0/1
```

R1

```bash
     10.0.0.0/30 is subnetted, 4 subnets
R       10.0.0.0 [120/2] via 10.0.0.13, 00:00:24, Serial0/0/1
R       10.0.0.4 [120/1] via 10.0.0.13, 00:00:24, Serial0/0/1
C       10.0.0.8 is directly connected, Serial0/0/0
C       10.0.0.12 is directly connected, Serial0/0/1
     172.16.0.0/25 is subnetted, 2 subnets
C       172.16.0.0 is directly connected, FastEthernet0/0
C       172.16.0.128 is directly connected, FastEthernet0/1
     192.168.0.0/24 is variably subnetted, 2 subnets, 2 masks
R       192.168.0.0/24 is possibly down, routing via 10.0.0.13, Serial0/0/1
R       192.168.0.0/25 [120/2] via 10.0.0.13, 00:00:24, Serial0/0/1
R    192.168.1.0/24 [120/2] via 10.0.0.13, 00:00:24, Serial0/0/1
```

ISP 2

```bash

```
