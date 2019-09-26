function Addition() {
    let a = parseInt(document.getElementById('id1').value)
    let b = parseInt(document.getElementById('id2').value)
    result = a + b
    document.getElementById('idresult').innerHTML = 'Result: '+result
}
function Subtraction() {
    let a = parseInt(document.getElementById('id1').value)
    let b = parseInt(document.getElementById('id2').value)
    result = a - b
    document.getElementById('idresult').innerHTML = 'Result: '+result
}
function Multipcation() {
    let a = parseInt(document.getElementById('id1').value)
    let b = parseInt(document.getElementById('id2').value)
    result = a * b
    document.getElementById('idresult').innerHTML = 'Result: '+result
}
function Division() {
    let a = parseInt(document.getElementById('id1').value)
    let b = parseInt(document.getElementById('id2').value)
    result = a / b
    document.getElementById('idresult').innerHTML = 'Result: '+result
}