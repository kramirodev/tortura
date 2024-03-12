
let exercicios = JSON.parse(localStorage.getItem('exercicios')) || [];
let anteriores = JSON.parse(localStorage.getItem('anteriores')) || [];

function adicionar() {
    const input = prompt("Digite o nome do exercício:");

    if (input) {
        exercicios.push(input);
        localStorage.setItem('exercicios', JSON.stringify(exercicios));
        alert(`Exercício "${input}" adicionado com sucesso!`);
    }
}

function zerar() {
    exercicios = [];
    anteriores = [];
    localStorage.setItem('exercicios', JSON.stringify(exercicios));
    localStorage.setItem('anteriores', JSON.stringify(anteriores));
    alert('Apagado com sucesso.')
}

function remover() {
    alert(exercicios.join('\n'));

    const input = prompt('Digite o nome do exercício a remover: ');

    const index = exercicios.indexOf(input);

    if (index !== -1) {
        exercicios.splice(index, 1);
        alert(`Exercício "${input}" removido com sucesso!`);
    } else {
        alert(`Exercício "${input}" não encontrado.`)
    }

    localStorage.setItem('exercicios', JSON.stringify(exercicios));
}



function clicar() {
    const quantidade = exercicios.length;

    if (quantidade !== 0) {
        const resultadoElemento = document.getElementById("resultadoExercicio");
        const anteriorElemento = document.getElementById("anteriorExercicio");

        for (let i = 1; i <= 30; i++) {
            setTimeout(function() {
                const numeroescolhido = Math.floor(Math.random() * quantidade);
                const exercicioEscolhido = exercicios[numeroescolhido];

                resultadoElemento.textContent = `Exercício escolhido: ${exercicioEscolhido}`;

                if (i === 30){
                    const resultadoFinal = Math.floor(Math.random() * quantidade);
                    resultadoElemento.textContent = `Exercício escolhido: ${exercicios[resultadoFinal]} 🎉🥳`;

                    anteriores.push(exercicios[resultadoFinal]);
                    anteriorElemento.innerHTML = `Exercício anterior: ${anteriores.join('\n')}`;
                    
                    localStorage.setItem('anteriores', JSON.stringify(anteriores));
                }
            }, i * 100);
        }
    } else {
        alert("Não há exercícios disponíveis.")
    }
}

function iniciar(){
    const anteriorElemento = document.getElementById("anteriorExercicio");
    anteriorElemento.innerHTML = `EXERCÍCIO<br>ANTERIOR:<br> ${anteriores.join('<br>')}`;
}

//css

document.addEventListener('DOMContentLoaded', function(){
    let j = 1
    const rotacaoElement = document.getElementsByClassName('fundo');
    setInterval(() => {
            const rotacaorandom = math.floor(math.random() * 30);
            rotacaoElement.style.transform=`rotate(${rotacaorandom}deg)`;
    }, 4000);
});