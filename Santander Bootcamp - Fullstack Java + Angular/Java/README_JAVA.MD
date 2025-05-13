## Padrão de nomenclatura

Quando se trata de escrever códigos na linguagem Java, é recomendado seguir algumas convenções de escrita. Esses padrões estão expressos nos itens abaixo:

- **Arquivo .java:** Todo arquivo .java deve começar com letra MAIÚSCULA. Se a palavra for composta, a segunda palavra deve também ser maiúscula, exemplo: 
`Calculadora. java , CalculadoraCienti fica . java`
- **Nome da classe no arquivo:** A classe deve possuir o mesmo nome do arquivo.java, exemplo:
    
    ```java
    // arquivo CalculadoraCientifica.java
    
    public class CalculadoraCientifica {
    
    }
    ```
    
- **Nome de variável:** toda variável deve ser escrita com letra minúscula, porém se a palavra for composta, a primeira letra da segunda palavra deverá ser MAIÚSCULA, exemplo: ano e anoFabricacao . O nome dessa prática para nomear variáveis dessa forma se chama
"camelCase".

> Existe uma regra adicional para variáveis quando na mesma queremos identificar que ela não sofrerá alteração de valor, exemplo: queremos determinar que uma variável de nome **br**
sempre representará **"Brasil"** e nunca mudará seu valor, logo, determinamos como escrita o código abaixo:
> 

```java
String BR = "Brasil"
double PI = 3.14
int ESTADOS_BRASILEIROS = 27
int ano_2000 = 2000
```

- Deve conter apenas letras, _ (underline), $ ou os números de 0 a 9
- Deve obrigatoriamente se iniciar por uma letra (preferencialmente), _ ou $, jamais com número
- Deve iniciar com uma letra minúscula (boa prática — ver abaixo)
- Não pode conter espaços
- Não podemos usar palavras-chave da linguagem
- O nome deve ser único dentro de um escopo

```java
// Declaração inválida de variáveis

int numero&um = 1; //Os únicos simblos permitidos são _ e 
int 1numero = 1;   //Uma variável não pode começar com numérico
int numero um 1;   //Não pode ter espaço no nome da variável
int long = 1;      //long faz parte das palavras reservadas da linguagem

//Declaração válida de variáveis
int numero$um = 1;
int numero1 = 1;
int numeroum = 1;
int longo = 1;

```

## Declarando variáveis e métodos

Como identificar entre declaração de variáveis e métodos em nossa programa? Existe uma estrutura comum para ambas as finalidades, exemplo:

• Declarar uma variável em Java segue sempre a seguinte estrutura:

```java
	// Estrutura
	
	Tipo NomeBemDefinido = Atribuição (opcional em alguns casos)
	
	// Exemplo
	
	int idade = 23
	double altura = 1.62
	Dog. spike; //observe que aqui a variável spike Não tem valor
```

• Declarando métodos em Java segue uma estrutura bem simples:

```java
// Estrutura

TipoRetorno NomeObjetivoNoInfinitivo Parametro(s)

//Exemplo

int somar (int numeroUm, int numero2)

String formatarCep (long cep)
```

## Identação

Basicamente indentar é um termo utilizado para escrever o código do programa de forma hierárquica, facilitando assim a visualização e o entendimento do programa.

baixo, veja um exemplo de um algoritmo de validação de aprovação de estudante. Em uma aba, temos um código sem identação nenhuma, e na outra aba, temos o mesmo código seguindo um padrão de identação. Observe como é muito mais fácil entender a hierarquia do código na segunda a

**Sem identação:**

```java
// arquivo BoletimEstudantil.java

public class BoletimEstudantil {
public static void main (String[] args) {
int mediaFinal = 6;
if(mediaFinal<6)
System.out.println("REPROVADO");
else if(mediaFinal==6)
System.out.println("PROVA MINERVA");
else
Sytem.out.println("APROVADO")
}
}
```

**Com identação:**

```java
public class BoletimEstudantil {
    public static void main(String[] args) {
        int mediaFinal = 7;
        if(mediaFinal < 6)
            System.out.println("REPROVADO");
        else if(mediaFinal == 6)
            System.out.print("PROVA MINERVA");
        else
            System.out.print("APROVADO");
    }
}

```

