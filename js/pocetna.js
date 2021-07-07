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
        
        recepti = [{"kategorija":"predjelo",
        "naslov":"Pita sa sirom",
        "priprema":"Uključiti rernu da se zagreje na 220 stepeni. Podeliti 500g kora na dva jednaka dela. U jednu manju posudicu staviti jedno jaje  i umutiti ga. U drugu, veću posudu staviti sir (500g), kiselo mleko (180g), so i promešati. Usuti zatim jaje, ali ostaviti malo u toj posudici, koliko da premažete rolate na kraju. To je nekoliko umakanja četkicom. \nPrvo staviti dve kore i poprskati sa malo ulja. Svuda po malo na koru staviti fila. Prebaciti treću koru i ponoviti postupak. Kada ostanete na dve zadnje kore od te polovine kora koje ste odvojili uviti rolat. Uvijate od uže strane kora. Pomerite rolat, stavite  one dve kore i onda uvijete sve zajedno. Stavite u podmazan pleh i premažete uljem. Ponovite postupak i sa drugom polovinom kora.  Premažte oba rolata sa ono malo jajeta što ste ostavili i po želji pospete morskom solju ili susamom. Stavite da se peče oko 30 minuta smanjivši temperaturu pečenja na 200 kada ubacite pleh u rernu.  Pečene pitice po vadjenju iz rerne poprskate sa dve šake vode i pokrijete krpom. \nMogu da se služe i tople i hladne, preukusne su.Prijatno.",
        "korisnik":"milka",
        "trajanje":"50","tezina":"1",
        "slika":"pitaSaSirom.jpg","video":"oYbaoPU13h8&ab_channel=Receptinespretnedomaćice"},
        {"naslov":"Šareni rolat",
        "priprema":"Uključiti rernu da se zagreje na 200 stepeni. Ulupati penasto belanca i postepeno dodavati žumanca (od 4 jajeta), pa na kraju so. Dodati jogurt (200ml) i opet umutiti. Na kraju dodati brašno (5 kašika) i prašak za pecivo (1 kesicu) pa sve sjediniti. Podeliti masu na 3 jednaka dela pa u jedan  deo dodati spanać (100g), u drugi papriku (200g), a treći ostaje isti. U veliki pleh od rerne staviti papir za pečenje pa izliti žutu smesu, poravnati, pa cvenu, poravnati, pa zelenu.Po želji se može išarati. Staviti da se peče 15 minuta. Pečenu koricu sa papirom staviti na vlažnu krpu i zajedno sve uviti pa ostaviti da se ohladi.\nZa nadev pomešati sir (150g) i pavlaku (200ml) , dodati iseckanu šunku (150g) i krastavčiće (3 - 4 komdada), malo posoliti ukoliko sir nije slan i sve izmešati. Ostaviti u frižideru do premazivanja kore.\nOhladjenu koru odviti iz krpe i papira. Naneti  nadev pa razvući skoro do gorenjeg ruba kore, gde će biti kraj kada ga uvijete. Umotamo rolat, pa za ga zavijemo u papir i ostavimo na hladjenje do posluženja.\nIseći i uživati. Prijatno!",
        "tezina":"3",
        "trajanje":"35",
        "kategorija":"predjelo",
        "video":"GdILYCZdX24&ab_channel=DomaćiRecepti",
        "korisnik":"ana",
        "slika":"rolat.jpg",
        "slika2":"rolat2.jpg",
        "slika3":"rolat3.jpg"},
        {"naslov":"Čoko mafini",
        "priprema":"Maslac staviti na sobnu temperaturu da omekša ili ako ne želite da čekate stavite u mikrotalasnu da se otopi. U veliku duboku posudu staviti brašno, pa prašak za pecivo i promešati. Dodati i fruktozu pa takođe izmešati. Otopljeni maslac nasuti u posudu sa brašnom i sve fino izmešajte. U drugu posudu razbijte jaja i penasto ih umutite, pa ih spojite sa sastojcima u prvoj posudi. Dodajte u sve i kiselu vodu. Poređajte kalupe za mafine i sipajte smesu u njih. Pecite 15 minuta na 180 stepeni. Kad se mafini ispeku, napravite čokoladni fil. U šerpicu staviti slatku pavlaku da se greje, pa dodajte čokoladu. Otopljenu smesu ostavite da se ohladi, pa umutite mikserom. Stavite fil u špric za šlag i dekorisite mafine. Otopite belu čokoladu, pa sa kašikom dekorišite mafine sa čokoladnim filom.",
        "tezina":"3",
        "trajanje":"50",
        "kategorija":"desert",
        "korisnik":"pera",
        "video":"EXbOomgQD4c&ab_channel=MojKutak",
        "slika":"mafin.jpg",
        "slika2":"mafin2.jpg",
        "slika3":"mafin3.jpg",
        "pdf":""},
        {"naslov":"Krofnice",
        "priprema":"U posudi srednje veličine pomešamo brašno, šećer, so, prašak za pecivo i cimet. U drugoj posudi umutimo jaje i dodajemo sveže mleko.Pomešamo suve sastojke i mokre sastojke i mešamo dok ne dobijemo gustu i glatku smesu. Izvadimo unutrašnjost jabuka i sečemo na krugove. Svaku krišku od jabuke potapamo u smesu i pržimo aromatične krofnice u ugrejanom ulju dok ne dobiju zlatnu boju. Izvadimo svaku krofnicu sa jabukama na ubrus da se ocedi višak masti, nakon toga uvaljamo u šećer.",
        "tezina":"1",
        "trajanje":"40",
        "kategorija":"desert",
        "korisnik":"dana",
        "video":"_nwWFQFCGfA&ab_channel=JelajelenaPetrovic",
        "slika":"krofne.jpg",
        "slika2":"krofne2.jpg",
        "slika3":"krofne3.jpg",
        "pdf":""},
        {"naslov":"Nugat torta",
        "priprema":"Prvo pravimo fil, da bi se hladio. Pomešati gustin i šećer, pa naliti malo hladnog mleka, a ostatak staviti da provri. Izmešati gustin i šećer sa mlekom pa zakuvati u kipuće mleko. Mešati dok se ne zgusne, skloniti sa vatre, dodati čokoladu pa mešati dok se ne otopi. Prekriti folijom i ostaviti da se ohladi. Dok se fil hladi prviti kore. Uključiti rernu da se zagreva na 180 stepeni. Ulupati penasto belanca, postepeno dodavati šećer i mutiti da se dobije čvrsta pena. Dodati zatim postepeno žumanca i ulje u mlazu. Na kraju dodati prosejano brašno i kakao, pa sve sjediniti spatulom. Obložiti okrugli pleh 26cm papirom za pečenje pa istresti masu za koru i staviti da se peče izmedju 20 i 25 minuta, zavisno od rerne. Postupak ponoviti još jednom. Ohladiti kore i vodoravno ih preseći da se dobiju 4. Ulupati  maslac, ulupati slatku pavlaku, mikserom razbiti ohladjen fil. Dodati pola maslaca pa umutiti, dodati drugu polovinu pa umutiti. Masi dodajemo slatku pavlaku i mutimo, a zatim i eurokrem. Na kraju dodajemo lešnik i samlevene napolitanke. i sve mešamo. Obruč staviti na tacnu, pa prvu koru poprskati mlekom i nanaeti trećinu fila. Tako raditi do kraja. Dekoracija po želji i hladjenje. Prijatno!",
        "tezina":"5",
        "trajanje":"120",
        "kategorija":"desert",
        "korisnik":"milka",
        "video":"a5v0mmfIgQM&ab_channel=DomaćiRecepti",
        "slika":"nugat.jpg",
        "slika2":"nugat2.jpg",
        "slika3":"nugat3.jpg",
        "pdf":""}, 
        {"naslov":"Pita sa borovnicama",
        "priprema":"U posudi srednje veličine pomešajte borovnice, limunov sok, 3 kašike šećera i 2 kašike ovsenog brašna, dok se ne sjedine. Ostavite po strani. Zagrejte rernu na 180 ° C. Tanko podmažite ili obložite pleh za pečenje (20 x 20cm) i ostavite sa strane. U velikoj posudi umutite brašno, 200 gr šećera, 1 kašičicu mlevenog cimeta, prašak za pecivo i prstohvat soli. Puter rastopite u šerpici, na tihoj vatri, sklonite sa ringle, dodajte ekstrakt vanile, promešajte i sipajte u posudu sa brašnom, pa sve promešajte dok se ne formira mekano testo. Rasporedite polovinu testa u pripremljeni pleh pa utisnite prstima da dobijete ujednacenu koru. Smešu borovnica ravnomerno rasporedite po vrhu kore. Preostalu polovinu testa prstima pospite po borovnicama. Stavite pleh na sredinu rerne i pecite 45-50 minuta dok gornja kora ne pozlati. Izvadite iz rerne i pustite da se ohladi 30 minuta pre nego što izvadite iz pleha i isečete na kvadrate.",
        "tezina":"2",
        "trajanje":"30",
        "kategorija":"uzina",
        "korisnik":"mile",
        "video":"g5QbiLO9Wvg&ab_channel=MilinKuvar",
        "slika":"bor.jpg",
        "slika2":"bor2.jpg",
        "slika3":"bor3.jpg",
        "pdf":""},
        {"naslov":"Smoothie",
        "priprema":"Uzmite sezonsko voce koje imate (pozeljno je dodati bananu ili jabuku). Ubacite u blender i dospite mleko. Po zelji, mozete dodati leda. Nakon blendanja, servirajte ovu zdravu uzinu! Uzivajte!",
        "tezina":"1",
        "trajanje":"5",
        "kategorija":"uzina",
        "korisnik":"pera",
        "video":"drlBtPUcgSI&ab_channel=NADAFITT",
        "slika":"smuti.jpg",
        "slika2":"smuti2.jpg",
        "slika3":"smuti3.jpg",
        "pdf":""},
        {"naslov":"Voćna salata",
        "priprema":"Isecite sezonsko voće. Servirajte na tanjir. Po želji, dodajte šlag. Kako bi ova poslastica bila jos bolja, mozete dodati naseckane lesnike ili bademe.",
        "tezina":"1",
        "trajanje":"10",
        "kategorija":"uzina",
        "korisnik":"dana",
        "video":"9nO22Xwi4EU&ab_channel=SašinaKuhinja",
        "slika":"voce.jpg",
        "slika2":"voce2.jpg",
        "slika3":"voce3.jpg",
        "pdf":""}];
        let korisnici = [{ime:"Milka",lozinka:"milka123"},{ime:"Petar",lozinka:"petar123"},{ime:"Ana",lozinka:"ana123"},{ime:"Mile",lozinka:"mile123"},{ime:"Dana",lozinka:"dana123"}];


      /*  if (localStorage.getItem("recepti")==null){*/
            localStorage.setItem("recepti", JSON.stringify(recepti));
      /*  } else {
            recepti = JSON.parse(localStorage.getItem("recepti"));
        }*/
        
        localStorage.setItem("korisnici",JSON.stringify(korisnici));

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