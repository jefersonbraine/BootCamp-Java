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
## Escopo

O escopo pode ser entendido como o ambiente onde uma variável pode ser acessada. Em Java, o escopo de variáveis **vai de acordo com o bloco onde ela foi declarada.**

A variável é criada no primeiro acesso à ela, se tornando inacessível após o interpretador sair do bloco de execução ao qual ela pertence. Portanto, esta variável não pode ser lida ou manipulada por rotinas e códigos que estão fora do seu bloco de declaração, ou seja, fora do escopo da variável.

Em uma Classe, podemos visualizar a diferença de escopos. Os atributos (variáveis) são declarados no corpo principal da Classe, sendo portanto acessíveis por todos os métodos.

Caso você declare uma variável DENTRO DE UM MÉTODO, o escopo dessa variável está limitado apenas ao corpo desse método, ou seja, dentro das chaves que limitam o método.

Uma parte fundamental na elaboração de algoritmos simples ou complexos é determinar a localização do código em questão. Sem um domínio sobre escopo de códigos seu projeto tende a conter falhas estruturais e comprometer a proposta principal da aplicação.

```java
public class Conta{
	//variavel da classe conta
	double saldo=10.0
	
	public void sacar(Double valor) {
		//variavel local de método
		double novoSaldo = saldo - valor;
	}
	public void imprimirSaldo(){
		//disponivel em toda classe
		System.out.println(saldo)
		//somente o método conhece esta variável
		System.out.println(novoSaldo);
	}
	public double calcularDividaExponencial(){
		//variável local de método
		double valorParcela = 50.0;
		double valorMontante = 0.0;
		for(int x=1; x<=5; x++) {
			double valorCalculado - valorParcela * x;
			valorMontante = valorMontante + valorCalculado;
		}
		
	}
	return valorMontante
}
```

## Estruturas Condicionais com Java

Controle de fluxo é a habilidade de ajustar a maneira como um programa realiza suas tarefas.
Por meio de instruções especiais, chamadas de comandos, essas tarefas podem ser executadas
seletivamente, repetidamente ou excepcionalmente.

Classificação:

- Estruturas condicionais: if-else, switch-case;
- Estruturas de repetição: for, while, do-while;
- Estruturas de exceções: try-catch-finally, trow;

### Condicional Simples

A Estrutura Condicional possibilita a escolha de um grupo de ações e comportamentos a serem executadas quando determinadas condições são ou não satisfeitas. A Estrutura Condicional pode ser **Simples** ou **Composta**.

### Condicionais Simples

Quando ocorre uma validação de execução de fluxo somente quando a condição for positiva, consideramos como uma estrutura Simples.

```java
//CaixaEletronico.java
public class CaixaEletronico{
	public static void main(String[] args) {
	
		double saldo = 25.0;
		double valorSolicitado = 17.0;
		
		if(valorSolcitado < saldo)
		saldo = saldo - valorSolicitado;
		
		System.out.println(saldo);
	}
}
```

### Condicional Composta

AIgumas vezes o nosso programa deverá seguir mais de uma jornada de xecução condionado a uma regra de negócio, este cenário é demoninado Estrutura Condicional Composta. Vejamos o exemplo abaixo:

**`IF AND ELSE`**

```java
public class ResultadoEscolar{
	public static void main(String[] args) {
		int note = 6;
		
		if(nota >= 7)
		System.out.println("Aprovado")	
		
		else
		System.out.println("Reprovado")	

	}
}
```

### Condicional Encadeada

Em um controle de fluxo condicional, nem sempre nos limitamos ao se ( i f ) e senão ( else ), poderemos ter uma terceira, quarta e ou inúmeras condições.

**`if, else if and else`**

```java
public class ResultadoEscolar{
	public static void main(String[] args) {
		int note = 6;
		
		if(nota >= 7)
		System.out.println("Aprovado")	
		else if(nota >= 5 && nota < 7)
		System.out.println("Recuperação")	
		else
		System.out.println("Reprovado")	

	}
}
```

### Condição ternária

Como vimos em operadores, podemos abreviar nosso algorítmico condicional refatorando com o conceito de operador ternário. Vamos refatorar os exemplos acima para ilustrar o poder deste recurso:

