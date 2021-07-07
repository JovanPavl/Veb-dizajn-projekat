$(document).ready(function(){
    let recepti;
    let korisnik;
    
    inicijalizacija();
    popuniStranicu();


    function popuniStranicu() {
        let mojiRecepti = recepti.filter(e => e.korisnik==korisnik);

        let original = $("#original");
        for (let i = 0; i < mojiRecepti.length; i++) {
            let recept = mojiRecepti[i];
            let novi = original.clone(true);
            $("#mojiRecepti").append(novi);
            novi.attr("id","i" +i);
            novi.prop("hidden", false);
            $("#i"+ i + " #naslov").text(recept.naslov);
            $("#i"+ i + " #priprema").text(recept.priprema.substring(0, 100)+ "...");
            $("#i"+ i + " #slika").attr("src", "img/"+recept.slika);
            let o = izracunajOcenu(recept.naslov);
            $("#i"+ i + " #ocena").text(o + "★")
            $("#i" + i + " button").on("click", brisanjeRecepta);
            $("#i" + i + " a").on("click", prikazRecepta);
            $("#i" + i + " a").attr("href", null);
        }

        dodajKomentareOcene();
    }

    $(".blog-post a").click(function(){
        let naslov = $(this).text();
        localStorage.setItem("prikazRecepta", naslov);
        document.location.href="recept1.html";
    });

    $(".myCommentMark a").click(function(){
        let naslov = $(this).text();
        localStorage.setItem("prikazRecepta", naslov);
        document.location.href="recept1.html";
    });

    $("#brisanje").click(brisanjeRecepta);

    function brisanjeRecepta(){
        let id = $(this).parent().parent().parent().attr("id");
        let naslov = $("#"+ id+ " #naslov").text();
        let zaBrisanje = recepti.find(e => e.naslov == naslov);
        let i = recepti.indexOf(zaBrisanje);
        recepti.splice(i, 1);
        $("#"+id).remove();
        localStorage.setItem("recepti", JSON.stringify(recepti));
    }

    function dodajKomentareOcene(){
        let mojeOcene = ocene.filter(e => e.korisnik == korisnik);
        let mojiKomentari = komentari.filter(e => e.korisnik == korisnik);
        let original = $("#originalKom");
        
        for (let i = 0; i < recepti.length; i++){
            let recept = recepti[i];
            let ocena = mojeOcene.find(e => e.naslov == recept.naslov);
            let komentar = mojiKomentari.find(e => e.naslov == recept.naslov);

            if (ocena != null || komentar!=null) {
                let novi = original.clone(true);
                $("#komentariOcene").append(novi);
                novi.attr("id","i" +i);
                novi.prop("hidden", false);
                $("#i"+ i + " #kNaslov").text(recept.naslov);
                $("#i"+ i + " #kKorisnik").text(recept.korisnik);
                $("#i"+ i + " #kSlika").attr("src", "img/"+recept.slika);
                if (ocena!=null) {
                    $("#i"+ i + " #kOcena").text("Moja ocena: " + ocena.ocena + "★");
                } else {
                    $("#i"+ i + " #kOcena").text("Niste ocenili ovaj recept");
                } 
                if (komentar!=null) {
                    $("#i"+ i + " #kTekst").text(komentar.tekst);
                } else {
                    $("#i"+ i + " #kTekst").text("Niste ostavili komentar za ovaj recept.");
                } 
            }
        }
    }

    function prikazRecepta() {
        let naslov = $(this).text();
        localStorage.setItem("prikazRecepta", naslov);
        document.location.href="recept1.html";
    }

    function izracunajOcenu(naslov){
        o = ocene.filter(e => e.naslov==naslov);
        let sum = 0;
        for (let i = 0; i < o.length; i++) {
            sum+=parseFloat(o[i].ocena);
        }
        if (o.length == 0) return 0.00;
        else return (sum/o.length).toFixed(2);
    }

    function inicijalizacija() {
        recepti = JSON.parse(localStorage.getItem("recepti"));
        korisnik = localStorage.getItem("ulogovan");
        ocene = JSON.parse(localStorage.getItem("ocene"));
        komentari = JSON.parse(localStorage.getItem("komentari"));
    }

});