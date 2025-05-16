public class FormatadorCepExemplo {
    public static void main(String[] args) {
        try {
            String cepFormatado = formatarCep("23765067");
            System.out.println(cepFormatado);
        } catch (CepInvalidoException e) {
            System.out.println("o cep não corresponde ao formatado");
        }
    }
    static String formatarCep(String cep) throws CepInvalidoException{
        if(cep.length() != 8)
            throw new CepInvalidoException();

        //simulando um cep formatado
        return "23.765-064";
    }
}