`<Expressão Condicional> ? <Caso condição seja true> : <Caso condição seja false>`

```java
public class ResultadoEscolar{
	public static void main(String[] args) {
		int note = 6;
		String resultado = nota >=7 ? "Aprovado" : "Reprovado";
		String resultado = nota >=7 ? "Aprovado" : nota >=5 && nota <7 ? "Recuperação" :  "Reprovado";
		
		System.out.println(resultado)	

	}
}
```

Ternário

```java
public class ResultadoEscolar{
	public static void main(String[] args) {
		int note = 6;

		String resultado = nota >=7 ? "Aprovado" : nota >=5 && nota <7 ? "Recuperação" : "Reprovado";
		
		System.out.println(resultado)	

	}
}
```

### Switch Case

A estrutura switch compara o valor de cada caso com o da variável sequencialmente, e sempre que encontra um valor correspondente, executa o código associado ao caso. Para evitar que as comparações continuem a ser executadas após um caso correspondente ter sido encontrado, acrescentamos o comando break no final de cada bloco de códigos. O comando break,
quando executado, encerra a execução da estrutura onde ele se encontra

## Estruturas de Repetição

Laços de repetição, também conhecidos como laços de iteração ou simplesmente loops, são comandos que permitem iteração de código, ou seja, que comandos presentes no bloco sejam repetidos diversas vezes.

- **For** (para)
- **While** (enquanto)
- **Do While** (faça enquanto)

### For

O comando `for (na tradução literal para a língua portuguesa "para")` *permite que uma variável contadora seja testada e incrementada a cada iteraçã*o, sendo essas informações definidas na chamada do comando. O comando for recebe como entrada uma variável contadora, a condição e o valor de incrementarão.

A estrutura de sintaxe do controle de repetição `for` é exibida abaixo:

```java
for (bloco de inicilização; expressão booleana de validação; bloco de atualização)
{
	//comando que será executado até que a
	//expressão de validação torne-se falsa
}
```

Vamos imaginar que Joãozinho precisa contar até 20 carneirinhos para pegar no sono:

```java
//ExemploFor.java
public class ExemploFor{
	public static void main(String [] args) {
		for(int carneirinhos = 1; carneirinhos <=20; carneirinhos++) {
			System.out.println(carneirinhos + " - Carneirinhos")
		}
	}

}
```

### For em Arrays

Também usamos o controle de fluxo for para interagir sobre arrays e coleções:

```java
//ExemploForArray.java
public class ExemploForArray{
	public static void main(String[] args) {
		String alunos[] = {"Felipe", "Jonas", "Julia", "Marcos"};
		
		
		for (int x=0; x<alunos.length; x++) {
			System.out.println("O aluno no indice x=" + x + " é " + alunos[x]);
		}
	}
}

```

> Observe que como os arrays começam com índice igual a O (zero), iniciamos a nossa variável x também com valor zero e validamos a quantidade de repetições a partir da quantidade de elementos do array.
> 

### For Each

O uso do `for / each` está fortemente relacionado com um cenário onde contenha um array ou coleção, e assim, a interação é baseada aos elementos da coleção.

```java
//ExemploForEach.java
public class ExemploForEach {
	public static void main(String[] args) {
		String alunos[] = {"Felipe", "Jonas", "Julia", "Marcos"};
		
		//Forma abreviada
		for(String aluno : alunos) {
			System.out.println("O nome do aluno é: " + alunos);
		}
	}
}
```

### Break e Continue

Break significa quebrar, parar, frear, interromper. E é isso que se faz quando o Java encontra esse comando pela frente. Continue, como o nome diz, ele continua o laço. O comando `break` interrompe o laço, já o `continue` interrompe somente a iteração atual.

```java
// class ExemploBreakeContinue.java
public class ExemploBreakeContinue {
	public static void main(String[] args) {
		for(int numero = 1;, numero <=5; numero++) {
			if(numero==3)
				break;
			
			System.out.println(numero);
		}
	}
}
```

### While

O laço `while` (na tradução literal para a língua portuguesa "enquanto") determina que enquanto uma condição for válida, o bloco de código será executado. O laço `while` testa a condição antes de executar o código, logo, caso a condição seja inválida no primeiro teste o bloco nem será executado.

