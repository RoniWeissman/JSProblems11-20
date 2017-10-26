/* Roni Weissman
JS Problems 11-20
October 26
 */


function firstLast6(ints) {
    var length = ints.length;
    var firstLocation = ints[0];
    var lastLocation = ints[ints.length-1];
    if(lastLocation != 6 && firstLocation != 6){
        return false;
    }
    if(lastLocation == 6 || firstLocation == 6){
        return true
    }
}


function has23(ints){
    for(var i = 0; i < ints.length; i++){
        if(ints[i] == 2 || ints[i] == 3){
            return true;
        }
        if(ints[i + 1] == 2 || ints[i + 1] == 3){
            return true;
        }else{
            return false;
        }
    }
}


function fix23(ints) {
    for(var i = 0; i < ints.length; i++) {
        if (ints[i + 1] == 2 && ints[i + 2] == 3) {
            ints[i + 2] = 0;
        }
    }
    for (var i = 0; i < ints.length; i++) {
        if (ints[i] == 2 && ints[i + 1] == 3) {
            ints[i + 1] = 0;
        }
    }
    return ints;
}


function countYZ(str){
    var strToLC = str.toLowerCase();
    var total = 0;
    for(var i = 0; i < strToLC.length; i++){
        if(strToLC[i] == 'y' || strToLC[i] == 'z') {
            if (strToLC[i + 1] == ' ') {
                total = total + 1;
            }
        }
    }
    if(strToLC[strToLC.length - 1] == 'y' || strToLC[strToLC.length -1] == 'z'){
        total ++;
    }
    return total;
}


function endOther(strOne, strTwo){
    var oneLC = strOne.toLowerCase();
    var twoLC = strTwo.toLowerCase();
    var total = 0;
    if(oneLC.length >= twoLC.length){
        if(oneLC.endsWith(twoLC)){
            return true;
        }else{
            return false;
        }
    }
    if(twoLC.length > oneLC.length){
        if(twoLC.endsWith(oneLC)){
            return true;
        }else{
            return false;
        }
    }
}


function starOut(str){
    var newStr = "";
    for(var i = 0; i < str.length; i++){
        if(str[i] != "*"){
            if(str[i + 1] != "*"){
                if(str[i - 1] != "*"){
                    newStr += str[i];
                }
            }
        }
    }
    return newStr;
}

function getSandwich(str){
    var first = str.indexOf("bread");
    if(first >= 0){
        var second = str.lastIndexOf("bread");
        if(second > first){
            return str.substring(first + 5, second);
        }
    }
    return "";
}


function canBalance(ints){
    var total = 0;
    var findHalf = 0;
    for(var i = 0; i < ints.length; i++){
        total = total + ints[i];
    }
    var halfTotal = total/2;
    for(var i = 0; i < ints.length; i++){
        findHalf = findHalf + ints[i];
        if(findHalf == halfTotal){
            return true;
        }
    }
    return false;
}


function countClumps(ints){
    var match = false;
    var total = 0;
    for(var i = 0; i < ints.length-1; i++){
        if(ints[i] == ints[i + 1] && !match){
            match = true;
            total++;
        }else{
            if(ints[i] != ints[i + 1]){
                match = false;
            }
        }
    }
    return total;
}


function evenlySpaced(a, b, c){
    if(a==b && b==c){
        return true;
    }
    if(a==b || a==c || b==c){
        return false;
    }
    return ((a+b) == c*2) || ((a+c) == b*2) ||((b+c) == a*2);
}

function tester() {
    document.getElementById("output").innerHTML = canBalance([1, 1, 1, 2, 1]);
}