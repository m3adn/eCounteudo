# Field Effect Transistor - FET

## O que são os FET?
Os FET (Field Effect Transistor) são transístores que funcionam por aplicação de um campo elétrico. A partir deste campo, gerado por tensão, pode-se controlar o comportamento dinâmico do dispositivo. Nos transístores BJT (Bipolar Junction Transistores) o controlo é feito pela corrente da base. Ao contrário dos BJT a operação dos FETs depende apenas de portadores maioritários, pelo que os transístores de efeito de campo são conhecidos também por dispositivos unipolares. 

> O __BJT__ é um dispositivo controlado por corrente, enquanto o __JFET__ é um dispositivo controlado por tensão.

::: warning
Pagina 317 Figura 6.1
:::

> Uma principais características do FET é sua lata impedância de entrada

Com valores que variam de $1M\Omega$ a várias centenas de MegaOhms, a impedância de entrada é muito maior do que os valores típicos de resistência de entrada das configurações com transístores BJT. Por outro lado a variação de corrente de saída é geralmente maior para o BJT do que para o FET para a mesma variação de tensão aplicada.

> Os ganhos de tensão CA dos amplificadores BJT são geralmente muito maiores do que aqueles com FET

No entanto,

> Os FETs são mais estáveis, em termos de temperatura, e normalmente são menores do que os BJTs, o que os torna particularmente úteis na contração de chips de circuitos integrados.

## Porque usar FETs em vez de BJT?

As características dos FETs que os distinguem em relação ao BJT são várias, das quais se destacam:

- Em termos de fabrico, são mais simples e ocupam menos espaço de integração do que os bipolares de junção.
- Possuem uma elevadíssima resistência de entrada que tipicamente ascende e alguns MegaOhms.
- São menos ruidosos no seu funcionamento dinâmico.
- Para uma corrente de dreno nula apresentam uma tensão de saída nula.

## Tipos de FET

Dentro dos transístores de efeito de campo, por sua vez, existem dois tipos distintos:

- De junção, ou JFET (Juction Field Effect Transístor)
- De Metal-Oxide-Semiconductor FET ou MOSFET. Dentro deste tipo existem ainda duas categorias: de enriquecimento e empobrecimento.

## Construção e Polarização de FETs

### Construção do JFET

Considerando o caso em que o canal é do tipo __n__.

É formado na sua maior parte por material do tipo __n__, que forma um canal entre as camadas imersas de material do tipo __p__. A parte direita (em relação a imagem) do canal do tipo __n__ está conectada por meio de um contacto ôhmico ao terminal __dreno__ (D, eng. Drain), enquanto a exterminada esquerda esta está ligada por meio de um contacto ôhmico ao terminal __fonte__ (S, eng. Source). Os dois matériais do tipo __p__ estão conectados entre si e também ao terminal __porta__ (G, eng. Gate).

![Construção de um FET de junção](/img/electronics2/construção_JFET_junção.png)

### Polarização do JFET

#### $V_{GS}=0; V_{DS} \to positivo$

Aplicada um tensão positiva $V_{DS}$ através do canal, e a porta foi conectada diretamente à fonte para estabelecer a condição $V{GS}=0V$. O resultado é um terminal de porta e um terminal de fonte no mesmo potencial e uma região de depleção na extremidade inferior de cada material __p__ semelhante à distribuição encontrada para a situação de não polarização. No instante em que a tensão $V_{DD}=V_{DS}$ é aplicada, os eletrões são atraídos para o terminal de dreno, o que estabelece a corrente convencional $I_D$. O caminho do do fluxo de carga revela claramente que as correntes de dreno e fonte são equivalentes $(I_D = I_S)$. O fluxo de carga é relativamente irrestrito e limitado apenas pela resistência do canal __n__ entre o dreno e fonte. 

É importante notar que a região de depleção aumenta a larga quanto mais próxima do __dreno__. A corrente $I_D$ estabelece os níveis de tensão ao longo do canal. O resultado é que a região próxima do __dreno__ do material tipo __p__ estará polarizada reversamente com uma tensão muito superior em comparação com a da parte mais distante do __dreno__. Quanto maior a tensão reversa aplicada, mais larga é a região de depleção. 

