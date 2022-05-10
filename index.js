function calculo() {
    let height, weight;
    height = document.getElementById("height").value;
    weight = document.getElementById("weight").value;


    let resp = weight / (height ** 2);
    let respArredondada = resp.toFixed(4);

    //alert(resp);
    document.getElementById("resultado").innerHTML = `Resultado: ${respArredondada}`;

    if (resp <= 18.5) {
        document.getElementById("imc").innerHTML = `Abaixo do peso.`;
    } else if (18.6 <= resp && resp <= 24.9) {
        document.getElementById("imc").innerHTML = `Parabéns, peso ideal!`;
    } else if (25 <= resp && resp <= 29.9) {
        document.getElementById("imc").innerHTML = `Levemente acima do peso.`;
    } else if (30 <= resp && resp <= 34.9) {
        document.getElementById("imc").innerHTML = `Obesidade grau 1.`;
    } else if (35 <= resp && resp <= 39.9) {
        document.getElementById("imc").innerHTML = `Obesidade grau 2 (severa).`;
    } else if (resp >= 40) {
        document.getElementById("imc").innerHTML = `Obesidade grau 3 (mórbida).`;
    }

}