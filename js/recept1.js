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
        $("#readcrumb-kat a").attr("href","kategorija.html");
        $("#breadcrumb-rec").text(recept.naslov);

       
        let o = izracunajOcnenu(naslov);
        $("#ocena1").text(o + "★")
        $("#naslov").text(recept.naslov);
        $("#korisnik").text(recept.korisnik);
        $("#tezina").text(recept.tezina);
        $("#trajanje").text(recept.trajanje);
        $("#priprema").text(recept.priprema);
        $("#slika").attr("src", "img/"+recept.slika);
        /* dodati video */
        dodajKomentare();
    }

    function izracunajOcnenu(naslov){
        o = ocene.filter(e => e.naslov==naslov);
        let sum = 0;
        for (let i = 0; i < o.length; i++) {
            sum+=parseInt(o[i].ocena);
        }
        if (o.length == 0) return 0.00;
        else return (sum/o.length).toFixed(2);
    }

    $("#dugmeKomentar").click(function(){
        let t = $("#myComment").val();
        let k = "Milka";
        let n = $("#naslov").text();
        let kom = komentari.find(e => e.naslov==n && e.korisnik==k);
        if (kom!=null) {
            alert();
            return;
        }
        if (t=="") return;
        let original = $("#original");
        let novi = original.clone(true);
        let id = "k" + komentari.length;
        novi.prop("hidden", false);
        novi.attr("id", "k"+komentari.length);
        $("#sviKomentari").append(novi);
        $("#"+id + " #komTekst").text(t);
        $("#" + id + " #komKorisnik").text(k);
        komentari.push({
            naslov: n,
            tekst: t,
            korisnik: k
        });
        localStorage.setItem("komentari", JSON.stringify(komentari));
    });

    function dodajKomentare(){
        let n = $("#naslov").text();
        let komentariR = komentari.filter(e => e.naslov == n);
        let original = $("#original");
        for (let i = 0; i < komentariR.length; i++) {
            let kom = komentariR[i];
            let novi = original.clone(true);
            novi.prop("hidden", false);
            novi.attr("id", "k"+ i);
            let id = "k" + i;
            $("#sviKomentari").append(novi);
            $("#"+id + " #komTekst").text(kom.tekst);
            $("#" + id + " #komKorisnik").text("- " + kom.korisnik);
        }
    }

    $("#dugmeOcena").click(function(){
        let o = $("#myMark").val();
        let k = "Milka";
        let n = $("#naslov").text();
        let oc= ocene.find(e => e.naslov==n && e.korisnik==k);
        if (oc!=null) {
            alert();
            return;
        }
        ocene.push({
            naslov: n,
            ocena: o,
            korisnik: k
        });
        localStorage.setItem("ocene", JSON.stringify(ocene));

    });

    function inicijalizacija() {
        recepti = JSON.parse(localStorage.getItem("recepti"));
        komentari = JSON.parse(localStorage.getItem("komentari"));
        ocene = JSON.parse(localStorage.getItem("ocene"));
    }
});