## Organizando arquivos

Á medida que nosso sistema vai evoluindo, surgem novos arquivos (código fonte) em nossa estrutura de arquivos do projeto. Isso exige que seja realizado uma organização destes arquivos através de pacotes (packages).

## Java Beans

Umas das maiores dificuldades na programação é escrever algoritmos legíveis a níveis que sejam compreendidos por todo seu time ou por você mesmo no futuro. Para isso a linguagem Java sugere, através de convenções, formas de escrita universal para nossas classes, atributos, métodos e pacotes.

### Variáveis

- Uma variável deve ser clara, sem abreviações ou definição sem sentido;
- Uma variável é sempre no singular, **exceto quando se referir a um array ou coleção:**
- Defina um idioma único para suas variáveis. Se você for declarar variáveis em inglês, defina todas em inglês.
    
    Não recomendando
    
    ```java
    double salMedio = 15-00.23 //variável abreviada,
    String emails = "aluno@escola.com" // confuso se a variável é de um ou mais valores
    String myName = "JOSEPH" // se idiota pt-BR, o valor deve ser no idioma selecionado
    ```
    
    Recomendando
    
    ```java
    double salarioMedio = 1500.23;
    String email = "aluno@escola.com";
    String [] emails = {"aluno@escola.com", "professor@escola.com"};
    String meuNome = "JOSEPH"
    ```
    

### Métodos

Os métodos deverão ser nomeados como verbos, através de ima mistura de letras minúsculas e maiúsculas. Em princípio todas as letras que compõem o nome devem ser mantidas em minúsculo, com exceção da primeira letra de cada palavra composta a partir da segunda palavra.

Exemplos sugeridos para nomenclatura de métodos.

```java
somar(int n1, int n2) {}

abirConexao() {}

concluirProcessamento() {}

findById(int id) {} //não se assuste, você verá muito método em inglês

calcularImprimir() // há algo de errado dever ter apenas uma finalidade
```

## Tipos e variáveis

### Tipos de dados

No Java, existem algumas palavras reservadas para a representação dos tipos de dados básicos que precisam ser manipulados para a construção de programas. Estes tipos de dados são conhecidos como tipos primitivos (Primitive Types).

> Os oito tipos primitivos em Java são:

int, byte, short, long, float, double, boolean e char — esses tipos não são considerados objetos, e portanto representam valores brutos. Eles são armazenados diretamente na pilha de memória. (Memory stack).
> 

Tabela de Tipos primitivos e seus valores:

| Tipo  | Memória |         Valor Mínimo       |       Valor Máximo        |
| ---   |   ---   |             ---            |           ---             |
| byte  | 1 byte  | -128                       | 127                       | 
| short | 2 byte  | -32.768                    | 32.767                    |
| int   | 4 bytes | -2.147.483.648             | 2.147.483.647             |
| long  | 8 bytes | -9.223.372.036.854.775.808 | 9.223.372.036.854.775.808 |

Os tipos primitivos que podem conter fracionárias podem ser representadas por dois tipos:

|  Tipo  |   Memória |    Mínimo     |    Máximo     |
|   ---  |    ---    |     ---       |     ---       |
| float  | 4 bytes   | -3,4028E + 38 | 3,4028E + 38  |
| double | 8 bytes   | -1,7976E + 38 | 1,7976E + 308 |

Apesar de o tipo float ocupar metade da memória consumida do que um tipo double, ele é menos utilizado. Ele sofre de uma limitação que compromete seu uso em determinadas situações: sohente mantém uma precisão decimal entre 6 e 7 dígitos.

Atualmente, com os computadores modernos, se tornou desnecessário utilizar os tipos short e byte , pois não precisamos nos preocupar tanto assim com o espaço de memória reduzido.

Da mesma forma, dificilmente utilizaremos o tipo long , pois não é tão comum trabalharmos com valores tão grandes.

Portanto, para representar números, na grande maioria das vezes utilizaremos o tipo int para representar números inteiros ou double para representar números fracionados.

