let tela = document.getElementById("tela");

// números
document.getElementById("n1").onclick = () => tela.innerText += "1";
document.getElementById("n2").onclick = () => tela.innerText += "2";
document.getElementById("n3").onclick = () => tela.innerText += "3";
document.getElementById("n4").onclick = () => tela.innerText += "4";
document.getElementById("n5").onclick = () => tela.innerText += "5";
document.getElementById("n6").onclick = () => tela.innerText += "6";
document.getElementById("n7").onclick = () => tela.innerText += "7";
document.getElementById("n8").onclick = () => tela.innerText += "8";
document.getElementById("n9").onclick = () => tela.innerText += "9";
document.getElementById("n0").onclick = () => tela.innerText += "0";

// simbolos
document.getElementById("mais").onclick = () => tela.innerText += "+";
document.getElementById("menos").onclick = () => tela.innerText += "-";
document.getElementById("x").onclick = () => tela.innerText += "*";
document.getElementById("divide").onclick = () => tela.innerText += "/";

// apaga
document.getElementById("apaga").onclick = () => {
    tela.innerText = tela.innerText.slice(0, -1);
};

// igual
document.getElementById("igual").onclick = () => {
    try {
        tela.innerText = eval(tela.innerText);
    } catch {
        tela.innerText = "Deu erro";
    }
};