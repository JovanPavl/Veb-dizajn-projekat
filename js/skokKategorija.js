$(document).ready(function(){
    $("a").click(function(){
        let ok = false;
        if($(this).attr("id") == 'predjelo'){
            localStorage.setItem("prikazKategorije","predjelo");
            ok = true;
        }
        if($(this).attr("id") == 'glavnoJelo'){
            localStorage.setItem("prikazKategorije","glavno jelo");
            ok = true;
        }
        if($(this).attr("id") == 'užina'){
            localStorage.setItem("prikazKategorije","užina");
            ok = true;
        }
        if($(this).attr("id") == 'desert'){
            localStorage.setItem("prikazKategorije","desert");
            ok = true;
        }
        if($(this).attr("id") == 'predjelo1'){
            localStorage.setItem("prikazKategorije","predjelo");
            ok = true;
        }
        if($(this).attr("id") == 'glavnoJelo1'){
            localStorage.setItem("prikazKategorije","glavno jelo");
            ok = true;
        }
        if($(this).attr("id") == 'užina1'){
            localStorage.setItem("prikazKategorije","užina");
            ok = true;
        }
        if($(this).attr("id") == 'desert1'){
            localStorage.setItem("prikazKategorije","desert");
            ok = true;
        }
        if(ok == true)
            document.location.href="kategorija.html"

        return;
    })
});