// votre code ici
function checkAge(age) {
    if (Number(age) < 18) {
        return "Vous êtes mineur."
    }
    else if (Number(age) >= 18 & Number(age) < 65) {
        return "Vous êtes majeur."
    }

    return "Vous êtes senior."


}
export default checkAge;
