$(document).ready(function() {
    let recepti;
    inicijalizacija();

    $("#dodavanjeRecepta").click(function() {
       
        let nas = $("#naslov").val();
        let pri = $("#priprema").val();
        let tez = $("#tezina").val();
        let tra = $("#trajanje").val();
        let kat = $("#kategorija").val();

        if (nas=="" || pri=="" || tez=="" || tra=="" || kat=="") {
            $("#greske").text("Unesite sve podatke!");
            return;
        }
        let kor = localStorage.getItem("ulogovan");

        recepti.push({
            naslov: nas,
            priprema: pri,
            tezina: tez,
            trajanje: tra,
            kategorija: kat,
            video:"",
            slika:"",
            korisnik: kor
        });
        localStorage.setItem("recepti", JSON.stringify(recepti));
        $("greske").text("Recept je uspešno dodat.");
    });

    function inicijalizacija(){
        recepti = JSON.parse(localStorage.getItem("recepti"));
    }
});