async function checkBg() {
    let mGenotype = document.getElementById("genoType1").value.toUpperCase();
    let wGenotype = document.getElementById("genoType2").value.toUpperCase();
    let AA = "AA";
    let AS = "AS";
    let SS = "SS";

    //check for userinputs
    if (mGenotype == AA) {
        if(wGenotype == AA) {
            document.getElementById("resultCheck").innerHTML = "They can get Married"
        } else if(wGenotype == AS) {
            document.getElementById("resultCheck").innerHTML = "They can get Married"
        } else if(wGenotype == SS) {
            document.getElementById("resultCheck").innerHTML = "They can get Married"
        } else {
             document.getElementById("resultCheck").innerHTML = "Invalid input!"
        }
    } else if(mGenotype == AS) {
         if(wGenotype == AA) {
            document.getElementById("resultCheck").innerHTML = "They can get Married"
        } else if(wGenotype == AS) {
            document.getElementById("resultCheck").innerHTML = "Seek Medical Advice"
        } else if(wGenotype == SS) {
            document.getElementById("resultCheck").innerHTML = "They cannot get Married"
        } else {
            document.getElementById("resultCheck").innerHTML = "Invalid input!"
        }
    }else if(mGenotype == SS) {
        if(wGenotype == AA) {
            document.getElementById("resultCheck").innerHTML = "They can get Married"
        } else if(wGenotype == AS) {
            document.getElementById("resultCheck").innerHTML = "They cannot get Married"
        } else if(wGenotype == SS) {
            document.getElementById("resultCheck").innerHTML = "They cannot get Married"
        } else {
            document.getElementById("resultCheck").innerHTML = "Invalid input!"
        }
    } else if(wGenotype=="" || mGenotype=="" ){
        document.getElementById("resultCheck").innerHTML = "Kindly Provide necessary inputs"
    }else{
        document.getElementById("resultCheck").innerHTML = "Invalid input!"
    }
}
const forms = document.getElementsByClassName("checkerlayoutform");

forms[0].addEventListener("submit", function (e) {
  e.preventDefault();
});