Como a junção __p-n__ esta polarizada reversamente ao longo do comprimento do canal faz com que a corrente de __porta / gate__ seja igual a $0A$.

![Polarização de um FET de junção](/img/electronics2/polarização_JFET_junção.png)

À medida que a tensão $V_{DS}$ aumenta de $0V$ para alguns volts, a corrente aumenta.

> Gráfico $I_D$ _versos_ $V_{DS}$ para $V_{GS} = 0V$

A relativa linearidade da curva revela que, para região de baixos valores de $V_{DS}$ , a resistência é basicamente constante. Conforme o valor de $V_{DS}$ aumenta e se aproxima do valor de $V_p$, as regiões de depleção se alargam, provocando considerável redução na largura do canal. Essa redução é a causa do aumento na resistência do canal. Se $V_{DS}$ for elevado a um valor em qua s duas regiões de depleção parecem se "tocar", surgirá a condição de __pinch_off__ (estrangulamento). O valor de $V_{DS}$ que estabelece essa condição é chamado de __tensão de pinch_off__, e é denotada por $V_p$. Na verdade, o termo __pinch-off__ não é apropriado, pois sugere que a corrente $I_D$ é cortada e cai para $0A$. Na realidade, ainda há um canal muito estreito com uma corrente de alta densidade. $I_D$ mantém um valor de saturação definido por $I_{DSS}$.

> $I_{DSS}$ á corrente máxima de dreno para um JFET e é definida pela condição $V_{GS} = 0V$ e $V_{DS} > |V_p|$
> Esquema __Pinch-off__ $(V_{GS} = 0V; V{DS} = V_p)$

#### $V_{GS} < 0V$

A tensão da __porta / gate__ para a fonte, denotada por $V_{GS}$, é a tensão controladora do JFET. Para o dispositivo de canal __n__, a tensão controladora $V_{GS}$ é cada vez mais negativa a partir de $V_{GS} = 0V$. Em outras palavras, o terminal de __porta / gate__ será estabelecido em potenciais cada vez menores comparados ao da fonte. 

O efeito da polarização negativa aplicada $V_{GS}$ é a obtenção de regiões de depleção semelhantes às obtidas com $V_{GS}=0V$, mas com valores menores de $V_{DS}$. O efeito da aplicação de uma polarização negativa $V_{GS}$ é obter a condição de saturação em valores menores de tensão $V_{DS}$. O nível de saturação resultante para $I_D$ foi reduzido e, com efeito, continuará a diminuir conforme $V_{GS}$ se torna cada vez mais negativo. A tensão de __pinch-off__ também diminui, descrevendo uma parábola, conforme $V_{GS}$ se torna cada vez mais negativo. Quando $V_{GS} = -V_p$, a tensão será negativa o sificiente para estabelecer um nivel de saturação basicamente de $0mA$ e, para todos os efeitos, o dispositivo estará "desligado".

> O valor de $V_{GS}$ que resulta em $I_D = 0mA$ é defeinido por $V_{GS} = V_p$, sendo $V_p$ uma tensão negativa para dispositivos de canal __n__ e uma tensão positiva para JFETS de canal __p__.
> Esquema polarização independente da porta

## MOSFET de enriquecimento

Apesar de haver algumas semelhanças em estruturas e modo de operação entre MOSFET do tipo depleção e MOSFET tipo enriquecimento, as características do MOSFET tipo enriquecimento são bastante diferentes. A curava de transferência não é definida pela equação de Shockley, e a corrente de dreno para esse dispositivo é nula até a tensão $V_{GS}$ atingir determinado valor. Em particular, o controlo da corrente nesse dispositivo de canal __n__ é realizado por uma tensão de $V_{GS}$ positiva, o que não ocorre com o JFET de canal __n__ e com o MOSFET tipo depleção de canal __n__, onde esse controlo é feito por tensão negativa.

