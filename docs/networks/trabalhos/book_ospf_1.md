# OSPF - Exemplos

## Configuração do protocolo OSPF em Routers Cisco

![Cenário protocolo 1](/img/redes/ospf_exemplos_a.png)

### Configurar os IPs

#### Router 0

```bash
Router>enable
Router#configure terminal
Router(config)#hostname R0

R0(config)#interface serial 0/0/0
R0(config-if)#ip address 192.168.2.1 255.255.255.252
R0(config-if)#clock rate 64000
R0(config-if)#no shutdown


R0(config-if)#interface serial 0/0/1
R0(config-if)#ip address 192.168.3.1 255.255.255.252
R0(config-if)#clock rate 64000
R0(config-if)#no shutdown
R0(config-if)#end
```

#### Router 1

```bash
Router> enable
Router# configure terminal
Router(config)# hostname R1

R1(config)# interface fastEthernet 0/0
R1(config-if)# ip address 192.168.1.254 255.255.255.0
R1(config-if)# no shutdown

R1(config-if)# exit

R1(config)# interface serial 0/0/0
R1(config-if)# ip address 192.168.2.2 255.255.255.252
R1(config-if)# no shutdown
R1(config-if)# end
```

#### Router 2

```bash
Router> enable
Router# configure terminal
Router(config)# hostname R2

R2(config)# interface fastEthernet 0/0
R2(config-if)# ip address 192.168.4.254 255.255.255.0
R2(config-if)# no shutdown

R2(config-if)# exit

R2(config)# interface serial 0/0/0
R2(config-if)# ip address 192.168.3.2 255.255.255.252
R2(config-if)# no shutdown
R2(config-if)# end
```

### Configurar o protocolo OSPF

#### OSPF Router 0

```bash
R0> enable
R0# configure terminal
R0(config)# router ospf 100

R0(config-router)# network 192.168.2.1 0.0.0.0 area 0
R0(config-router)# network 192.168.3.1 0.0.0.0 area 0

R0(config-router)# exit

R0(config)# interface loopback 0
R0(config-if)# ip address 172.16.2.1 255.255.255.0
R0(config-if)# no shutdown
R0(config-if)# end
```

#### OSPF Router 1

```bash
R1# enable
R1# configure terminal

R1(config)# router ospf 100
R1(config-router)# network 192.168.1.254 0.0.0.0 area 0
R1(config-router)# network 192.168.2.2 0.0.0.0 area 0

R1(config-router)# exit

R1(config)# interface loopback 0
R1(config-if)# ip address 172.16.1.1 255.255.255.0
R1(config-if)# no shutdown
R1(config-if)# end
```

#### OSPF Router 2

```bash
R2# enable
R2# configure terminal

R2(config)# router ospf 100
R2(config-router)# network 192.168.4.254 0.0.0.0 area 0
R2(config-router)# network 192.168.3.2 0.0.0.0 area 0

R2(config-router)# exit

R2(config)# interface loopback 0
R2(config-if)# ip address 172.16.3.1 255.255.255.0
R2(config-if)# no shutdown
R2(config-if)# end
```

### Análise da rede

