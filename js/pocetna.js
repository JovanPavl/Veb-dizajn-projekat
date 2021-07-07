$(document).ready(function(){
    let ocene = [];
    let komentari = [];
    let recepti = [];
    inicijalizacija();
    popuniStranicu();


    function popuniStranicu(){
        let original = $("#originalN");

        for (let i = 0; i < recepti.length; i++) {
           let o = izracunajOcnenu(recepti[i].naslov);
           recepti[i].ocena = o;
        }
        recepti.sort((a, b) => parseFloat(b.ocena - a.ocena));

        for (let i = 0; i < 3; i++) {
            let r = recepti[i];
            let novi = original.clone(true);
            novi.prop("hidden", false);
            novi.attr("id", "r"+ i);
            let id = "r" + i;
            $("#najbolji").append(novi);
            $("#"+id + " #rNaslov").text(r.naslov);
            $("#" + id + " #rOcena").text(parseFloat(r.ocena).toFixed(2)+ "★");
            $("#" + id + " #rSlika").attr("src", "img/"+ r.slika)
            $("#" + id + " #rPriprema").text(r.priprema.substr(0, 100));
        
        }
    }

    $(".food-item a").click(function(){
        let naslov = $(this).text();
        localStorage.setItem("prikazRecepta", naslov);
        document.location.href="recept1.html";
    });

    function izracunajOcnenu(naslov){
        o = ocene.filter(e => e.naslov==naslov);
        let sum = 0;
        for (let i = 0; i < o.length; i++) {
            sum+=parseFloat(o[i].ocena);
        }
        if (o.length == 0) return 0.00;
        else return (sum/o.length).toFixed(2);
    }


    function inicijalizacija(){
        if (localStorage.getItem("recepti")==null){
            localStorage.setItem("recepti", JSON.stringify(recepti));
        } else {
            recepti = JSON.parse(localStorage.getItem("recepti"));
        }
        

        if (localStorage.getItem("komentari")==null){
            localStorage.setItem("komentari", JSON.stringify(komentari));
        } else {
            komentari = JSON.parse(localStorage.getItem("komentari"));
        }
        
        if (localStorage.getItem("ocene")==null){
            localStorage.setItem("ocene", JSON.stringify(komentari));
        } else {
            ocene = JSON.parse(localStorage.getItem("ocene"));
        }
    }
});