const areaCirculo = () => {
    const raio = document.getElementById("raio").value;

    area = (raio*raio) * 3.14;
    document.getElementById("resultado").textContent = "Área da circuferência: " + area;
}