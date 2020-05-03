# Trabalho pratico 5

> Considere o seguinte cenário de rede:

![Construção de um FET de junção](/img/redes/p5.png)

> Considere que dispõe da rede 172.16.0.0/16 para atribuir às redes locais e a rede 10.0.0.0/24
> para atribuir à ligações entre os routers.
> Cada uma das redes locais deverá suportar 200 hosts ligados.

- Defina as redes que vai usar
  
  - Rede 0: 172.16.0.0/24
  
  - Rede 1: 172.16.1.0/24

  - Rede 2: 172.16.2.0/24

  - Router 0 $\rightleftarrows$ Router 1: 10.0.0.0/30

  - Router 1 $\rightleftarrows$ Router 2: 10.0.0.4/30

  - Router 0 $\rightleftarrows$ Router 2: 10.0.0.8/30 (Segunda implementação)

## Primeira implementação

- Apague as configurações do router.

`Igual para todos os routers`

```bash
Router> enable
Router# erase startup-config
Router# reload
```

- Entre em modo de execução privilegiada.
- Liste as interfaces do router

xx`Comando é igual para todos`

```bash
Router# show ip interface brief
```

`O resultado pode variar de router para router`

Resultado:

```bash
Interface              IP-Address      OK? Method Status                Protocol
FastEthernet0/0        unassigned      YES NVRAM  administratively down down
FastEthernet0/1        unassigned      YES NVRAM  administratively down down
Serial0/0/0            unassigned      YES NVRAM  administratively down down
Serial0/0/1            unassigned      YES NVRAM  administratively down down
Vlan1                  unassigned      YES NVRAM  administratively down down
```

`O Comando é o mesmo para o três routers`

Router R0 como exemplo

```bash
Router# configure terminal
Router(config)# hostname R0
R0(config)#
```

- Configure a Interfaces FastEthernet e as Interfaces Serial

Router R0

```bash
R0(config)# interface fastEthernet 0/0
R0(config-if)# ip address 172.16.0.254 255.255.255.0
R0(config-if)# no shutdown

R0(config-if)# exit
R0(config)# interface serial 0/0/0
R0(config-if)# ip address 10.0.0.1 255.255.255.252
R0(config-if)# clock rate 64000
R0(config-if)# no shutdown
```

Router R1

```bash
R1(config)# interface fastEthernet 0/0
R1(config-if)# ip address 172.16.1.254 255.255.255.0
R1(config-if)# no shutdown

R1(config-if)# exit

R1(config)# interface serial 0/0/0
R1(config-if)# ip address 10.0.0.2 255.255.255.252
R1(config-if)# no shutdown


R1(config-if)# exit

R1(config)# interface Serial 0/0/1
R1(config-if)# ip address 10.0.0.5 255.255.255.252
R1(config-if)# clock rate 64000
R1(config-if)# no shutdown
```

Router R2

```bash
R2(config)# interface fastEthernet 0/0
R2(config-if)# ip address 172.16.2.254 255.255.255.0
R2(config-if)# no shutdown

R2(config-if)# exit

R2(config)# interface serial 0/0/0
R2(config-if)# ip address 10.0.0.6 255.255.255.252
R2(config-if)# no shutdown
```

- Ative o RIP versão 2 e adicione as redes ligadas às interfaces do tipo Serial e FastEthernet
- Coloque as interfaces FastEthernet em modo passivo. Qual é a finalidade deste comando?

Router R0

```bash
R0(config)# router rip
R0(config-router)# version 2
R0(config-router)# network 172.16.0.0
R0(config-router)# network 10.0.0.0
R0(config-router)# passive-interface fastEthernet 0/0
```

Router R1

```bash
R1(config)# router rip
R1(config-router)# version 2
R1(config-router)# network 172.16.1.0
R1(config-router)# network 10.0.0.0
R1(config-router)# network 10.0.0.4
R1(config-router)# passive-interface fastEthernet 0/0
```

Router R2

```bash
R2(config-if)# router rip
R2(config-router)# version 2
R2(config-router)# network 172.16.2.0
R2(config-router)# network 10.0.0.4
R2(config-router)# passive-interface fastEthernet 0/0
```

`Passive Interface:` O comando _passive-interface_ quando aplicado a uma interface do _router_ impede que sejam enviados pacotes RIP por essa interface, e assim, impede que o _router_ anuncie rotas através dessa interface.

- Confirme quais as rotas conhecidas pelos routers e analise a métrica de routing apresentada para cada rota

Router R0

```bash
R0# show ip route
```

Resultado:

```bash
     10.0.0.0/30 is subnetted, 2 subnets
C       10.0.0.0 is directly connected, Serial0/0/0
R       10.0.0.4 [120/1] via 10.0.0.2, 00:00:16, Serial0/0/0
     172.16.0.0/16 is variably subnetted, 2 subnets, 2 masks
R       172.16.0.0/16 [120/1] via 10.0.0.2, 00:00:16, Serial0/0/0
C       172.16.0.0/24 is directly connected, FastEthernet0/0
```

Router R1

```bash
R1# show ip route
```

Resultado:

```bash
     10.0.0.0/30 is subnetted, 2 subnets
C       10.0.0.0 is directly connected, Serial0/0/0
C       10.0.0.4 is directly connected, Serial0/0/1
     172.16.0.0/16 is variably subnetted, 2 subnets, 2 masks
R       172.16.0.0/16 [120/1] via 10.0.0.1, 00:00:06, Serial0/0/0
                      [120/1] via 10.0.0.6, 00:00:18, Serial0/0/1
C       172.16.1.0/24 is directly connected, FastEthernet0/0
```

Router R2

```bash
R2# show ip route
```

Resultado:

```bash
     10.0.0.0/30 is subnetted, 2 subnets
R       10.0.0.0 [120/1] via 10.0.0.5, 00:00:02, Serial0/0/0
C       10.0.0.4 is directly connected, Serial0/0/0
     172.16.0.0/16 is variably subnetted, 2 subnets, 2 masks
R       172.16.0.0/16 [120/1] via 10.0.0.5, 00:00:02, Serial0/0/0
C       172.16.2.0/24 is directly connected, FastEthernet0/0
```
