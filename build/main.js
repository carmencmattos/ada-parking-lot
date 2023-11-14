"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaga = void 0;
const vagas = [];
class Vaga {
    constructor(numeroVaga) {
        this.ocupada = false;
        this.numeroVaga = numeroVaga;
    }
    checkin() {
        if (this.ocupada) {
            console.log("Essa vaga já está ocupada");
        }
        else {
            this.ocupada = true;
            console.log("Vaga ocupada com sucesso");
        }
    }
    criarVaga(numeroVaga) {
        const novaVaga = new Vaga(numeroVaga);
        return novaVaga;
    }
    salvarVaga(vaga) {
        vagas.push(vaga);
        console.log("Vaga salva com sucesso");
    }
    getVagas() {
        return vagas;
    }
    getVagasLivres() {
        const vagasLivres = vagas.filter((vaga) => !vaga.ocupada);
        return vagasLivres;
    }
    getVagasOcupadas() {
        const vagasOcupadas = vagas.filter((vaga) => vaga.ocupada);
        return vagasOcupadas;
    }
    checkout() {
        if (this.ocupada) {
            this.ocupada = false;
            console.log("Vaga liberada com sucesso");
        }
        else {
            console.log("Essa vaga já está livre");
        }
    }
}
exports.Vaga = Vaga;
