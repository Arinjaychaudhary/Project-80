  var inputs1 =[];
function  make1(){
    for (let j = 1; j<= 6 ; j++) {
        inputs1.push(document.getElementById("i"+j).value);
    }
document.getElementById("p1").innerHTML=inputs1.join(" . ")
}

    var inputs2 =[];
function  make2(){
    for (let k = 1; k<= 6 ; k++) {
        inputs2.push(document.getElementById("i2"+k).value);
    }
document.getElementById("p2").innerHTML=inputs2.join(" . ")
}