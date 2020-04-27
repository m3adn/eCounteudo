# JFET - Transístor de efeito de campo de junção

## Construção do JFET

Considerando o caso em que o canal é do tipo __n__.

É formado na sua maior parte por material do tipo __n__, que forma um canal entre as camadas imersas de material do tipo __p__. A parte direita (em relação a imagem) do canal do tipo __n__ está conectada por meio de um contacto ôhmico ao terminal __dreno__ (D, eng. Drain), enquanto a exterminada esquerda esta está ligada por meio de um contacto ôhmico ao terminal __fonte__ (S, eng. Source). Os dois matériais do tipo __p__ estão conectados entre si e também ao terminal __porta__ (G, eng. Gate).

![Construção de um FET de junção](/img/electronics2/construção_JFET_junção.png)

Em suma, o dreno e a fonte estão conectados aos extremos do canal do tipo __n__ e a porta está conectada às duas camadas do material do tipo __p__.

Na ausência de potêncial aplicado, o JFET possui duas junções __p-n__ não polarizadas. O resultado é uma região de depleção em cada junção. Como não existe portadores livres na zona de depleção, não é permitida a condução através da região.

## Polarização do JFET

___$V_{GS}=0; V_{DS} \to positivo$___

Aplicada um tensão positiva $V_{DS}$ através do canal, e a porta conectada diretamente à fonte obtemos a condição $V{GS}=0V$. O resultado é um terminal de porta e um terminal de fonte no mesmo potencial e uma região de depleção na extremidade inferior de cada material __p__ semelhante à distribuição encontrada para a situação de não polarização. No instante em que a tensão $V_{DD}=V_{DS}$ é aplicada, os eletrões são atraídos para o terminal de dreno, o que estabelece a corrente convencional $I_D$. O caminho do do fluxo de carga revela claramente que as correntes de dreno e fonte são equivalentes $(I_D = I_S)$. O fluxo de carga é relativamente irrestrito e limitado apenas pela resistência do canal __n__ entre o dreno e fonte.

![Polarização de um FET de junção](/img/electronics2/polarização_JFET_junção.png)

É importante notar que a região de depleção aumenta a larga quanto mais próxima do __dreno__. Presumindo-se uma resistência uniforme no canal __n__ , sua resistência pode ser distribuída da forma como representada na figura seguinte. A corrente $I_D$ estabelece os níveis de tensão ao longo do canal. O resultado é que a região próxima do __dreno__ do material tipo __p__ estará polarizada reversamente com uma tensão muito superior em comparação com a da parte mais distante do __dreno__. Quanto maior a tensão reversa aplicada, mais larga é a região de depleção.

![Polarização de um FET de junção para VDS = 2V](/img/electronics2/polarização_JFET_junção_2v.png)

Como a junção __p-n__ esta polarizada reversamente ao longo do comprimento do canal faz com que a corrente de __porta / gate__ seja igual a $0A$.

À medida que a tensão $V_{DS}$ aumenta de $0V$ para alguns volts, a corrente aumenta.

> Gráfico $I_D$ __versos__ $V_{DS}$ para $V_{GS} = 0V$

A relativa linearidade da curva revela que, para região de baixos valores de $V_{DS}$ , a resistência é basicamente constante. Conforme o valor de $V_{DS}$ aumenta e se aproxima do valor de $V_p$, as regiões de depleção se alargam, provocando considerável redução na largura do canal. Essa redução é a causa do aumento na resistência do canal. Se $V_{DS}$ for elevado a um valor em qua s duas regiões de depleção parecem se "tocar", surgirá a condição de __pinch_off__ (estrangulamento). O valor de $V_{DS}$ que estabelece essa condição é chamado de __tensão de pinch_off__, e é denotada por $V_p$. Na verdade, o termo __pinch-off__ não é apropriado, pois sugere que a corrente $I_D$ é cortada e cai para $0A$. Na realidade, ainda há um canal muito estreito com uma corrente de alta densidade. $I_D$ mantém um valor de saturação definido por $I_{DSS}$.

> $I_{DSS}$ á corrente máxima de dreno para um JFET e é definida pela condição $V_{GS} = 0V$ e $V_{DS} > |V_p|$
> Esquema __Pinch-off__ $(V_{GS} = 0V; V{DS} = V_p)$

___$V_{GS} < 0V$___

A tensão da __porta / gate__ para a fonte, denotada por $V_{GS}$, é a tensão controladora do JFET. Para o dispositivo de canal __n__, a tensão controladora $V_{GS}$ é cada vez mais negativa a partir de $V_{GS} = 0V$. Em outras palavras, o terminal de __porta / gate__ será estabelecido em potenciais cada vez menores comparados ao da fonte.

O efeito da polarização negativa aplicada $V_{GS}$ é a obtenção de regiões de depleção semelhantes às obtidas com $V_{GS}=0V$, mas com valores menores de $V_{DS}$. O efeito da aplicação de uma polarização negativa $V_{GS}$ é obter a condição de saturação em valores menores de tensão $V_{DS}$. O nível de saturação resultante para $I_D$ foi reduzido e, com efeito, continuará a diminuir conforme $V_{GS}$ se torna cada vez mais negativo. A tensão de __pinch-off__ também diminui, descrevendo uma parábola, conforme $V_{GS}$ se torna cada vez mais negativo. Quando $V_{GS} = -V_p$, a tensão será negativa o suficiente para estabelecer um nível de saturação basicamente de $0mA$ e, para todos os efeitos, o dispositivo estará "desligado".

> O valor de $V_{GS}$ que resulta em $I_D = 0mA$ é definido por $V_{GS} = V_p$, sendo $V_p$ uma tensão negativa para dispositivos de canal __n__ e uma tensão positiva para JFETs de canal __p__.
> Esquema polarização independente da porta