Uma camada grossa de material do tipo __p__ é formada a partir de uma base de silício, e é chamada de substrato. O substrato tanto pode estar conectado internamente ao terminal fonte, como pode conter um quarto terminal, denominado SS, disponível para o controlo de potencial do substrato. Os terminais de fonte e de dreno estão conectados às regiões dopadas do tipo __n__, por meio de contactos metálicos, não havendo um canal entre as duas regiões dopadas do tipo __n__. A ausência de um canal como componente construtivo do dispositivo, é a principal diferença entre os dois modelos de MOSFET. A camada SiO$_2$ é uma camada formada pro substrato do tipo __p__ e serve para isolar a plataforma metálica da __porta__ da região entre o __dreno__ e a __fonte__.

::: Warning
Esquema da construção de um MOSFET de enriquecimento
:::

## Polarização do MOSFET de enriquecimento

Se $V_{GS}$ é igual a $0V$ e um tensão é aplicada entre o __dreno__ e a __fonte__ do dispositivo, a ausência de um canal __n__ (com uma quantidade generosa de portadores livres) resultará em um a corrente efetiva de $0A$. Com $V_{DS}$ positivo, $V_{GS} = 0V$ e o terminal SS conectado diretamente à fonte, o que temos é, duas junções __p-n__ reversamente polarizadas entre as regiões dopadas do tipo __n__ e os substratos __p__ que se opõem a qualquer fluxo de significativo entre o __dreno__ e a __fonte__.  

O potencial positivo na __porta / gate__ pressionára as lacunas (uma vez que cargas iguais se repelem) no subtrato __p__ ao longo da borda da camada isolante de SiO$_2$ para que deixem a região e penetrem no substrato até as camadas mais profundas. O resultado é uma região de depleção próxima à camada isolante SiO$_2$ livre de lacunas. No entanto, os eletrões no substrato __p__ (os portadores minoritários do material) serão atraídos para a porta positiva e se acumularão próximo à superfície da camada de SiO$_2$. Essa camada evitará que os portadores negativos sejam absorvidos pelo terminal de __porta / gate__. Conforme $V_{GS}$ aumenta de valor, a concentração de eletrões próximos da superfície de SiO$_2$ se intensifica até um nível em que a região induzida tipo __n__ possa suportar um fluxo mensurável entre __dreno__ e a __fonte__. O nível de $V{GS}$ que produz um aumento significativo da corrente de dreno é chamado de tensão de __limiar__, representado pelo símbolo __$V_T$__ ou __$V_{GS(Th)}$__. 

Quando $V_{GS}$ aumenta além do valor de limiar, a densidade de portadores livres no canal induzido cresce, o que resulta em um aumento na corrente de dreno. Entretanto, se mantiver-mos $V_{GS}$ constante e aumentarmos o valor de $V{DS}$, a corrente de dreno eventualmente alcançará o valor de saturação. A manutenção de $I_D$ em um valor fixo ocorre devido ao processo de __pinch-off__, que torna o canal induzido mais estreito próximo ao __dreno__.

Aplicando a lei ___Kirchhoff___ para tensões, descobrimos que:

<div class="eq">

$$V_{DG} = V_{DS} - V_{GS}$$

</div>

Qualquer aumento adicional de $V_{DS}$, estando fixa a tensão $V_{GS}$, não afetará o nível de saturação de $I_D$ até que as condições de rutura sejam alcançadas. 

Na verdade, o valor de saturação de $V_{DS}$ está relacionado co valor da tensão $V_{GS}$ aplicada por:

<div class="eq">

$$V_{DS} = V_{GS} - V_T$$

</div>

Portanto, para um valor fixo de $V_T$, quanto maior o valor de $V_{GS}$, maior o valor de saturação para $V_{DS}$.

> Para valores de $V_{GS}$ menores do que o nível de limiar, a corrente de __dreno__ de um MOSFET de enriquecimento é $0mA$.


## Polarização

Quando se fala em "polarização" de um dispositivo, em termos gerais, trata-se de escolher um ponto de operação (também conhecido como ponto quiescente ou ponto Q) que vai impor a corrente e a tensão com que o dispositivo vai funcionar. Que corrente e que tensão depende do que se pretende.

## Sumário

- Os FET são dispositivos unipolares
- Os FET operam por aplicação de um campo elétrico e por isso são dispositivos __controlados por tensão__.
- Existem dois tipos básicos de FET: __de Junção e MOS__

## Questionário

1. Quais as relações entre as grandezas fundamentais (i.e. quais as suas características)?
2. Como se polarizam os FET?
