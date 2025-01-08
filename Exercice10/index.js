//votre code ici
function printNumbers(n) {
    let resultat = [];
    for (let i = 1; i <= n; i++) {
        resultat.push(i);
    }
    return resultat.join(" ");
}
export default printNumbers