> O ponto mais relevante em compreender a definição dos tipos de dados é o momento da definição do tipo para uma variável. Qual tipo de dados eu utilizaria para determinar a idade de uma pessoa ou o salário de um funcionário?
> 

### Declaração de Variáveis

Variável é uma identificação de um espaço em memória utilizado pelo nosso programa. Seguindo as convenções em linguagem de programação, toda variável é composta por: tipo de dados + identificação + valor atribuído.

A estrutura padrão para se declarar uma variável sempre é:

`<Tipo> <nomeVariavel> <atribuicaoDeValorOpcional>`

```java
int idade; // Tipo "int", nome "idade", com nenhum valor atribuido
int anoFabricacao = 2021; //tipo "int", nome "anoFabricacao", com valor 2021 declarado
double salarioMinimo = 2.500 //tipo "double", nome "salarioMinimo", com valor 2.500 declarado
```

Atenção: existe algumas peculiaridades a trabalhar com alguns tipos específicos. Observe no exemplo abaixo:

```java
public class TipoDados {
				public static void main(String[] arg) {
							
								byte idade = 123;
								short ano = 2021;
								int cep = 21070333; //se começar com zero, talvez tenha que ser de outro tipo
								long cpf = 98574839978L;// se começar com zero, talvez tenha que ser de outro tipo
								float pi = 3.14F; // precisa terminar com o F
								double salario = 125.33;
				}
}
```

> Observe que o tipo long precisa terminar com L, o tipo float precisa terminar com F e alguns cenários do dia-a-dia podem estimular uma alteração de tipos de dados convencional.
> 

Muitas das vezes criamos uma variável, definimos um valor correspondente, manipulamos esta variável e temos consciência de seu valor na aplicação. Mas cuidado !!

> Java é fortemente tipado!
> 

Veja o cenário abaixo:

```java
//TiposEVariaveis.java

short numeroCurto = 1;
int numeroNormal = numeroCurto;
short numeroCurto2 = numeroNormal; //aqui vai dar erro ou faz o "cast" 
//ai fica assim short numeroCurto2 = (short) numeroNormal, mas não é recomendado
```

### Variáveis e Constantes

Uma variável é uma área de memória, associada a um nome, que pode armazenar valores de um determinado tipo. Um tipo de dado define um conjunto de valores e um conjunto de operações. Java é uma linguagem com rigidez de tipos, diferente de linguagens como JavaScript, onde declarar o tipo da variável não é obrigatório.

No Java utilizamos identificadores que representam uma referência (ponteiro) um valor em memória, e esta referência pode ser redirecionada a outro valor, sendo portanto esta a causa do nome "variável", pois o valor pode variar.

Já as **Constantes** são valores armazenados em memória que não podem ser modificados depois de declarados. Em Java, esses valores são representados pela palavra reservada `final`, seguida do tipo.

Por convenção, Constantes são sempre escritas em **CAIXA ALTA.**

Exemplo explicativo sobre uso de variáveis e constantes:

```java
public class ExemploVariavel{
	public static void main(String [] args) {
		//
		//esta linha é considerada como declaração de variável
		
		int numero = 5;
		
		//na linha abaixo iremos alterar o valor de "numero", redeclarar o tipo
		// não é mais necessário, pois já foi citada anteriormente
		
		numero = 10;
		
		System.out.print(numero);
		
		// ao usar a palavra reservada "final", voce determina que esta não seja alterada
		// se não a variavel poderá obter outro valor;
		
		final double VALOR_DE_PI = 3.14;
		
		VALOR_DE_PI=3.15
	}
}
```

> Compreendemos que para declarar uma variável como uma constante, utilizamos a palavra final , mas por convenção, esta variável deverá ser escrita toda em caixa alta.
>
## Operadores

Geralmente as primeiras palavras que ouvimos em um curso de programação sao: um programa é um conjunto de instruções lógicas que, quando executadas, produzem algum resultado. Com isso em mente, ao começar a criar as primeiras linhas de código, logo você notará que é comum receber
dados do usuário, prover alguma lógica para processá-los e então apresentar o resultado desse processamento.

O operador de atribuição é utilizado para definir o valor inicial ou sobrescrever valor de uma variável. em Java definimos um tipo, nome e opcionalmente atribuímos um valor à variável através do operador de atribuição. Exemplos abaixo:

