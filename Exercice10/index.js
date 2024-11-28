//votre code ici
function printNumbers(n) {
    let resultat = "";
    for (let i = 1; i <= n; i++) {
        resultat += i;
        if (i < n) {
            resultat += " ";
        }
    }
    return resultat;
}
export default printNumbers
