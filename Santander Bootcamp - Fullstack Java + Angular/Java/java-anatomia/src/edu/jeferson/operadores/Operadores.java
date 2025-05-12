package edu.jeferson.operadores;

public class Operadores {
    public static void main(String[] args) {
//        int numero = 5;
//        numero = - numero;
//        System.out.println(numero);
//
//        numero = numero * -1;
//        System.out.println(numero);


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


    }
}
