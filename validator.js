const validator = {
  isValid: function (thisNumber) {
    let soma = 0;
    for (const index in thisNumber) {
      if (index % 2 !== 0) {
        // "%" módulo da divisão
        const double = parseInt(thisNumber[index]) * 2;
        if (double > 9) {
          const somadosDigitos = double - 9;
          soma += somadosDigitos;
        }
        else {
          soma += double;
        }
      } else {
        soma += parseInt(thisNumber[index]);
      }
    }
    console.log(soma)
    if (soma % 10 === 0) {
      return true
    } else {
      return false
    }
  },
  /* preenchimentotodo: function () {
     if (document.getElementById('card').value.length < 16) {
       alert('Por favor, coloque todos os 16 dígitos do cartão');
     } else {
       const cardNumber = document.getElementById('card').value;
       const ehValido = validator.isValid(cardNumber);
     }
   } */
};
export default validator;

