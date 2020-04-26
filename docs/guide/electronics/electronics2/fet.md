# Field Effect Transistor - FET

## O que são os FET?
Os FET (Field Effect Transistor) são transístores que funcionam por aplicação de um campo elétrico. A partir deste campo, gerado por tensão, pode-se controlar o comportamento dinâmico do dispositivo. Nos transístores BJT (Bipolar Junction Transistores) o controlo é feito pela corrente da base. Ao contrário dos BJT a operação dos FETs depende apenas de portadores maioritários, pelo que os transístores de efeito de campo são conhecidos também por dispositivos unipolares. 

> O __BJT__ é um dispositivo controlado por corrente, enquanto o __JFET__ é um dispositivo controlado por tensão.

\<imagem\>

> Uma principais características do FET é sua lata impedância de entrada


Com valores que variam de $1M\Omega$ a várias centenas de megaohms, a impedância de entrada é muito maior do que os valores típicos de resistência de entrada das configurações com transístores BJT. Por outro lado a variação de corrente de saída é geralmente maior para o BJT do que para o FET para a mesma variação de tensão aplicada.

> Os ganhos de tensão CA dos amplificadores BJT são geralmente muito maiores do que aqueles com FET

No entanto,

> Os FETs são mais estáveis, em termos de temperatura, e normalmente são menores do que os BJTs, o que os torna particularmente úteis na contração de chips de circuitos integrados.

## Porque usar FETs em vez de BJT?

As características dos FETs que os distinguem em relação ao BJT são várias, das quais se destacam:

- Em termos de fabrico, são mais simples e ocupam menos espaço de integração do que os bipolares de junção.
- Possuem uma levadíssima resistência de entrada que tipicamente ascende e alguns MegaOhms.
- São menos ruidosos no seu funcionamento dinâmico.
- Para uma corrente de dreno nula apresentam uma tensão de saída nula.

## Tipos de FET

Dentro dos transístores de efeito de campo, por sua vez, existem dois tipos distintos:

- De junção, ou JFET (Juction Field Effect Transístor)
- De Metal-Oxide-Semiconductor FET ou MOSFET. Dentro deste tipo existem ainda duas categorias: de enriquecimento e empobrecimento.

## Construção e Polarização de FETs

### Construção do JFET

Considerando o caso em que o canal é do tipo _n_.

É formado na sua maior parte por material do tipo _n_, que forma um canal entre as camadas imersas de material do tipo _p_. A parte direita (em relação a imagem) do canal do tipo _n_ está conectada por meio de um contacto ôhmico ao terminal _dreno_ (D, eng. Drain), enquanto a exterminada esquerda esta está ligada por meio de um contacto ôhmico ao terminal _fonte_ (G, eng. Gate). Os doi matériais do tipo _p_ estão conectados entre si e também ao terminal _porta_ (G, eng. Ga 

![Construção de um FET de junção](/img/electronics2/construção_JFET_junção.png)

### Polarização do JFET

![Polarização de um FET de junção](/img/electronics2/polarização_JFET_junção.png)

::: warning
falta aqui mais umas imagens
:::

> - Construção do MOSFET de enriquecimento
> - Polarização do MOSFET de depleção ou empobrecimento
> - Polarização do MOSFET de depleção ou empobrecimento

## Polarização 

Quando se fala em "polarização" de um dispositivo, em termos gerais, trata-se de escolher um ponto de operação (também conhecido como ponto quiescente ou ponto Q) que vai import a corrente e a tensão com que o dispositivo vai funcionar. Que corrente e que tensão depende do que se pretende.



## Sumário 

- Os FET são dispositivos unipolares
- Os FET operam por aplicação de um campo elétrico e por isso são dispositivos __controlados por tensão__.
- Existem dois tipos básicos de FET: __de Junção e MOS__

## Questionário

1. Quais as relações entre as grandezas fundamentais (i.e. quais as suas características)?
2. Como se polarizam os FET?

