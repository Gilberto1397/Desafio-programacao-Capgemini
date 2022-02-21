const input = document.querySelector("#password");

function passwordValidate() {
    // EXPRESSÕES REGULARES 
    const text = document.querySelector("h4");
    let regexLow = /[a-z]/;
    let regexHigh = /\d+/;
    let regexSpecial = /.[!,@,#,$,%,^,&,*,(,),-,+]/;
    let numbers = /[0-9]/;
    //TAMANHO DE SENHA
    let minPassword = 3;
    let strongPassword = 6;
    //VARIÁVEIS PARA COMPARAR O VALOR DE ENTRADA COM AS EXPRESSÕES REGULARES
    let inputLow = input.value.match(regexLow)
    let inputMedium = input.value.match(regexHigh)
    let inputStrong = input.value.match(regexSpecial)
    let inputNumber = input.value.match(numbers)
    //VERIFICAÇÃO DE ATENDIMENTO AOS REQUISITOS PARA DEFINIÇÃO DE FORÇA DE SENHA
    if (input.value) {
        if (input.value.length >= minPassword && (inputLow || inputMedium || inputStrong || inputNumber)) {
            text.textContent = "Sua senha está fraca! Opte por criar uma senha com ao menos 6 caracteres alternando entre caracteres especiais, letras maiusculas e minusculas e números!"
        }
        if (input.value.length <= strongPassword && inputNumber && ((inputLow && inputMedium) || (inputMedium && inputStrong))) {
            text.textContent = "Sua senha está boa, mas pode melhorar! Tente criar uma senha forte para maior segurança"
        }
        if (input.value.length > strongPassword && inputLow && inputMedium && inputStrong && inputNumber) {
            text.textContent = "Agora você possui uma senha forte"
        }
    }
}
//CHAMADA DE EVENTO PARA APLICAÇÃO DA FUNÇÃO
input.addEventListener("input", passwordValidate);