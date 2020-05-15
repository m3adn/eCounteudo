(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{362:function(e,a,t){"use strict";t.r(a);var s=t(21),o=Object(s.a)({},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"sockets"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sockets","aria-hidden":"true"}},[e._v("#")]),e._v(" Sockets")]),e._v(" "),t("p",[e._v("Originalmente a implementação de sockets foi feita no "),t("em",[e._v("BSD 4.2")]),e._v(" em 1983, e depois trazida para o Linux com algumas mas poucas alterações.")]),e._v(" "),t("p",[e._v("Socket provê a comunicação entre duas pontas (fonte e destino), entre dois processos que estejam na mesma máquina (Unix Socket) ou na rede (TCP/IP Socket).")]),e._v(" "),t("p",[e._v("Focando nas comunicações web, e usando o modelo TCP/IP como referencia, os sockets estão entre a camada de aplicação e a camada de transporte.")]),e._v(" "),t("p",[e._v("O Socket vai funcionar como uma "),t("strong",[e._v("interface")]),e._v(" entre a camada de "),t("strong",[e._v("Aplicação")]),e._v(" e a de "),t("strong",[e._v("Transporte")]),e._v(', possibilitando que haja uma abstração dos detalhes da pilha TCP/IP, e consequentemente, dando a sensação que os processos envolvidos na sensação estão a comunicar diretamente entre si, no entanto, ela está passando pela rede.\nEssa abstração gerada pelos Sockets é o que chamamos de comunicação lógica. Outra forma de entender os Sockets é que eles são a "interface" de comunicação interprocessos.')]),e._v(" "),t("p",[e._v("Todo o cliente deve conhecer o socket do servidor (ip:porta) para se comunicar, mas o servidor só vai conhecer o socket do cliente quando este realizar uma conexão com ele, ou seja, a conexão no modelo cliente-servidor é sempre iniciada pelo cliente.")]),e._v(" "),t("p",[e._v("A porta do servidor precisa de ser previamente conhecida pelo cliente, enquanto que pro servidor não importa saber previamente a porta do cliente, ele vai ter acesso a ela a quando realizar a conexão com o cliente.")]),e._v(" "),t("h2",{attrs:{id:"portas-que-podem-ou-nao-ser-usadas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#portas-que-podem-ou-nao-ser-usadas","aria-hidden":"true"}},[e._v("#")]),e._v(" Portas que podem ou não ser usadas")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[e._v("Portas")]),e._v(" "),t("th",{staticStyle:{"text-align":"left"}},[e._v("Descrição")])])]),e._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("0-1023")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("well-known ports ou portas do sistema. Apenas o coadministrador pode executar um servidor que escute estas portas. São atribuídas pela Internet Corporation for Assigned Names and Numbers (ICANN)")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v("1024-49151")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("portas do utilizador, ou portas registadas")])]),e._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[e._v(">49151")]),e._v(" "),t("td",{staticStyle:{"text-align":"left"}},[e._v("dinâmicas, portas privadas")])])])]),e._v(" "),t("h2",{attrs:{id:"principais-funcoes-primitivas-fornecidas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#principais-funcoes-primitivas-fornecidas","aria-hidden":"true"}},[e._v("#")]),e._v(" Principais funções (primitivas) fornecidas")]),e._v(" "),t("div",{staticClass:"language-c extra-class"},[t("pre",{pre:!0,attrs:{class:"language-c"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("getaddrinfo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("   "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Traduz nomes para endereços sockets")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("socket")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Cria um socket e retorna o descritor de arquivo")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("bind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Associa o socket a um endereço socket e uma porta")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("connect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("       "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Tenta estabelecer conexão com um socket")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("listen")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Coloca o socket a espera de conexão")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("accept")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("        "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Aceita um nova conexão e cria um socket")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Caso conectado, transmite mensagens ao socket")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("recv")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Recebe mensagens através do socket")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("close")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("         "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Termina a conexão com o descritor de arquivo")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("shutdown")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("      "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Termina a comunicação do socket")]),e._v("\n")])])]),t("h2",{attrs:{id:"comunicacao-cliente-servidor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comunicacao-cliente-servidor","aria-hidden":"true"}},[e._v("#")]),e._v(" Comunicação Cliente - Servidor")]),e._v(" "),t("h3",{attrs:{id:"servidor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#servidor","aria-hidden":"true"}},[e._v("#")]),e._v(" Servidor")]),e._v(" "),t("ul",[t("li",[e._v("Cria o Socket")]),e._v(" "),t("li",[e._v("Associa o Socket a um endereço local")]),e._v(" "),t("li",[e._v("Aguarda por conexões da parte cliente")]),e._v(" "),t("li",[e._v("Aceita conexões")]),e._v(" "),t("li",[e._v("Lê as requisições")]),e._v(" "),t("li",[e._v("Envia (ou não) uma resposta")]),e._v(" "),t("li",[e._v("Fecha o Socket")])]),e._v(" "),t("h3",{attrs:{id:"cliente"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cliente","aria-hidden":"true"}},[e._v("#")]),e._v(" Cliente")]),e._v(" "),t("ul",[t("li",[e._v("Cria o Socket")]),e._v(" "),t("li",[e._v("Estabelece a conexão")]),e._v(" "),t("li",[e._v("Envia uma requisição")]),e._v(" "),t("li",[e._v("Aguarda (ou não) a resposta")]),e._v(" "),t("li",[e._v("Fecha o Socket")])]),e._v(" "),t("h2",{attrs:{id:"saber-mais"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#saber-mais","aria-hidden":"true"}},[e._v("#")]),e._v(" Saber 📚😢 mais")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://blog.pantuza.com/artigos/o-que-sao-e-como-funcionam-os-sockets",target:"_blank",rel:"noopener noreferrer"}},[e._v("O que são e como funcionam ps sockets"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.oracle.com/javase/tutorial/networking/sockets/index.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lesson: All About Sockets"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.tutorialspoint.com/unix_sockets/index.htm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn Unix Soket"),t("OutboundLink")],1)]),e._v(" "),t("p",[t("a",{attrs:{href:"https://www.fca.pt/pt/catalogo/informatica/sistemas-operativos/sistemas-operativos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sistemas Operativos"),t("OutboundLink")],1),e._v(" pag. 509")])])},[],!1,null,null,null);a.default=o.exports}}]);