const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;

const TIE = 0;
const WIN = 1;
const LOSE = 2;

const choices = ["img/rock.svg", "img/paper.svg", "img/scissors.svg"];

const rules = {
  [ROCK]: { [PAPER]: LOSE, [SCISSORS]: WIN },
  [PAPER]: { [SCISSORS]: LOSE, [ROCK]: WIN },
  [SCISSORS]: { [ROCK]: LOSE, [PAPER]: WIN },
};

rockBtn.addEventListener("click", () => {
  play(ROCK);
});
paperBtn.addEventListener("click", () => {
  play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
  play(SCISSORS);
});

function play(userOption) {
  //espera 3 segundos antes de mostrar el resultado de la computadora

  resultDiv.innerHTML = `
    <div class="loading">
      <p>La computadora está pensando...</p>
      <div class="spinner"></div>
    </div>
  `;

  setTimeout(() => {
    //compara la opción de la computadora y el usuario
    const computerOption = Math.floor(Math.random() * 3);
    let result;
    if (userOption === computerOption) {
      result = TIE;
    } else {
      result = rules[userOption][computerOption];
    }

    let message = `<div style="display:flex; gap:20vh; align-items:center; justify-content:center;">
          <div>
            <h4>Tú</h4>
            <img src="${choices[userOption]}" alt="Tu elección" width="100">
          </div>
          <div>
            <h4>Computadora</h4>
            <img src="${choices[computerOption]}" alt="Elección de la computadora" width="100">
          </div>
        </div>
      `;

    //muestra el resultado
    switch (result) {
      case TIE:
        message += `<p>Resultado: ¡Empate! 🤝</p>`;
        break;
      case WIN:
        message += `<p>Resultado: ¡Ganaste! 🎉</p>`;
        break;
      case LOSE:
        message += `<p>Resultado: Perdiste 😢</p>`;
        break;
    }

    resultDiv.innerHTML = message;

    return result;
  }, 1000);
}
