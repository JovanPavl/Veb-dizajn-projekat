$(document).ready(function() {
    let recepti;
    inicijalizacija();

    $("#dodavanjeRecepta").click(function() {
       
        let nas = $("#naslov").val();
        let pri = $("#priprema").val();
        let tez = $("#tezina").val();
        let tra = $("#trajanje").val();
        let kat = $("#kategorija").val();
        let nazivFajla = $("#slikaRecepta").val();
        let tmp = nazivFajla.split("\\");
        let l = tmp.length - 1;
        if (nas=="" || pri=="" || tez=="" || tra=="" || kat=="") {
            $("#greske").text("Unesite sve podatke!");
            alert(nas);
            alert(pri);
            alert(tez);
            alert(tra);
            alert(kat);
            alert("a");
            return;
        }
        let korisnik = JSON.parse(localStorage.getItem("korisnik"));
        recepti.push({
            korisnik:korisnik,
            naslov: nas,
            priprema: pri,
            tezina: tez,
            trajanje: tra,
            kategorija: kat,
            slika: tmp[l],
            slika2: "kuvanje.jpg",
            slika3: "rolat.jpg",
            video: $("#snimak").val()                    //dodaj polje da se ucita yt video svakako
        });
        localStorage.setItem("recepti", JSON.stringify(recepti));
        $("greske").text("Recept je uspešno dodat.");
    });

    function inicijalizacija(){
        recepti = JSON.parse(localStorage.getItem("recepti"));
    }
});