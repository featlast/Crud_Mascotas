const text =
  "anulalalunapaisajemontanaguaamoraromacomidaluzazulsillagatobotellacamarayosoypalindromocasaverdebanderaventanacangrejolarutanosaportootropasonaturaliniciaracaestoseralodoodolaresdonasbarcosmarcieloaviontierrapaisbicicletaestonoespalindromojugarseverlasalrevesusandounradarenelojorejero";

  /**function para obtener los palindromes del string
   * y una vez verificados por la function isPalindrome
   * retorna un objeto con las palabras palindromes del
   * bloque de texto
   */
function getPalindromes(string) {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    for (let j = 1; j < string.length; j++) {
      // En el caso de que encontremos el caracter que no sea igual
      //por default no es palindromo
      if (string[i] === string[j]) {
        const stringToCheck = string.substring(i, j + 1);
        if (stringToCheck.length > 3 && isPalindrome(stringToCheck)) {
          result.push(stringToCheck);
        }
      }
    }
  }
  return {
    result: result,
    items: result.length
  };
}
/**Function para verificar si es palindro,
 * recibe como parametro un string 
 * return true o false
 */
function isPalindrome(string) {
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(getPalindromes(text));
