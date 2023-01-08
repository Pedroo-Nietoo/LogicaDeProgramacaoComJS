//01. Variáveis
let nome = "Pedro" //Escopo de bloco. Pode ter o valor alterado.
//Usada para declarar variáveis no escopo de bloco. Isso significa que a variável declarada com let só estará disponível dentro do bloco de código em que foi declarada. Além disso, as variáveis declaradas com let são mutáveis, ou seja, podem ser alteradas posteriormente.

var idade = 17; //Escopo de função. Pode ter o valor alterado.
//Usada para declarar variáveis no escopo de função (function-scoped variables). Isso significa que a variável declarada com var estará disponível dentro de toda a função em que foi declarada, bem como em qualquer função aninhada. Além disso, as variáveis declaradas com var são mutáveis, ou seja, podem ser alteradas posteriormente.


const sexo = "masculino" //Escopo de bloco. Declara constantes, que não podem ser alteradas.
//Usada para declarar constantes (variáveis que não podem ser alteradas). As constantes são declaradas com const e são sempre block-scoped, assim como as variáveis declaradas com let. Isso significa que a constante só estará disponível dentro do bloco de código em que foi declarada. Além disso, as constantes são imutáveis, ou seja, não podem ser alteradas posteriormente.