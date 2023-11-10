
function changeNameHandler() {
    const name = getName();
    changeTextOfName(name);
}

function changeTextOfName( newName ){
    document.getElementById("name-title").innerHTML = "Hola " + newName;
}

function getName(){
    return prompt("Escribe tu nombre");
}