```java
//classe Operadores.java
String nome = "GLEYSON";
int idade = 22;
double peso = 68.5;
char sexo = 'M';
boolean doadorOrgao = false;
Date dataNascimento = new Date();
```

### Aritméticos

O operador aritmético é utilizado para realizar operações matemáticas entre valores numéricos, podendo se tornar ou não uma expressão mais complexa.
Os operadores aritméticos são: + (adição), (subtração), * (multiplicação) e / (divisão).

```java
// classe Operadores.java
double soma = 10.5 + 15.7
int subtracao = 113 - 25;
int multiplicacao = 20 * 7;
int divisao = 15 / 3;
int modulo = 18 % 3;
double resultado = (10 * 7) + (20 / 4);
```

### Unários

Esses operadores são aplicados juntamente com um outro operador aritmético. Eles realizam alguns trabalhos básicos como incrementar, decrementar, inverter valores numéricos e booleanos.

- **(+) Operador unário de valor positivo** — números são positivos sem esse operador explicitamente;
- **(-) Operador unário de valor negativo** — nega um número ou expressão
 aritmética;
- ( ++ ) **Operador unário de incremento de valor —** incrementa o valor em 1 
unidade;
- (**--) Operador unário de decremento de valor** - decrementa o valor em 1
unidade;
- **(!) Operador unário lógico de negação** - nega o valor de uma expressão
booleana;

### Ternário

Operador de Condição Ternária é uma forma resumida para definir uma condição e escolher por um dentre dois valores. Você deve pensar numa condição ternária como se fosse uma condição IF normal, porém, de uma forma em que toda a sua estrutura estará escrita numa única linha.

operador ternário é representado pelos símbolos ? : estrutura de sintaxe: utilizados na seguinte

`<Expressão Condicional> ? <Caso condição seja true> : <Caso condição seja false>`

Exemplos:

```java
// classe Operadores.java
int a, b

a = 5
b = 6

//EXEMPLO DE CONDICIONAL UTITILIZANDO UMA ESTRUTURAL IF/ELSE
if(a==b)
	resultado = "verdadeiro";
else
	resultado = "falso";
	
//MESMA CONDICIONAL, MAS DESSA VEZ, UTILIZANDO O OPERADOR TERNÁRIO

String resultado = a == b ? "verdadeiro" : "falso"
```

### Relacionais

Os operadores relacionais avaliam a relação entre duas variáveis ou expressões. Neste caso, mais precisamente, definem se o operando à esquerda é igual, diferente, menor, menor ou igual, maior ou maior ou igual ao da direita, retornando um valor booleano como resultado.

- == Quando desejamos verificar se uma variável é IGUAL A outra.
- ! = Quando desejamos verificar se uma variável é DIFERENTE da outra.
- >  Quando desejamos verificar se uma variável é MAIOR QUE a outra.
- ≥ Quando desejamos verificar se uma variável é MAIOR OU IGUAL a outra.
- < Quando desejamos verificar se uma variável é MENO QUE a outra.
- ≤ Quando desejamos verificar se uma variável é MENOR OU IGUAL a outra.

```java
// classe Operadores.java
String nomeUm = "GLEYSON";
      String nomeDois = new String("GLEYSON");

        System.out.println(nomeUm.equals(nomeDois));

        int numero1 = 2;
        int numero2 = 1;

        if (numero1 > numero2) // true
            System.out.println("maior");

        boolean simNao = numero1 == numero2;
        System.out.println("numeroUm é igual ao numeroDois? " + simNao);

        simNao = numero1 > numero2;
        System.out.println("numeroUm é maior que o numeroDois? " + simNao);

        simNao = numero1 < numero2;
        System.out.println("numeroUm é menor que o numeroDois? " + simNao);

        simNao = numero1 >= numero2;
        System.out.println("numeroUm é maior ou igual ao numeroDois? " + simNao);

        simNao = numero1 <= numero2;
        System.out.println("numeroUm é menor ou igual ao numeroDois? " + simNao);

        simNao = numero1 != numero2;
        System.out.println("numeroUm é diferente do numeroDois? " + simNao);
```
## Lógicos

