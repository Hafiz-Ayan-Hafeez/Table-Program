var table = document.querySelector("#table");
var div = document.querySelector("div");

function generate() {
    div.innerHTML = "";
    for (var i = 1; i <= 10; i++){
        div.innerHTML += `${table.value} x ${i} = ${table.value * i} <br />`;
    }
}