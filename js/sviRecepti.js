$(document).ready(function(){
    let recepti;
    let korisnik;
    inicijalizacija();
    popuniStranicu();
    let tezine = ['veoma lako', 'lako', 'srednje', 'tesko', 'veoma teško'];

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
    $("#PoOcenama").click(function(){
        if(recepti.length == 0) return;
        for(let i = 0; i < recepti.length; i++){
            let value = izracunajOcenu(recepti[i].naslov), id = 0;
            for(let j = i + 1; j < recepti.length; j++){
                let tmp1 = izracunajOcenu(recepti[j].naslov);
                if(tmp1 > value){
                    value = tmp1;
                    id = j;
                }
            }
            if(i!= id)  [recepti[id],recepti[i]] = [recepti[i],recepti[id]];
        }
        $("#mojiRecepti").empty();
        popuniStranicu();
    });
    $("#nazivJela").keyup((function(){
        let tmp = $("#nazivJela").val();            
        let jArray = [];
        for(let i = 0; i < recepti.length; i++){
            jArray.push(recepti[i].naslov);
            $("#i"+i).prop("hidden",true);
        }
        let emptyArray = jArray.filter((data)=>{                
            return data.toLocaleLowerCase().includes(tmp.toLocaleLowerCase()); 
        });
        for(let i = 0; i < recepti.length; i++){
            for(let j = 0; j < emptyArray.length; j++){
                if(emptyArray[j] == recepti[i].naslov){
                    $("#i" + i).prop("hidden",false);
                    break;
                }
            }
        }
    }));
    $("#PoTezini").click(function(){
        if(recepti.length == 0) return;
        for(let i = 0; i < recepti.length; i++){
            let value = uzmiTezinu(recepti[i].tezina), id = 0;
            for(let j = i + 1; j < recepti.length; j++){
                let tmp1 = uzmiTezinu(recepti[j].tezina);
                if(tmp1 < value){
                    value = tmp1;
                    id = j;
                }
            }
            if(i!= id)  [recepti[id],recepti[i]] = [recepti[i],recepti[id]];
        }
        $("#mojiRecepti").empty();
        popuniStranicu();
    });
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

    function uzmiTezinu(t){
        for(let i = 0; i < tezine.length; i++){
            if(tezine[i] == t){
                return i;
            }
        }
        return -1;
    }
    function inicijalizacija() {
        recepti = JSON.parse(localStorage.getItem("recepti"));
        korisnik = "Milka"
        ocene = JSON.parse(localStorage.getItem("ocene"));
        komentari = JSON.parse(localStorage.getItem("komentari"));
        $("title").text("KuvaRica - Svi recepti")
    }
});