$(document).ready(function(){
    let naslov;
    let recepti;
    inicijalizacija();
    popuniStranicu();


    function popuniStranicu() {
        naslov=localStorage.getItem("prikazRecepta");
        let recept = recepti.find(e => naslov==e.naslov);
        $("#naslov").text(recept.naslov);
        $("#korisnik").text(recept.korisnik);
        $("#tezina").text(recept.tezina);
        $("#trajanje").text(recept.trajanje);
        $("#priprema").text(recept.priprema);
        $("#slika").attr("src", "img/"+recept.slika);
        /* dodati video */
    }


    function inicijalizacija() {
        recepti = JSON.parse(localStorage.getItem("recepti"));
        naslov = JSON.parse(localStorage.getItem("prikaziRecept"));
    }
});