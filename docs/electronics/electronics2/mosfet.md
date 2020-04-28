# MOSFET - Transístor de efeito de campo metal-óxido-semicondutor

## MOSFET de enriquecimento

Apesar de haver algumas semelhanças em estruturas e modo de operação entre MOSFET do tipo depleção e MOSFET tipo enriquecimento, as características do MOSFET tipo enriquecimento são bastante diferentes. A curva de transferência não é definida pela equação de Shockley, e a corrente de dreno para esse dispositivo é nula até a tensão $V_{GS}$ atingir determinado valor. Em particular, o controlo da corrente nesse dispositivo de canal __n__ é realizado por uma tensão de $V_{GS}$ positiva, o que não ocorre com o JFET de canal __n__ e com o MOSFET tipo depleção de canal __n__, onde esse controlo é feito por tensão negativa.

Uma camada grossa de material do tipo __p__ é formada a partir de uma base de silício, e é chamada de substrato. O substrato tanto pode estar conectado internamente ao terminal fonte, como pode conter um quarto terminal, denominado SS, disponível para o controlo de potencial do substrato. Os terminais de fonte e de dreno estão conectados às regiões dopadas do tipo __n__, por meio de contactos metálicos, não havendo um canal entre as duas regiões dopadas do tipo __n__. A ausência de um canal como componente construtivo do dispositivo, é a principal diferença entre os dois modelos de MOSFET. A camada SiO$_2$ é uma camada formada pro substrato do tipo __p__ e serve para isolar a plataforma metálica da __porta__ da região entre o __dreno__ e a __fonte__.

::: warning

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