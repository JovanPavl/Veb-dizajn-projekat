$(document).ready(function(){
    let recepti=[
        {	
            kategorija: "predjelo",
            naslov: "Pita sa sirom",
            priprema: "Uključiti rernu da se zagreje na 220 stepeni. Podeliti 500g kora na dva jednaka dela. U jednu manju posudicu staviti jedno jaje  i umutiti ga. U drugu, veću posudu staviti sir (500g), kiselo mleko (180g), so i promešati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premažete rolate na kraju. To je nekoliko umakanja četkicom. \nPrvo staviti dve kore i poprskati sa malo ulja. Svuda po malo na koru staviti fila. Prebaciti treću koru i ponoviti postupak. Kada ostanete na dve zadnje kore od te polovine kora koje ste odvojili uviti rolat. Uvijate od uže strane kora. Pomerite rolat, stavite  one dve kore i onda uvijete sve zajedno. Stavite u podmazan pleh i premažete uljem. Ponovite postupak i sa drugom polovinom kora.  Premažte oba rolata sa ono malo jajeta što ste ostavili i po želji pospete morskom solju ili susamom. Stavite da se peče oko 30 minuta smanjivši temperaturu pečenja na 200 kada ubacite pleh u rernu.  Pečene pitice po vadjenju iz rerne poprskate sa dve šake vode i pokrijete krpom. \nMogu da se služe i tople i hladne, preukusne su.Prijatno.",
            korisnik: "Milka",
            trajanje: "50",
            tezina: "lako",
            slika: "pitaSaSirom.jpg",
            slika2: "kuvanje.jpg",
            slika3: "rolat.jpg",
            video:"YDz8TNfTdZE",
        },
        {	
            kategorija: "predjelo",
            naslov: "Ragu čorba",
            priprema: "Na malo ulja i putera poprziti sjeckani luk pa kad je przen dodati sargarepu i meso i jos malo prziti.Naliti vodom i zaciniti. Kuvati da meso omeksa pa dodati krompir izrezan na kockice. Ako je grasak zamrznut dodati i njega odmah a ako je iz konzerve onda sacekati da krompir bude kuvan pa dodati grasak. Pomijesati gustin sa malo vode pa dodati u corbu da se zagusti. Pavlaku takodje promutiti sa malo vode pa i nju dodati. U pavlaku se moze dodati i jedno zumance po zelji. Posuti sjeckanim persunom, pobiberiti i jos malo prokuvati",
            korisnik: "Rade",
            trajanje: "20",
            tezina: "veoma lako",
            slika: "ragu.jpeg",
            slika2: "kuvanje.jpg",
            slika3: "rolat.jpg",
            video:"hRRcbwoQgJ8",
        },
        {	
            kategorija: "desert",
            naslov: "Pita sa sirom",
            priprema: "Uključiti rernu da se zagreje na 220 stepeni. Podeliti 500g kora na dva jednaka dela. U jednu manju posudicu staviti jedno jaje  i umutiti ga. U drugu, veću posudu staviti sir (500g), kiselo mleko (180g), so i promešati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premažete rolate na kraju. To je nekoliko umakanja četkicom. \nPrvo staviti dve kore i poprskati sa malo ulja. Svuda po malo na koru staviti fila. Prebaciti treću koru i ponoviti postupak. Kada ostanete na dve zadnje kore od te polovine kora koje ste odvojili uviti rolat. Uvijate od uže strane kora. Pomerite rolat, stavite  one dve kore i onda uvijete sve zajedno. Stavite u podmazan pleh i premažete uljem. Ponovite postupak i sa drugom polovinom kora.  Premažte oba rolata sa ono malo jajeta što ste ostavili i po želji pospete morskom solju ili susamom. Stavite da se peče oko 30 minuta smanjivši temperaturu pečenja na 200 kada ubacite pleh u rernu.  Pečene pitice po vadjenju iz rerne poprskate sa dve šake vode i pokrijete krpom. \nMogu da se služe i tople i hladne, preukusne su.Prijatno.",
            korisnik: "Milka",
            trajanje: "50",
            tezina: "lako",
            slika: "pitaSaSirom.jpg",
            slika2: "kuvanje.jpg",
            slika3: "rolat.jpg",
            video:"YDz8TNfTdZE",
        },
        {	
            kategorija: "uzina",
            naslov: "Pita sa sirom",
            priprema: "Uključiti rernu da se zagreje na 220 stepeni. Podeliti 500g kora na dva jednaka dela. U jednu manju posudicu staviti jedno jaje  i umutiti ga. U drugu, veću posudu staviti sir (500g), kiselo mleko (180g), so i promešati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premažete rolate na kraju. To je nekoliko umakanja četkicom. \nPrvo staviti dve kore i poprskati sa malo ulja. Svuda po malo na koru staviti fila. Prebaciti treću koru i ponoviti postupak. Kada ostanete na dve zadnje kore od te polovine kora koje ste odvojili uviti rolat. Uvijate od uže strane kora. Pomerite rolat, stavite  one dve kore i onda uvijete sve zajedno. Stavite u podmazan pleh i premažete uljem. Ponovite postupak i sa drugom polovinom kora.  Premažte oba rolata sa ono malo jajeta što ste ostavili i po želji pospete morskom solju ili susamom. Stavite da se peče oko 30 minuta smanjivši temperaturu pečenja na 200 kada ubacite pleh u rernu.  Pečene pitice po vadjenju iz rerne poprskate sa dve šake vode i pokrijete krpom. \nMogu da se služe i tople i hladne, preukusne su.Prijatno.",
            korisnik: "Milka",
            trajanje: "50",
            tezina: "lako",
            slika: "pitaSaSirom.jpg",
            slika2: "kuvanje.jpg",
            slika3: "rolat.jpg",
            pdf:"pitaSir.pdf",
            video:"YDz8TNfTdZE",
        }
    
    
    ];

    inicjalizacija();
    popuniSveRecepte();

    $("#dugmePretraga").click(function(){
        document.location.href="sviRecepti.html";
    });

    $(".menu-list a").click(function(){
        let naslov = $(this).text();
        localStorage.setItem("prikazRecepta", naslov);
        document.location.href="recept1.html";
    });
   
    $(".kat").click(function(){
        let kat = $(this).text();
        localStorage.setItem("prikazKategorije", kat);
        document.location.href="kategorija.html"
    });

    function popuniSveRecepte(){
        
        popuniRecepte("predjelo");
        popuniRecepte("glavno");
        popuniRecepte("uzina");
        popuniRecepte("desert");        
    }

    function popuniRecepte(kategorija){
        let lista = $("#" + kategorija);
        for (let i = 0; i < recepti.length; i++) {
            if (recepti[i].kategorija == kategorija) {
                lista.append($("<li></li>").append($("<a></a>").text(recepti[i].naslov)));
            }
        }
    }

    function inicjalizacija(){
        localStorage.setItem("recepti",JSON.stringify(null));
        if (localStorage.getItem("recepti")!=null){
            recepti = JSON.parse(localStorage.getItem("recepti"));
        }
        localStorage.setItem("recepti",JSON.stringify(recepti));
    }
});