Os operadores lógicos representam o recurso que nos permite criar expressões lógicas maiores a partir da junção de duas ou mais expressões.

- && Operador Lógico “E”
- || Operador Lógico “OU”
    
    ```java
    boolean condicao1, condicao2;
            condicao1 = true;
            condicao2 = false;
    
            if (condicao1 && condicao2) {
                System.out.println("As duas são verdadeiras");
            }
            if (condicao1 || condicao2) {
                System.out.println("Uma das duas são verdadeiras");
            }
    
            System.out.println("fim");
    
    ```
## Métodos

Todas as ações das aplicações são consideradas métodos.

---

Uma classe é definida por atributos e métodos. Já vimos que atributos são, em sua grande maioria, variáveis de diferentes tipos e valores. Os métodos, por sua vez, correspondem a funções ou sub-rotinas disponíveis dentro de nossas classes.

### Critério de nomeação de Métodos

Esses critérios não são obrigatórios, mas é recomendável que sejam seguidos, pois essas convenções facilitam a vida dos programadores ao trabalharem em códigos de forma colaborativa. Ao seguir estas convenções, tornamos o código mais legível para nós e também para outras pessoas. Para métodos, os critérios são:

- Deve ser nomeado como verbo
- Seguir o padrão camelCase (Todas as letras minúsculas com a exceção da primeira letra da segunda palavra).

Exemplos sugeridos:

```java
somar (int n1, int n2) {}

abrirConexao(){}

concluirProcessamento() {}

findById(int id){}

calcular(){}

imprimir(){}
```

> ATENÇÃO! Não existe em **Java** o conceito de métodos **globais**. Todos os métodos devem **SEMPRE** ser definidos dentro de uma classe.
> 

### Critério de definição de métodos

Mas, como sabemos a melhor forma de definir os métodos das nossas classes? Para chegar à essa conclusão, somos auxiliados por uma convenção estrutural para todos os métodos. Essa convenção é determinada pelos aspectos abaixo:

1. **Qual a proposta principal do método?** Você deve se perguntar constantemente até compreender a real finalidade do mesmo.
2. **Qual o tipo de retorno esperado após executar o método?** Você deve analisar se o método será responsável por retornar algum valor ou não.

> Caso o método não retorne nenhum valor, ele será representado pela palavra-chave `void` .
> 

1. **Quais os parâmetros serão necessários para execução do método?** Os métodos as vezes precisão de argumentos como critérios para a execução.
2. **O método possui o risco de apresentar alguma exceção?** Exceções são comuns na execução de métodos, as vezes é necessário prever e tratar a possível existência de uma exceção.
3. **Qual a visibilidade do método?** Será necessário que o método seja visível a toda aplicação, somente em mesmo pacotes, através de herança ou somente a nível a própria classe.

Abaixo temos um exemplo de uma classe com dois métodos e suas respectivas considerações:

```java
public class MyClass {
	public double somar(int num1, int num2){
		//LOGICA - FINALIDADE DO MÉTODO
		return...;
	}
	
	public void imprimir(String texto) {
		//LOGICA - FINALIDADE DO MÉTODO
		//AQUI NÃO PRECISA DO RETURN
		//POIS NÃO SERÁ RETORNADO NENHUM RESULTADO
	}
	
	//trows Exception : indica que o método ao ser utilizado
	//poderá gerar uma exceção
	public double dividir(int dividendo, int divisor) trows Exception{}
	
	//Esse método não pode ser visto por outras classes no projeto
	private void metodoPrivado(){}
	
	//alguns equívocos estruturais
	public void validar(){
		//este método deveria retornar algum valor
		//no caso boolean (true or false)
	}
	
	public void calcularEnviar() {
		//um método deve representar uma única funcionalidade
	}
	public void gravarClient(String nome, String cpf) {
		//este método tem a finalidade de gravar
		//informaçÕes de um cliente , por que não criar
		//um objeto e passar como parâmetro ?
		//veja abaixo
	}
	
	public void gravarClient(Cliente cliente){}
	//ou
	public void gravar(Cliente cliente){}
		
	
	
}
```
