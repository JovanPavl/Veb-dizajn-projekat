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
            video:"",
        },
        {	
            kategorija: "glavno",
            naslov: "Pita sa sirom",
            priprema: "Uključiti rernu da se zagreje na 220 stepeni. Podeliti 500g kora na dva jednaka dela. U jednu manju posudicu staviti jedno jaje  i umutiti ga. U drugu, veću posudu staviti sir (500g), kiselo mleko (180g), so i promešati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premažete rolate na kraju. To je nekoliko umakanja četkicom. \nPrvo staviti dve kore i poprskati sa malo ulja. Svuda po malo na koru staviti fila. Prebaciti treću koru i ponoviti postupak. Kada ostanete na dve zadnje kore od te polovine kora koje ste odvojili uviti rolat. Uvijate od uže strane kora. Pomerite rolat, stavite  one dve kore i onda uvijete sve zajedno. Stavite u podmazan pleh i premažete uljem. Ponovite postupak i sa drugom polovinom kora.  Premažte oba rolata sa ono malo jajeta što ste ostavili i po želji pospete morskom solju ili susamom. Stavite da se peče oko 30 minuta smanjivši temperaturu pečenja na 200 kada ubacite pleh u rernu.  Pečene pitice po vadjenju iz rerne poprskate sa dve šake vode i pokrijete krpom. \nMogu da se služe i tople i hladne, preukusne su.Prijatno.",
            korisnik: "Milka",
            trajanje: "50",
            tezina: "lako",
            slika: "pitaSaSirom.jpg",
            video:"",
        },
        {	
            kategorija: "desert",
            naslov: "Pita sa sirom",
            priprema: "Uključiti rernu da se zagreje na 220 stepeni. Podeliti 500g kora na dva jednaka dela. U jednu manju posudicu staviti jedno jaje  i umutiti ga. U drugu, veću posudu staviti sir (500g), kiselo mleko (180g), so i promešati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premažete rolate na kraju. To je nekoliko umakanja četkicom. \nPrvo staviti dve kore i poprskati sa malo ulja. Svuda po malo na koru staviti fila. Prebaciti treću koru i ponoviti postupak. Kada ostanete na dve zadnje kore od te polovine kora koje ste odvojili uviti rolat. Uvijate od uže strane kora. Pomerite rolat, stavite  one dve kore i onda uvijete sve zajedno. Stavite u podmazan pleh i premažete uljem. Ponovite postupak i sa drugom polovinom kora.  Premažte oba rolata sa ono malo jajeta što ste ostavili i po želji pospete morskom solju ili susamom. Stavite da se peče oko 30 minuta smanjivši temperaturu pečenja na 200 kada ubacite pleh u rernu.  Pečene pitice po vadjenju iz rerne poprskate sa dve šake vode i pokrijete krpom. \nMogu da se služe i tople i hladne, preukusne su.Prijatno.",
            korisnik: "Milka",
            trajanje: "50",
            tezina: "lako",
            slika: "pitaSaSirom.jpg",
            video:"",
        },
        {	
            kategorija: "uzina",
            naslov: "Pita sa sirom",
            priprema: "Uključiti rernu da se zagreje na 220 stepeni. Podeliti 500g kora na dva jednaka dela. U jednu manju posudicu staviti jedno jaje  i umutiti ga. U drugu, veću posudu staviti sir (500g), kiselo mleko (180g), so i promešati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premažete rolate na kraju. To je nekoliko umakanja četkicom. \nPrvo staviti dve kore i poprskati sa malo ulja. Svuda po malo na koru staviti fila. Prebaciti treću koru i ponoviti postupak. Kada ostanete na dve zadnje kore od te polovine kora koje ste odvojili uviti rolat. Uvijate od uže strane kora. Pomerite rolat, stavite  one dve kore i onda uvijete sve zajedno. Stavite u podmazan pleh i premažete uljem. Ponovite postupak i sa drugom polovinom kora.  Premažte oba rolata sa ono malo jajeta što ste ostavili i po želji pospete morskom solju ili susamom. Stavite da se peče oko 30 minuta smanjivši temperaturu pečenja na 200 kada ubacite pleh u rernu.  Pečene pitice po vadjenju iz rerne poprskate sa dve šake vode i pokrijete krpom. \nMogu da se služe i tople i hladne, preukusne su.Prijatno.",
            korisnik: "Milka",
            trajanje: "50",
            tezina: "lako",
            slika: "pitaSaSirom.jpg",
            video:"",
        }
    
    
    ];

    popuniSveRecepte();


    function popuniSveRecepte(){
        localStorage.setItem("recepti", JSON.stringify(recepti));
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
});



