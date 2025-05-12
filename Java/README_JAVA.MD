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






