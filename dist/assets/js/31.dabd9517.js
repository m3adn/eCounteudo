(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{364:function(t,e,a){"use strict";a.r(e);var r=a(21),o=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"icmp-internet-control-message-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#icmp-internet-control-message-protocol","aria-hidden":"true"}},[t._v("#")]),t._v(" ICMP - Internet Control Message Protocol")]),t._v(" "),a("p",[t._v("ICMP é um protocolo de rede usado para enviar mensagens relacionadas com problemas que ocorrem durante a transmissão de dados.")]),t._v(" "),a("p",[t._v('Como o protocolo IP trata-se de um protocolo não "confiável" do tipo '),a("em",[t._v("best effort")]),t._v(" que não garante que os pacotes são entregues ao destinatário. Caso ocorra um problema na transmissão, o protocolo IP não notifica o problema ao emissor.")]),t._v(" "),a("p",[t._v('O ICMP é o componente da pilha TCP/IP que lida com estas limitações do IP, exceto a "confiança", que têm de ser as camadas superiores a fornecer.')]),t._v(" "),a("p",[t._v("Geralmente as mensagens do ICMP são tratadas na camada de Internet (IP) ou então na camada de Transporte (TCP ou UDP).")]),t._v(" "),a("p",[t._v("O ICMP não corrige qualquer problema, apenas reporta a existência do erro. Qualquer erro que ocorra é reportado ao emissor dos datagramas e não aos routers por onde estes passaram, pois o TCP/IP não transporta qualquer informação acerca do caminho percorrido.")]),t._v(" "),a("p",[t._v("Quando ocorre um problema com a mensagem de ICMP não é enviada mensagem de ICMP a reportar esse problema.")]),t._v(" "),a("h2",{attrs:{id:"formato-do-icmp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#formato-do-icmp","aria-hidden":"true"}},[t._v("#")]),t._v(" Formato do ICMP")]),t._v(" "),a("p",[t._v("As mensagens ICMP têm todas um formato próprio, mas todas começam com os mesmos três campos.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/img/redes/ICMP.png",alt:"ICMP"}})]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Tipo")]),t._v(": Identifica a classe de mensagens ICMP")]),t._v(" "),a("li",[a("strong",[t._v("Código")]),t._v(": Usado para especificar alguns parâmetros da mensagem")]),t._v(" "),a("li",[a("strong",[t._v("Verificação de erro")]),t._v(": Código de verificação de erros sobre toda a mensagem ICMP")]),t._v(" "),a("li",[a("strong",[t._v("Parâmetros")]),t._v(": Usado para especificar outros parâmetros mais complexos.")])]),t._v(" "),a("h2",{attrs:{id:"tipos-de-mensagens-mais-comuns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tipos-de-mensagens-mais-comuns","aria-hidden":"true"}},[t._v("#")]),t._v(" Tipos de mensagens mais comuns")]),t._v(" "),a("h3",{attrs:{id:"pedido-de-resposta-e-resposta-ao-pedido-echo-request-e-echo-reply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pedido-de-resposta-e-resposta-ao-pedido-echo-request-e-echo-reply","aria-hidden":"true"}},[t._v("#")]),t._v(" Pedido de resposta e resposta ao pedido (Echo Request e Echo reply)")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.iana.org/assignments/icmp-parameters/icmp-parameters.xhtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("Internet Control Message Protocol (ICMP) Parameters"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Usado pelo comando "),a("code",[t._v("ping")]),t._v("para verificar a conectividade. O "),a("code",[t._v("ping")]),t._v(" envia uma mensagem "),a("em",[t._v("Echo Request")]),t._v(" para um dispositivo e o dispositivo responde com um "),a("em",[t._v("Echo Reply")]),t._v(".")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Código")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Echo Reply (Resposta Eco, usado pelo comando ping)")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Echo Request (Requisição de Eco, usado pelo comando ping)")])])])]),t._v(" "),a("h3",{attrs:{id:"destino-inalcancavel-destination-unreachable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destino-inalcancavel-destination-unreachable","aria-hidden":"true"}},[t._v("#")]),t._v(" Destino inalcançável (Destination Unreachable)")]),t._v(" "),a("p",[t._v("Quando um router não consegue encaminhar um pacote, usa o protocolo ICMP para enviar uma mensagem de retorno a informar a situação. Assim o emissor pode tentar enviar o pacote por outro caminho.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Código")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Rede de destino inalcançável")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Host de destino inalcançável")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Protocolo de destino inalcançável")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Porta de destino inalcançável")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Fragmentação requerida, e o bit "),a("em",[t._v("Don't Fragment")]),t._v(" foi configurado")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Falha na rota de origem")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("6")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Rede de destino desconhecida")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("7")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Host de destino desconhecido")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("8")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Host de origem isolado")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("9")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Rede proibida administrativamente")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("10")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Host proibido administrativamente")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Rede inalcançável para "),a("em",[t._v("Type of Service")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Host inalcançável para "),a("em",[t._v("Type of Service")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("13")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Comunicação proibida administrativamente")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("14")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Violação de precedência de Host")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Corte de precedência em efeito")])])])]),t._v(" "),a("h3",{attrs:{id:"retardar-a-origem-source-quench"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retardar-a-origem-source-quench","aria-hidden":"true"}},[t._v("#")]),t._v(" Retardar a origem (Source Quench)")]),t._v(" "),a("p",[t._v("A mensagem indica que a origem está a enviar pacotes a um ritmo superior ao suportado pelo equipamento destino. Pretende-se, com esta mensagem, que o emissor reduza a taxa de transmissão de pacotes.")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Obsoleta pela RFC 6633")]),t._v(" "),a("p",[t._v("É um mecanismo rudimentar de controlo de fluxo")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Código")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("4")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Fonte saciável (source quench) - Controlo de fluxo elementar")])])])]),t._v(" "),a("h3",{attrs:{id:"redirecionar-redirect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirecionar-redirect","aria-hidden":"true"}},[t._v("#")]),t._v(" Redirecionar (Redirect)")]),t._v(" "),a("p",[t._v("Um router pode enviar esta mensagem sempre que receber um pacote para o qual existe um outro router com uma rota melhor. Pretende-se , assim que o emissor envie os pacotes através da melhor rota.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Código")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("5")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Redirecionamento para rede")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Redirecionamento para host")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Redirecionamento para tipo de serviço e rede")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("3")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Redirecionamento para tipo de serviço e host")])])])]),t._v(" "),a("h3",{attrs:{id:"ultrapassou-o-ttl-limite-time-exceeded"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ultrapassou-o-ttl-limite-time-exceeded","aria-hidden":"true"}},[t._v("#")]),t._v(" Ultrapassou o TTL limite (Time Exceeded)")]),t._v(" "),a("p",[t._v("A mensagem informa que o pacote foi descartado porque o TTL foi excedido. Este tipo de mensagem é usado, por exemplo pelo comando "),a("code",[t._v("traceroute")]),t._v(" para descobrir o caminho  seguido por um determinado pacote.")]),t._v(" "),a("h4",{attrs:{id:"funcionamento-do-traceroute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#funcionamento-do-traceroute","aria-hidden":"true"}},[t._v("#")]),t._v(" Funcionamento do "),a("code",[t._v("traceroute")])]),t._v(" "),a("ul",[a("li",[t._v("Inicialmente é enviado um pacote IP com TTL igual a 1.")]),t._v(" "),a("li",[t._v("Ao chegar ao primeiro router o TTL é decrementado, passando a ter o valor de 0 e o pacote é descartado.")]),t._v(" "),a("li",[t._v("Simultaneamente, o router devolve uma mensagem ICMP do tipo "),a("em",[t._v("TTL Exceeded")]),t._v(".")]),t._v(" "),a("li",[t._v("Através da mensagem, o "),a("em",[t._v("traceroute")]),t._v(" determina o endereço do router.")]),t._v(" "),a("li",[t._v("Envia um outro pacote IP mas desta vez com o TTL igual a 2.")]),t._v(" "),a("li",[t._v("Esse valor vai ser decrementado é um unidade conforme vai passado pelos routers até ser 0 e descartado.")]),t._v(" "),a("li",[t._v("Simultaneamente é devolvido uma mensagem ICMP do  tipo "),a("em",[t._v("TTL Exceeded")]),t._v(".")]),t._v(" "),a("li",[t._v("Caso não se tenha chegado ao destino, repete-se o processo incrementado o valor TTL anterior em uma unidade.")])]),t._v(" "),a("p",[t._v("Desta forma, consegue determinar-se os endereços de todos os routers do caminho entre origem e o destino.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Código")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("11")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("TTL igual a o durante o trânsito")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("TTL igual a o durante o reconstrução")])])])]),t._v(" "),a("h3",{attrs:{id:"problema-de-parametros-parameter-problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problema-de-parametros-parameter-problem","aria-hidden":"true"}},[t._v("#")]),t._v(" Problema de parâmetros (Parameter Problem)")]),t._v(" "),a("p",[t._v("Mensagem enviada por um router ou outro dispositivo para informar que existe um erro sintático ou semântico no cabeçalho do pacote IP. A mensagem inclui um ponteiro para o "),a("em",[t._v("byte")]),t._v(" em que foi detetado o erro.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Código")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("12")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Ponteiro indica o erro")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("1")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Faltando opção requerida")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("2")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Comprimento errado")])])])]),t._v(" "),a("h3",{attrs:{id:"marca-de-tempo-timestamp-request-e-timestamp-reply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#marca-de-tempo-timestamp-request-e-timestamp-reply","aria-hidden":"true"}},[t._v("#")]),t._v(" Marca de tempo (Timestamp Request e Timestamp Reply)")]),t._v(" "),a("p",[t._v("Mensagem usada para medir o tempo de ida e volta entre emissor e recetor.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Código")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("13")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Timestamp")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("14")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Resposta do Timestamp")])])])]),t._v(" "),a("h3",{attrs:{id:"information-request-information-reply-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#information-request-information-reply-message","aria-hidden":"true"}},[t._v("#")]),t._v(" Information Request & Information Reply Message")]),t._v(" "),a("p",[t._v("Esta mensagem pode ser envida com os campos de rede de origem  que se encontra no "),a("em",[t._v("header")]),t._v(" e com o endereço de destino a 0 (que significa esta rede). O destinatário envia a resposta com os endereços totalmente especificados.")]),t._v(" "),a("p",[t._v("Esta mensagem serve para um host encontrar o número da rede em que se encontra.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Código")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("15")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Pedido de informação")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("16")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Resposta de informação")])])])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Obsoleta pela RFC 6918")])]),t._v(" "),a("h3",{attrs:{id:"endereco-de-mascara-address-mask-e-address-mask-reply"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#endereco-de-mascara-address-mask-e-address-mask-reply","aria-hidden":"true"}},[t._v("#")]),t._v(" Endereço de máscara (Address Mask e Address Mask Reply)")]),t._v(" "),a("p",[t._v("Mensagem usada para determinar o valor correto da máscara de rede. O emissor envia um "),a("em",[t._v("broadcast")]),t._v(" com uma mensagem de pedido de máscara de rede. O emissor envia um "),a("em",[t._v("broadcast")]),t._v(" com uma mensagem de pedido de máscara, a que o router da LAN responde com uma mensagem de resposta com o valor de máscara pedido.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Tipo")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Código")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Descrição")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("17")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Requisição de máscara de endereço")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("18")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("0")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Resposta de máscara de endereço")])])])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("Obsoleta pela RFC 6918")])])])},[],!1,null,null,null);e.default=o.exports}}]);