A estrutura de sintaxe do controle de repetição `while` é exibida abaixo:

```java
//estrutura do controle de fluxo while
while (expressão booleane de validação)

{
	// comando que será executado até que a 
	//expressão de validação torne-se falsa
}
```

Joãozinho recebeu R$ 50,00 de mesada e foi em uma loja de doces gastar todo o seu dinheiro, logo, enquanto o valor dos doces não igualar a R$ 50,00 ele foi adicionando itens no carrinho.

```java
// ExemploWhile.java
import java.util.concurrent.ThreadLocalRandom;
public class ExemploWhile {
	public static void main(String[] args) {
		double mesada = 50.0;
		while(mesada>0) {
			Double valor Doce = valor Aleatorio()
			if(valordoce > mensada)
				valorDoce = mesada;
		}
	}
}
```

### Do While

O laço `do / while` (na tradução literal para a língua portuguesa "faça...enquanto"), assim como o laço while, considera que enquanto uma determinada condição for válida o bloco de código será executado. Entretanto, `do / while` testa a condição após executar o código, sendo assim, mesmo
que a condição seja considerada inválida no primeiro teste o bloco será executado pelo menos uma vez.

A estrutura de sintaxe do controle de repetição do / white é exibida abaixo:

```java
// estrutura do controle de fluxo do while

do
{
	//comando que será executado até que a 
	//expressão de validação torne-se falsa
}

while (expressão booleana de validação);
```

Joãozinho resolveu ligar para o seu amigo dizendo que hoje se entupiu de comer docinhos:

```java
import java.util.Random;
public class ExemploDoWhile {
    public static void main(String[] args) {
        System.out.println("Discando...");

        do {
            //executando repetidaw vezes até alguém atender
            System.out.println("Telefone tocando");
        } while(tocando());

        System.out.println("Alô !!!");
    }
    private static boolean tocando() {
        boolean atendeu = new Random().nextInt(3)==1;
        System.out.println("Atendeu? " + atendeu);
        //negando o ato de continunar tocando
        return ! atendeu;
    }
}

```
## Estruturas excepcionais

### Exceções

Ao executar o código Java, diferentes erros podem acontecer: erros de codificação feitos pelo programador, erros devido a entrada errada ou outros imprevistos.

Quando ocorre um erro, o Java normalmente para e gera uma mensagem de erro. O termo técnico para isso é: Java lançará uma **exceção** (jogará um erro).

De forma interpretativa em Java, um erro é algo irreparável, a aplicação trava ou é encerrada drasticamente. Já exceções é um fluxo inesperado da nossa aplicação, exemplo: Querer dividir um valor por zero, querer abrir um arquivo que não existe, abrir uma conexão de banco com usuário ou senha inválida. Todos estes cenários e os demais não são erros mas sim fluxos não previstos
pela aplicação.

E ai que entra mais uma responsabilidade do desenvolvedor, prever situações iguais a estas e realizar o que denominamos de Tratamento de Exceções.

### Mão na massa

Vamos trazer o cenário que estudamos na aula sobre Terminal e Argumentos onde via terminal informamos alguns dados pessoais.

```java
import java.util.Locale;
import java.util.Scanner;

public class AboutMe {
    public static void main(String[] args) {
        //criando o objeto scanner
        Scanner scanner = new Scanner(System.in).useLocale(Locale.US);
        
        System.out.println("Digite seu nome");
        String nome = scanner.next();
        
        System.out.println("Digite seu sobrenome");
        String sobrenome = scanner.next();

        System.out.println("Digite sua idade");
        int idade = scanner.nextInt();
        
        System.out.println("Digite sua altura");
        double altura = scanner.nextDouble();

        
        //imprimindo os dados obtidos pelo usuario
        System.out.println("Ola, me chamo " + nome.toUpperCase() + " " + sobrenome.toUpperCase());
        System.out.println("Tenho " + idade + " anos ");
        System.out.println("Minha altura é " + altura + "cm ");
        scanner.close();   
    }
```

Aparentemente é um programa simples, mas vamos listar alguns possíveis exceções que podem acontecer.

- Não informar o nome e sobrenome
- O valor da idade ter um caractere NÃO numérico
- O valor da altura ter uma vírgula ou invés de ser um ponto **(conforme padrão americano)**

