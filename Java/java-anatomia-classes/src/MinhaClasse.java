public class MinhaClasse {

   public static void main(String[] args) {
    String firstName = "Jeferson";
    String secondName = "Braine";

    String nomeCompleto = nomeCompleto(firstName, secondName);
    System.out.println(nomeCompleto);
   }

   public static String nomeCompleto(String firstName, String secondName) {
       return "Resultado do método: " + firstName.concat(" ").concat(secondName);
   }

}
