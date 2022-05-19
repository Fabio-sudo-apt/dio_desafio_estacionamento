export interface IPessoa {
  nome: string;
  telefone: string;
}

export interface IEstacionamento extends IPessoa {
  placa: string;
  numeroVaga: number;
  entrada: string;
}

let estacionameto: IEstacionamento[] = [];

// Pega os dados do frontEnd

// let bnt = document.getElementById("bnt-cadastra");
let table = document.querySelector("#table-dados");

function criarPessoa() {
  const $ = (query: string): HTMLInputElement | null =>
    document.querySelector(query);

  let nome = $("#name")?.value;
  let telefone = $("#telefone")?.value;
  let placa = $("#placa")?.value;
  let entradaDoCarro = dataEntrada();
  let numeroVaga = numeroAleatorio();

  if (!nome || !telefone || !placa || !entradaDoCarro || !numeroVaga) {
    alert("Informe os dados");
    return;
  }

  let pessoa: IEstacionamento = {
    nome: nome,
    telefone: telefone,
    placa: placa,
    entrada: entradaDoCarro,
    numeroVaga: numeroVaga,
  };

  adicionaList(pessoa);
  criarTable();
}

function dataEntrada(): string {
  let data = new Date();
  let hora = data.getHours();
  let minuto = data.getMinutes();

  return `${hora}:${minuto}`;
}

function numeroAleatorio() {
  let numeroA = Math.floor(Math.random() * 100);
  return Number(numeroA);
}

function adicionaList(pessoa: IEstacionamento) {
  estacionameto.push(pessoa);
}

function criarTable(): void {
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
  table?.appendChild(tr);
}
