import TSor from "./TSor.js";

export default class Tablazat{
    #LISTA = [];
    #szuloELEM;
    #tbodyELEM;
    constructor(LISTA, szuloELEM){
        this.#LISTA = LISTA;
        this.#szuloELEM = szuloELEM;
        this.#tablazatMegjelenites();
        // ennek kell elöbb lennie
        // és csak utána a tbody megfogásának
        this.#tbodyELEM = this.#szuloELEM.children("table").children("tbody");
        // a sorok szülő eleme a tbody lesz
        console.log(this.#tbodyELEM);
        this.#sorokHozzadasa();

    }

    #tablazatMegjelenites(){
        let txt = `<table>`
        txt += "<table class='table table-striped'>";
        txt += "<tr><th>id</th><th>kutyaNeve</th><th>kora</th><th>neme</th><th>kep</th><th>ar</th></tr>";
        // Tbody-ba kerülnek a sorok
        // txt += `<tbody> `
        
        // txt += `</tbody>`
        txt += "</table>";
        this.#szuloELEM.append(txt);
    }

    #sorokHozzadasa(){
        this.#LISTA.forEach((element) => {
            new TSor(element,this.#tbodyELEM);
        })
    }
}