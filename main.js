const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("2026-12-20T00:00:00");
const tempoObjetivo2 = new Date("2026-11-15T00:00:00");
const tempoObjetivo3 = new Date("2026-08-10T00:00:00");
const tempoObjetivo4 = new Date("2026-09-05T00:00:00");

let tempoAtual = new Date();

contadores[0].textContent = tempoObjetivo1 - tempoAtual;
contadores[1].textContent = tempoObjetivo2 - tempoAtual;
contadores[2].textContent = tempoObjetivo3 - tempoAtual;
contadores[3].textContent = tempoObjetivo4 - tempoAtual;

for (let i = 0; i < botoes.length; i++) {
botoes[i].onclick = function () {
for (let j = 0; j < botoes.length; j++) {
botoes[j].classList.remove("ativo");
textos[j].classList.remove("ativo");
}

botoes[i].classList.add("ativo");
textos[i].classList.add("ativo");
};
}