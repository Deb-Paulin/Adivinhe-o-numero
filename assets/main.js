let numeroEscondido = parseInt(Math.random() * 11);

function Chutar() {
  let elementoResultado = document.getElementById("resultado");
  let chute = parseInt(document.getElementById("valor").value);

  console.log(chute);
  if (chute == numeroEscondido) {
    elementoResultado.innerHTML = "Parabéns! Você acertou";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML = "Você errou";
  }
}
