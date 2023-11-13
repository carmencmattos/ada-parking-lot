import { randomUUID } from "crypto";

class Vagas {
  id: string;
  vagasDisponiveis: number;
  vagasOcupadas: number;
  alerta: string;

  constructor(
    vagasDisponiveis: number,
    vagasOcupadas: number,
    alerta: string,
    id: string
  ) {
    this.vagasDisponiveis = vagasDisponiveis;
    this.vagasOcupadas = vagasOcupadas;
    this.alerta = alerta;
    this.id = id;
  }
}

class Checkin {
  dataCheckin: Date;
  vagaOcupada: boolean;
  vagaId: string;

  constructor(dataCheckin: Date, vagaOcupada: boolean, vagaId: string) {
    this.dataCheckin = dataCheckin;
    this.vagaOcupada = vagaOcupada;
    this.vagaId = vagaId;
  }
}

class Checkout {
  dataCheckout: Date;
  vagaLiberada: boolean;
  valor: number;
  checkoutMenosCheckin: number;
  vagaId: string;

  constructor(
    dataCheckout: Date,
    vagaLiberada: boolean,
    valor: number,
    checkoutMenosCheckin: number,
    vagaId: string
  ) {
    this.dataCheckout = dataCheckout;
    this.vagaLiberada = vagaLiberada;
    this.valor = valor;
    this.checkoutMenosCheckin = checkoutMenosCheckin;
    this.vagaId = vagaId;
  }
}
