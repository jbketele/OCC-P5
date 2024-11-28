// votre code ici
function checkAge(age) {
    if (Number(age) < 18) {
        return "Vous êtes mineur."
    }
    if (Number(age) >= 18 & Number(age) < 65) {
        return "Vous êtes majeur."
    }
    if (Number(age) >= 65) {
        return "Vous êtes senior."
    }

}
export default checkAge;
