export class Veiculo {

    // atributos da classe
    private placa: string;
    private modelo: string;
    private combustivel: string;
    private rodas: number;
    private altura: number;
    private marca: string;
    private kmrodado: number;
    private eixos: number;

     //método construtor
     public constructor (_placa: string, _modelo: string, _combustivel: string, _rodas: number, _altura: number, _marca: string, _kmrodado: number, _eixos: number) {
        this.placa = _placa;
        this.modelo = _modelo;
        this.combustivel = _combustivel;
        this.rodas = _rodas;
        this.altura = _altura;
        this.marca = _marca;
        this.kmrodado = _kmrodado;
        this.eixos = _eixos;
}

// métodos GETTERS and SETTERS
    /**
     * Retorna o nome da pessoa
     * 
     * @returns veiculo : placa
 */

public getPlaca() {  
        return this.placa;
}


public setPlaca(_placa: string){  
    this.placa = _placa;
}

public getModelo() {  
    return this.modelo;
}

public setModelo(_modelo: string){  
    this.modelo = _modelo;
}

public getCombustivel() {  
    return this.combustivel;
}

public setCombustivel(_combustivel: string){  
    this.combustivel = _combustivel;
}

public getRodas() {  
    return this.rodas;
}

public setRodas(_rodas: number){  
    this.rodas = _rodas;
}

public getAltura() {  
    return this.altura;
}

public setAltura(_altura: number){  
    this.altura = _altura;
}

public getMarca() {  
    return this.marca;
}

public setMarca(_marca: string){  
    this.marca = _marca;
}

public getKmRodado() {  
    return this.kmrodado;
}

public setKmRodado(_kmrodado: number){  
    this.kmrodado = _kmrodado;
}

public getEixos() {  
    return this.eixos;
}

public setEixos(_eixos: number){  
    this.eixos = _eixos;
}

public mostraVeiculo() {
    console.log(
    `Placa: ${this.placa}
    Modelo: ${this.modelo}
    Combustivel:  ${this.combustivel}
    Rodas: ${this.rodas}
    Altura: ${this.altura}
    Marca: ${this.marca}
    KmRodado: ${this.kmrodado}
    Eixos: ${this.eixos}`);

}

}