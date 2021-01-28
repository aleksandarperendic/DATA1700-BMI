function beregn() {
    const navn = document.getElementById("navn").value;
    const hoyde = document.getElementById("hoyde").value;
    const vekt = document.getElementById("vekt").value;
    let ut = "Person med navn: "+navn;

    var beregning = vekt/(hoyde/100*hoyde/100);

    if(beregning < 18.5){
        ut+= " er altfor tynn. Du må spise mer.";
    }
    else if (beregning > 18.5 && beregning < 25){
        ut+= " er passe fit. Heldig!";
    }
    else {
        ut += " er alt for tjukk. Du må slanke deg."
    }

    document.getElementById("bmi").innerText = ut;
}