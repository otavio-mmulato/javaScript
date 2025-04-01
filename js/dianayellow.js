const div = document.getElementById("meuDiv");

div.addEventListener("mouseover", function(){
    div.style.backgroundColor = 'lightgreen';
});

div.addEventListener("mouseout", function(){
    div.style.backgroundColor = 'aliceblue';
});