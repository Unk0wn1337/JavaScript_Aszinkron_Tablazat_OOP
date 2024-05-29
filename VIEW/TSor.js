export default class TSor{
    #termekObj={

    };
    #szuloELEM;
    #sorELEM;
    #torlesElem;
    constructor(termekObj,szuloELEM){
        this.#termekObj = termekObj;
        this.#szuloELEM = szuloELEM;
        console.log(this.#szuloELEM);
        this.#sorokLetrehozasa();
        this.#torlesElem = $(".torol:last-child"); 
        console.log(this.#torlesElem);
        this.#torlesElem.on("click", () =>{
            this.#trigger("torol")
        })
    }

    #trigger(torol){
        const e = new CustomEvent("torol",{detail:this.#termekObj.id})
        window.dispatchEvent(e);
    }

    #sorokLetrehozasa(){
         let txt = `<tr>`;
        for (const key in this.#termekObj) {
            txt += `<td>${this.#termekObj[key]}</td>`
         }
         txt  += `<td><button class="torol">Töröl</button></td>`;
         txt += `</tr>`;
         this.#szuloELEM.append(txt);
        
    }
}