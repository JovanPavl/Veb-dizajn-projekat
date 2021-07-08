$(document).ready(function(){
    $("#dugmeL").click(function(){
      /*  let korsinici = JSON.parse(localStorage.getItem("korisnici"));*/
      let korisnici = [{ime:"milka",lozinka:"milka123"},{ime:"[etar",lozinka:"petar123"},{ime:"ana",lozinka:"ana123"},
{ime:"mile",lozinka:"mile123"},{ime:"dana",lozinka:"dana123"},{ime:"Rade",lozinka:"rade123"}];

        let ime = $("#ime").val();
        let lozinka = $("#lozinka").val();
        let kor = korisnici.find(e => e.ime==ime && e.lozinka==lozinka);

        if (kor==null){
            alert("a");
            $("#greske").text("Neispravni podaci.");
            return;
        } else {
            $("#greske").text("Uspešno ste ulogovani.");
        }
        localStorage.setItem("ulogovan", kor.ime);
        document.location.href="index.html";
    });
});