Executando o nosso programa com os valores abaixo, vamos entender qual exceção acontecerá:

| **Entrada** | **Valor** | **Exceção** | **Causa** |
| --- | --- | --- | --- |
| Digite seu nome: | **Marcelo** |  |  |
| Digite seu sobrenome: | **Azevedo** |  |  |
| Digite sua idade: | **quinze (15)** | java.util.InputMismatchException | O programa esperava o valor do tipo numérico inteiro. |
| Digite sua altura: | **1,65** | java.util.InputMismatchException | O programa esperava o valor do tipo numérico decimal no formata americano, exemplo: **1.65** |

> A melhor forma de prever que pode ocorrer uma exceção, é pensar que ela pode ocorrer.
***Lei de Murphy***
> 

**Conhecendo algumas exceções já mapeadas**

A linguagem Java dispõe de uma vasta lista de classes que representam exceções, abaixo iremos apresentar as mais comuns:

| **Nome** | **Causa** |
| --- | --- |
| java.lang.NullPointerException | Quando tentamos obter alguma informação de uma variável nula. |
| java.lang.ArithmeticException | Quando tentamos dividir um valor por zero. |
| java.sql.SQLException | Quando existe algum erro relacionado a interação com banco de dados. |
| java.io.FileNotFoundException | Quando tentamos ler ou escrever em um arquivo que não existe. |

**Tratamento de exceções**

E quando inevitavelmente ocorrer uma exceção? Como nós desenvolvedores podemos ajustar o nosso algoritmo para amenizar o ocorrido?

A instrução **`try`** permite que você defina um bloco de código para ser testado quanto a erros enquanto está sendo executado.

A instrução **`catch`** permite definir um bloco de código a ser executado, caso ocorra um erro no bloco try.

A instrução **`finally`** permite definir um bloco de código a ser executado independente de ocorrer um erro ou não. As palavras-chave `try` e `catch` vêm em pares:

Estrutura de um bloco com try e catch

```java
try {
  //  bloco de código conforme esperado
}
catch(Exception e) {// precisamos saber qual exceção
  // bloco de código que captura as exceções que podem acontecer
  // em caso de um fluxo não previsto
}
```

> O bloco **`try`** / **`catch`** pode conter um conjunto de **catchs** correspondentes a cada exceção que **prevista** em uma funcionalidade do programa.
> 

### **Hierarquia das exceções**

A linguagem Java dispõe de uma variedade de classes que representam exceções, e estas classes são organizadas em uma hierarquia denominadas **Checked and Unchecked Exceptions** ou *Exceções Checadas e Não Checadas*.

![](https://github.com/digitalinnovationone/trilha-java-basico/raw/main/gitbook/.gitbook/assets/image%20(6).png)

> O que determina uma exceção ser classificado como **checada** ou **não checada** ?
> 

É o risco dela ser disparada logo você precisa tratá-la, exemplo: 

Vamos imaginar que precisamos realizar de duas maneiras a conversão de uma String para um número, porém o texto contém Alfanuméricos.

```java
public class ExemploExcecao {
    public static void main(String[] args) {
        Number valor = Double.valueOf("a1.75");

        valor = NumberFormat.getInstance().parse("a1.75");

        System.out.println(valor);

    }
}
```

> As linhas 3 e 5 apresentarão uma exceção ao serem executadas, e a linha 5 contém um método que pode disparar uma exceção checada, logo nós programadores que iremos usar este método teremos que tratá-la explicitamente com **`try \ catch`**.
> 

**Exceções customizadas**

Nós podemos criar nossas próprias exceções baseadas em regras de negócio e assim melhor direcionar quem for utilizar os recursos desenvolvidos no projeto, exemplo:

- Imagina que como regra de negócio, para formatar um cep necessita sempre de ter 8 dígitos, caso contrário lançará uma exceção que denominamos de **CepInvalidoException**.
- Primeiro criamos nossa exceção:

```java
public class CepInvalidoException extends Exception {}
```

- Em seguida criamos nosso método de formatação de cep.

```java
static String formatarCep(String cep) throws CepInvalidoException{
        if(cep.length() != 8)
          throw new CepInvalidoException();

          //simulando um cep formatado
          return "23.765-064";
    }
```
