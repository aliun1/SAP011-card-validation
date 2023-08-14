import validator from './validator.js';
const verifcard = document.getElementById("btn-submit")
const alerta = document.getElementById("mensagem-validacao")

verifcard.addEventListener("click", thisNumber)
// Ele previne o comportamento padrão que nós não queremos no SubmitEvent, como por exemplo o reinicio da página
function thisNumber(event) {
  event.preventDefault()
  //event serve para verificar se foi digitado algo
  const cartao = document.getElementById("card").value
  // Get Element é um DOM de uma documentação pronta, que faz funcionar o que foi digitado no Input (index.hml)
  const verificarCard = validator.isValid(cartao);
  if (verificarCard) {
    alerta.textContent = "Eba! Cartão Válido :)";
  } else {
    alerta.textContent = "Que Pena! Cartão Inválido :(";
  }
  /*const card = document.getElementById('card');
  card.addEventListener('input', () => {
    const inputValue = card.value;
    const maskedValue = maskify(inputValue);
    card.value = maskedValue;
  });
  function maskify(sensitiveData) {
    if (sensitiveData.length <= 4) {
      return sensitiveData;
    } else {
      const maskedChars = '#'.repeat(sensitiveData.length - 4);
      const lastFour = sensitiveData.slice(-4);
      return maskedChars + lastFour;
    }
  } */
}

