# Sockets

Originalmente a implementação de sockets foi feita no _BSD 4.2_ em 1983, e depois trazida para o Linux com algumas mas poucas alterações.

Socket provê a comunicação entre duas pontas (fonte e destino), entre dois processos que estejam na mesma máquina (Unix Socket) ou na rede (TCP/IP Socket).

Focando nas comunicações web, e usando o modelo TCP/IP como referencia, os sockets estão entre a camada de aplicação e a camada de transporte.

O Socket vai funcionar como uma __interface__ entre a camada de __Aplicação__ e a de __Transporte__, possibilitando que haja uma abstração dos detalhes da pilha TCP/IP, e consequentemente, dando a sensação que os processos envolvidos na sensação estão a comunicar diretamente entre si, no entanto, ela está passando pela rede.
Essa abstração gerada pelos Sockets é o que chamamos de comunicação lógica. Outra forma de entender os Sockets é que eles são a "interface" de comunicação interprocessos.

Todo o cliente deve conhecer o socket do servidor (ip:porta) para se comunicar, mas o servidor só vai conhecer o socket do cliente quando este realizar uma conexão com ele, ou seja, a conexão no modelo cliente-servidor é sempre iniciada pelo cliente.

A porta do servidor precisa de ser previamente conhecida pelo cliente, enquanto que pro servidor não importa saber previamente a porta do cliente, ele vai ter acesso a ela a quando realizar a conexão com o cliente.

## Portas que podem ou não ser usadas

| Portas    | Descrição |
| :---      | :---      |
| 0-1023    | well-known ports ou portas do sistema. Apenas o coadministrador pode executar um servidor que escute estas portas. São atribuídas pela Internet Corporation for Assigned Names and Numbers (ICANN)|
|1024-49151 | portas do utilizador, ou portas registadas|
| >49151    | dinâmicas, portas privadas |

## Principais funções (primitivas) fornecidas

```c
getaddrinfo()   // Traduz nomes para endereços sockets
socket()        // Cria um socket e retorna o descritor de arquivo
bind()          // Associa o socket a um endereço socket e uma porta
connect()       // Tenta estabelecer conexão com um socket
listen()        // Coloca o socket a espera de conexão
accept()        // Aceita um nova conexão e cria um socket
send()          // Caso conectado, transmite mensagens ao socket
recv()          // Recebe mensagens através do socket
close()         // Termina a conexão com o descritor de arquivo
shutdown()      // Termina a comunicação do socket
```

## Comunicação Cliente - Servidor

### Servidor

- Cria o Socket
- Associa o Socket a um endereço local
- Aguarda por conexões da parte cliente
- Aceita conexões
- Lê as requisições
- Envia (ou não) uma resposta
- Fecha o Socket

### Cliente

- Cria o Socket
- Estabelece a conexão
- Envia uma requisição
- Aguarda (ou não) a resposta
- Fecha o Socket

## Saber :books::cry: mais

[O que são e como funcionam ps sockets](https://blog.pantuza.com/artigos/o-que-sao-e-como-funcionam-os-sockets)

[Lesson: All About Sockets](https://docs.oracle.com/javase/tutorial/networking/sockets/index.html)

[Learn Unix Soket](https://www.tutorialspoint.com/unix_sockets/index.htm)

[Sistemas Operativos](https://www.fca.pt/pt/catalogo/informatica/sistemas-operativos/sistemas-operativos/) pag. 509
