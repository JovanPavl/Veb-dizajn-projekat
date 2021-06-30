$(document).ready(function(){
    let naslov;
    let recepti;
    inicijalizacija();
    popuniStranicu();


    function popuniStranicu() {
        naslov=localStorage.getItem("prikazRecepta");
        $("title").text("KuvaRica - " + naslov);
        let recept = recepti.find(e => naslov==e.naslov);
        $("#breadcrumb-kat a").text(recept.kategorija);
        $("#breadcrumb-kat a").attr("href","kategorija.html");
        $("#breadcrumb-rec").text(recept.naslov);
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