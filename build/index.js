"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let estacionameto = [];
// Pega os dados do frontEnd
// let bnt = document.getElementById("bnt-cadastra");
let table = document.querySelector("#table-dados");
function criarPessoa() {
    var _a, _b, _c;
    const $ = (query) => document.querySelector(query);
    let nome = (_a = $("#name")) === null || _a === void 0 ? void 0 : _a.value;
    let telefone = (_b = $("#telefone")) === null || _b === void 0 ? void 0 : _b.value;
    let placa = (_c = $("#placa")) === null || _c === void 0 ? void 0 : _c.value;
    let entradaDoCarro = dataEntrada();
    let numeroVaga = numeroAleatorio();
    if (!nome || !telefone || !placa || !entradaDoCarro || !numeroVaga) {
        alert("Informe os dados");
        return;
    }
    let pessoa = {
        nome: nome,
        telefone: telefone,
        placa: placa,
        entrada: entradaDoCarro,
        numeroVaga: numeroVaga,
    };
    adicionaList(pessoa);
    criarTable();
}
function dataEntrada() {
    let data = new Date();
    let hora = data.getHours();
    let minuto = data.getMinutes();
    return `${hora}:${minuto}`;
}
function numeroAleatorio() {
    let numeroA = Math.floor(Math.random() * 100);
    return Number(numeroA);
}
function adicionaList(pessoa) {
    estacionameto.push(pessoa);
}
function criarTable() {
    let tr = document.createElement("tr");
    estacionameto.forEach((item) => {
        tr.innerHTML = `
  <td>${item.nome}</td>
  <td>${item.telefone}</td>
  <td>${item.placa}</td>
  <td>${item.entrada}</td>
  <td>${item.numeroVaga}</td>
  `;
    });
    table === null || table === void 0 ? void 0 : table.appendChild(tr);
}
