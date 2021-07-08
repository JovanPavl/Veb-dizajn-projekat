$(document).ready(function(){
    let kategorija;
    let recepti;
    inicijalizacija();
    popuniStranicu();

    
    $("food-item a").click(prikaziRecept);

    function prikaziRecept(){
        let naslov = $(this).text();
        localStorage.setItem("prikazRecepta", naslov);
        document.location.href="recept1.html";
    }

    function popuniStranicu(){
        let sviRecepti = recepti.filter(e => e.kategorija == kategorija);
        let original = $("#original");
        for (let i = 0; i < sviRecepti.length; i++) {
            let recept = sviRecepti[i];
            let novi = original.clone(true);
            $("#sviRecepti").append(novi);
            novi.attr("id","i" +i);
            novi.prop("hidden", false);
            $("#i"+ i + " #naslov").text(recept.naslov);
            $("#i"+ i + " #naslov").on("click", prikaziRecept);
            $("#i"+ i + " #priprema").text(recept.priprema.substring(0, 70)+ "...");
            $("#i"+ i + " #slika").attr("src", "img/"+recept.slika);
            $("#i"+ i + " #ocena").text("5.0" + $("#original #ocena").text());
            
        }
    }

    function inicijalizacija() {
        recepti = JSON.parse(localStorage.getItem("recepti"));
        kategorija = localStorage.getItem("prikazKategorije");
        $("title").text("KuvaRica - " + kategorija);
        kategorija = kategorija.toLowerCase();
        $(".page-heading h1").text(kategorija);
        $("#breadcrumb-kat").text(kategorija);
        if (kategorija=="užina") kategorija="uzina";
        if (kategorija=="glavno jelo") kategorija="glavno jelo";
    }
});