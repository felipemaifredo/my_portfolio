const nX = document.querySelector("p#nx");

//

function calcular() {
    const n1 = document.querySelector("input#n1").value;
    const n2 = document.querySelector("input#n2").value;
    const n3 = document.querySelector("input#n3").value;

    let result = (n2 * n3) / n1

    nX.innerText = result
}