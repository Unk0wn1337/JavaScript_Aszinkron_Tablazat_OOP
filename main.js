import DataService from "./MODEL/DataService.js";
import Tablazat from "./VIEW/Tablazat.js";
import { ADATOK_LISTA } from "./adat.js";


const DS = new DataService();
DS.getAdat("http://127.0.0.1:5500/adat", megjelenit)

function megjelenit(LISTA){
    new Tablazat(ADATOK_LISTA,$(".tablazat"));
}
/* itt tudunk törölni felkell iratkozni  a töröl eseményreTörlés */
$(window).on("torol",(event)=>{
    console.log(event.detail);
    DS.deleteAdat(http://127.0.0.1:5500/adat
})