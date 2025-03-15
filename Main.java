public class Main {

  public static String reverseString(String str){
    StringBuilder reversed = new StringBuilder();

    for(int i = str.length() -1; i >= 0; i--){
      reversed.append(str.charAt(i));
    }

    return reversed.toString();
  }

  public static boolean isPalindrome(String str) {
   
    return str.equals(reverseString(str));
}

  public static boolean isPalindromeOptimized(String str){

    int left = 0;
    int right = str.length() -1;

    while (left < right) { 
        if (str.charAt(left) != str.charAt(right)) {
          return false;
        }
        left++;
        right--;
    }
    return true;

  }

  public static int intReversal(int number) {
    // Convertir el número a una cadena para poder manipular los dígitos
    String numberStr = Integer.toString(number);

    // Crear un StringBuilder para construir el número invertido
    StringBuilder reversedNumberStr = new StringBuilder();

    // Recorrer la cadena de derecha a izquierda
    for (int i = numberStr.length() - 1; i >= 0; i--) {
        reversedNumberStr.append(numberStr.charAt(i));
    }

    // Convertir la cadena invertida de nuevo a un número entero
    int reversedNumber = Integer.parseInt(reversedNumberStr.toString());

    // Devolver el número invertido
    return reversedNumber;

    
}

public static String capitalization(String str) {
  if (str == null || str.isEmpty()) {
    return str;
   }  
  StringBuilder capitalizated = new StringBuilder();

  capitalizated.append(Character.toUpperCase(str.charAt(0)));

  for(int i = 1; i < str.length(); i++) {
    if(str.charAt(i - 1)   == ' '){
      capitalizated.append(Character.toUpperCase(str.charAt(i)));
    }  
    else{
      capitalizated.append(str.charAt(i));
    }
  }

  return capitalizated.toString();
}

     
 public static void main(String[] args) {
        System.out.println("REVERSE STRING:");
        System.out.println(reverseString("Hola franco"));
        System.out.println("PALINDROME:");
        System.out.println(isPalindrome("Hola franco"));
        System.out.println(isPalindrome("cddc"));
        System.out.println("PALINDROME OPTIMIZED:");
        System.out.println(isPalindromeOptimized("Hola franco"));
        System.out.println(isPalindromeOptimized("cddc"));
        System.out.println("INT REVERSAL:");
        System.out.println(intReversal(12346));
        //System.out.println(intReversal(-12346));
        System.out.println("CAPITALIZATION:");
        System.out.println(capitalization("luis miguel el sol de mexico"));
        

    }     
}