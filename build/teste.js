"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const vaga1 = new main_1.Vaga(1);
const vaga = vaga1.criarVaga(vaga1.numeroVaga);
vaga.checkin();
vaga.salvarVaga(vaga);
console.log(vaga.getVagasOcupadas());
