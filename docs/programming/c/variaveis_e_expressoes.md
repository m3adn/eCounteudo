# Variáveis e Expressões

> Faça um programa que leia um número inteiro e o imprima

::: details Resposta

```c
int main(){
    int num = 0;
    printf("Digite um valor inteiro: ");
    scanf("%d", &num);
    printf("O número digitado foi: %d\n", num);
    return 0;
}
```

:::

> Faça um programa que leia um número real e o imprima

::: details Resposta

```c
int main(){
    float num = 0;
    printf("Digite um valor inteiro: ");
    scanf("%f", &num);
    printf("O número digitado foi: %f\n", num);
    return 0;
}
```

:::

> Faça um programa que leia três números inteiros e o imprima a soma deles

::: details Resposta

```c
int main(){
    int a = 0, b = 0, c = 0;
    printf("Valor 1: ");
    scanf("%d", &a);
    printf("Valor 2: ");
    scanf("%d", &b);
    printf("Valor 3: ");
    scanf("%d", &c);

    printf("%d + %d + %d = %d\n", a, b, c, a + b + c);
    return 0;
}
```

:::
