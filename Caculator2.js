let a = false;
let b= false;
let c = false;

function number(tinh1) {
    if (a&&b&&c) {
        document.getElementById("idmanhinh").value = '';
        document.getElementById("idmanhinh").value = document.getElementById("idmanhinh").value+ tinh1.value;
    } else {
        document.getElementById("idmanhinh").value = document.getElementById("idmanhinh").value + tinh1.value;
    }
    a=true;
    b=false;
    c=true;
}
function pheptinh(tinh) {
    if (a&&b&&c || a&&c&&(b==false)|| c&&b&&(a==false)) {
        document.getElementById("idmanhinh").value += tinh.value;
    }
    a=true;
    b=true;
    c=false;
}
function kyhieu(kyhieu1) {
    if (a&&b&&c) {
        document.getElementById("idmanhinh").value = '';
        document.getElementById("idmanhinh").value = document.getElementById("idmanhinh").value+ kyhieu1.value;
    } else {
        document.getElementById("idmanhinh").value = document.getElementById("idmanhinh").value + kyhieu1.value;
    }
}
function a06() {
    if (a&&c&&(b==false)||c&&b&&(a==false)) {
        document.getElementById("idmanhinh").value = eval(document.getElementById("idmanhinh").value);
    }
    a=true;
    b=true;
    c=true;
}
function a10() {
    document.getElementById("idmanhinh").value = '';
    a = false;
    b= false;
    c = false;
}
function del() {
    i = document.getElementById("idmanhinh").value;
    j = i.length;
    document.getElementById("idmanhinh").value = i.substr(0,j-1);
}