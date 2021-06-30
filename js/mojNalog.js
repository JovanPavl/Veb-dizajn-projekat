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
            $("#i"+ i + " #ocena").text("5.0" + $("#original #ocena").text())
            $("#i" + i + " button").on("click", brisanjeRecepta);
        }
    }

    $("#brisanje").click(brisanjeRecepta);

    function brisanjeRecepta(){
        let id = $(this).parent().parent().parent().attr("id");
        alert(id);
    }

    function inicijalizacija() {
        recepti = JSON.parse(localStorage.getItem("recepti"));
        korisnik = "Milka"
    }
});