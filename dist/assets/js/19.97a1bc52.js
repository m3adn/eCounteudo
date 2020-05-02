(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{377:function(s,a,t){"use strict";t.r(a);var e=t(21),n=Object(e.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"trabalho-pratico-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trabalho-pratico-1","aria-hidden":"true"}},[s._v("#")]),s._v(" Trabalho prático 1")]),s._v(" "),t("p",[t("img",{attrs:{src:"/img/redes/p1.png",alt:"Construção de um FET de junção"}})]),s._v(" "),t("blockquote",[t("p",[s._v("Utilize as seguintes redes para as interfaces dos routers e dos PCs:\nConfigure os equipamentos, seguindo os seguintes passos.")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Defina as redes que vai usar")]),s._v(" "),t("ul",[t("li",[s._v("Router 0 Fa 0/0\n"),t("ul",[t("li",[s._v("Rede: 192.168.10.0 255.255.255.0")])])]),s._v(" "),t("li",[s._v("Router 0 Fa 0/1\n"),t("ul",[t("li",[s._v("192.168.20.0 255.255.255.0")])])])])]),s._v(" "),t("li",[t("p",[s._v("Apague a configuração do router e reiniciei o router")])])]),s._v(" "),t("div",{staticClass:"language-batch extra-class"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Router")]),s._v("> enable")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Router")]),s._v("# erase startup-config")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Router")]),s._v("# reload")]),s._v("\n")])])]),t("ul",[t("li",[s._v("Quando o router reiniciar entre em modo de execução privilegiada. Liste as interfaces do router (anote o resultado).")])]),s._v(" "),t("div",{staticClass:"language-batch extra-class"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Router")]),s._v("> enable")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Router")]),s._v("# show ip interface brief")]),s._v("\n")])])]),t("p",[s._v("Resultado:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Interface              IP-Address      OK? Method Status                Protocol\nFastEthernet0/0        unassigned      YES NVRAM  administratively down down\nFastEthernet0/1        unassigned      YES NVRAM  administratively down down\nVlan1                  unassigned      YES NVRAM  administratively down down\n")])])]),t("ul",[t("li",[s._v("Entre em modo de configuração. Altere o nome do router para R0.")])]),s._v(" "),t("div",{staticClass:"language-batch extra-class"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Router")]),s._v("# configure terminal")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Router")]),s._v("(config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("# hostname R0\n")])])]),t("p",[s._v("Resultado:")]),s._v(" "),t("div",{staticClass:"language-batch extra-class"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("#\n")])])]),t("ul",[t("li",[s._v("Configure as duas interfaces FastEthernet:")])]),s._v(" "),t("div",{staticClass:"language-batch extra-class"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("# interface fastEthernet 0/0\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config-if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("# ip address 192.168.10.254 255.255.255.0\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config-if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("# no shutdown\n\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config-if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("#exit\n\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("# interface fastEthernet 0/1\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config-if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("# ip address 192.168.20.254 255.255.255.0\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config-if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("# no shutdown\n")])])]),t("ul",[t("li",[s._v("Grave a configuração")])]),s._v(" "),t("div",{staticClass:"language-batch extra-class"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config-if")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("# exit\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("(config")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("# exit\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("# copy running-config startup-config")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("R0")]),s._v("# reload")]),s._v("\n")])])]),t("ul",[t("li",[s._v("Após a configuração verifique a conectividade entre os vários elementos da rede.")])]),s._v(" "),t("p",[s._v("Exemplo: PC 01")]),s._v(" "),t("div",{staticClass:"language-batch extra-class"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token label property"}},[s._v(":\\>ping")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")])]),s._v("\n")])])]),t("p",[s._v("Resultado:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Pinging "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".20.2 with "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" bytes of data:\n\nRequest timed out.\nReply from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".20.2: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bytes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("1ms "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TTL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v("\nReply from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".20.2: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bytes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("1ms "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TTL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v("\nReply from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".20.2: "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bytes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" time"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("1ms "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TTL")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v("\n\nPing statistics "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".20.2:\n    Packets: Sent "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(", Received "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(", Lost "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("% loss"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(",\nApproximate round trip "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("times")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" milli-seconds:\n    Minimum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0ms, Maximum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1ms, Average "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0ms\n")])])]),t("ul",[t("li",[s._v("Verifique o resultado do comando traceroute")])]),s._v(" "),t("p",[s._v("Exemplo: PC 01 para PC 03")]),s._v(" "),t("div",{staticClass:"language-batch extra-class"},[t("pre",{pre:!0,attrs:{class:"language-batch"}},[t("code",[t("span",{pre:!0,attrs:{class:"token command"}},[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token label property"}},[s._v(":\\>tracert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("168")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("."),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")])]),s._v("\n")])])]),t("p",[s._v("Resultado:")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("Tracing route to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".20.1 over a maximum of "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("30")]),s._v(" hops:\n\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" ms      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ms      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ms      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.254\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("   *         "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" ms      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ms      "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".20.1\n\nTrace complete.\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);