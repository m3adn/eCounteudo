# Questionário

> Descreva a construção e o principio de funcionamento de um MOSFET de enriquecimento de canal __n__
::: details Resposta

- A curva de transferência não é definida pela equação de Shockley, e a corrente de dreno é nula até a tensão porta-fonte atingir um determinado valor.
- O controlo da corrente é realizada por uma tensão positiva porta-fonte.
- É formado por uma camada grossa de material tipo __p__ (chamado de substrato) a partir de uma base de silício.
- O substrato tanto pode estar conectado internamente ao terminal fonte, como pode conter um quarto terminal, denominado SS, disponível para o controlo de potencial do substrato.
- Os terminais de fonte e de dreno estão conectados às regiões dopadas do tipo n, por meio de contactos metálicos, não havendo um canal entre as duas regiões dopadas do tipo n.
- A camada SiO$_2$ é uma camada formada pro substrato do tipo p e serve para isolar a plataforma metálica da porta da região entre o dreno e a fonte.
:::

> Quais as relações entre as grandezas fundamentais (i.e. quais as suas características)?

::: details Resposta
nan
:::

> Como se polarizam os FET?

## Exercícios Práticos

***Exercícios 1***

Observe a seguinte figura. O Transístor 2N3904 tem um $\beta_f = 300$

- Calcule o valor DC das tensões e correntes nas resistências e o valor de $V_{CE1}$ e $V_{CE2}$
- Calcule o valor do ganho em tensão do circuito $A_V = \frac{V_{out}}{V_2}$, a impedância de entrada $Z_i$ vista dos terminais da fonte $V_2$ e a impedância da fonte $V_2$ e a impedância de saída $Z_0$, com esta em circuito aberto.


::: details Resposta

Como $\beta_f$ é muito elevado ($\beta_f = 300$) podemos considerar $I_B = 0$

$I_C = I_E$

> Primeiro BJT

$V_{B1} = V_{10}=\frac{R_{10}}{R_{10}+R_{11}} \times V_{cc}=\frac{10k}{10k+56k} \times 15=2,27V$

$V_{E1} = V{B1} - V{BE} = 2,27 - 0,7 = 1,57V$

$I_{E1} = \frac{V_{E1}}{R_{E1{eq}}} = 1,33 mA$

$V_{CE} =  V_{CC} - (V_{R7} + V_E) = 15 - (4,7k\times1,33m + 1,47) = 7,18V$

> Segundo BJT

$V_{B2} = V_{6}=\frac{R_{6}}{R_{6}+R_{5}} \times V_{cc}=\frac{3,9k}{3,9k+33k}\times15=1,58V$

$V_{E2} = V{B2} - V{BE} = 1,58 - 0,7 = 0,88V$

$I_{E2} = \frac{V_{E2}}{R_{E2_{eq}}} =\frac{0,89}{412}= 2,14mA$

$V_{CE} =  V_{CC} - (V_{R1} + V_E) = 15 - (3,3k\times2,14m + 0,88) = 7,06V$

> Calculo do ganho

$A_{V1} = \frac{h_{fe} \times R_L}{h_{ie} + (h_{fe} + 1) \times R_C}$

$g_m = \frac{|I_C|}{V_T = 25 mV @ 25º}$

$g_m = \frac{h_{fe}}{h_{ie}} \Leftrightarrow h_{ie}=\frac{h_{fe}}{g_m}$

$g_m = \frac{1.33 \times 10^{-3}}{25 \times 10^{-3}}=0,0532 S$

$h_{ie} = \frac{300}{0,0532} = 5639,10\Omega$


:::