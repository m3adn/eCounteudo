# FET - Transístor de efeito de campo

## O que são os FET

Os FET (Field Effect Transistor) são transístores que funcionam por aplicação de um campo elétrico. A partir deste campo, gerado por tensão, pode-se controlar o comportamento dinâmico do dispositivo. Nos transístores BJT (Bipolar Junction Transistores) o controlo é feito pela corrente da base. Ao contrário dos BJT a operação do FET depende apenas de portadores maioritários, pelo que os transístores de efeito de campo são conhecidos também por dispositivos unipolares. 

A corrente $I_C$ 

> O __BJT__ é um dispositivo controlado por corrente, enquanto o __JFET__ é um dispositivo controlado por tensão.

![Diferença entre BJT e FET](/img/electronics2/BJT_vs_FET.png)

> Uma principais características do FET é sua lata impedância de entrada

Com valores que variam de $1M\Omega$ a várias centenas de MegaOhms, a impedância de entrada é muito maior do que os valores típicos de resistência de entrada das configurações com transístores BJT. Por outro lado a variação de corrente de saída é geralmente maior para o BJT do que para o FET para a mesma variação de tensão aplicada.

> Os ganhos de tensão CA dos amplificadores BJT são geralmente muito maiores do que aqueles com FET

No entanto,

> Os FETs são mais estáveis, em termos de temperatura, e normalmente são menores do que os BJTs, o que os torna particularmente úteis na contração de chips de circuitos integrados.

## Porque usar FET em vez de BJT

As características do FET que os distinguem em relação ao BJT são várias, das quais se destacam:

- Em termos de fabrico, são mais simples e ocupam menos espaço de integração do que os bipolares de junção.
- Possuem uma elevadíssima resistência de entrada que tipicamente ascende e alguns MegaOhms.
- São menos ruidosos no seu funcionamento dinâmico.
- Para uma corrente de dreno nula apresentam uma tensão de saída nula.

## Tipos de FET

Dentro dos transístores de efeito de campo, por sua vez, existem dois tipos distintos:

- De junção, ou JFET (Juction Field Effect Transístor)
- De Metal-Oxide-Semiconductor FET ou MOSFET. Dentro deste tipo existem ainda duas categorias: de enriquecimento e empobrecimento.
