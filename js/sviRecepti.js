$(document).ready(function(){
    let recepti;
    let korisnik;
    
    inicijalizacija();
    popuniStranicu();


    function popuniStranicu() {

        let original = $("#original");
        for (let i = 0; i < recepti.length; i++) {
            let recept = recepti[i];
            let novi = original.clone(true);
            $("#mojiRecepti").append(novi);
            novi.attr("id","i" +i);
            novi.prop("hidden", false);
            $("#i"+ i + " #naslov").text(recept.naslov);
            $("#i"+ i + " #priprema").text(recept.priprema.substring(0, 100)+ "...");
            $("#i"+ i + " #slika").attr("src", "img/"+recept.slika);
            let o = izracunajOcenu(recept.naslov);
            $("#i"+ i + " #ocena").text(o + "★")
            $("#i" + i + " a").on("click", prikazRecepta);
            $("#i" + i + " a").attr("href", null);
        }

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
        korisnik = "Milka"
        ocene = JSON.parse(localStorage.getItem("ocene"));
        komentari = JSON.parse(localStorage.getItem("komentari"));
        $("title").text("KuvaRica - Svi recepti")
    }
});