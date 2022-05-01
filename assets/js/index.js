import { Leon, Lobo, Oso, Serpiente, Aguila }  from "./clases/AnimalesTodos.js"

import consulta from "./consulta.js";

let tarjetaAnimal=[];

const getDate = async () => {
    let {animales} = await consulta.getData();
    return animales;    
}

getDate().then(respuesta => {

    document.getElementById("btnRegistrar").addEventListener("click", () => {
        let nombreAnimal = document.getElementById("animal");
        let rangoAnos = document.getElementById("edad");
        let comentarios = document.getElementById("comentarios");
        let sonidos = document.getElementById("player");
        let imagenAvatar = document.getElementById("imagenAvatar");
        let previewElement = document.getElementById("preview");
        
        function vistaTarjetas () {
            const tarjetadiv = document.querySelector(".tarjetas");

            tarjetadiv.innerHTML = "";
        
            tarjetaAnimal.forEach((animal) => {
                const cardAnimal = document.createElement("div")
                const imagen = document.createElement("div");
                const botonSonido = document.createElement("div");
    
                cardAnimal.classList.add("card", "text-white", "bg-secondary");
                cardAnimal.classList.add("mx-1");
                cardAnimal.style.width="150px";
                imagen.innerHTML = `<img src="./assets/imgs/${animal.getImg}" class="card-img-top width = "150rem" height= "150rem" "/>`;
                botonSonido.classList.add("card-body", "p-0")
                botonSonido.innerHTML = `<a href="#"><img class="p-1" src="./assets/imgs/audio.svg" style="width:30px"/></a>`;                
    
                imagen.addEventListener("click", () => {
                    $("#exampleModal").modal("show");
                    const modalBody = document.querySelector(".modal-body");
                    modalBody.innerHTML = `
                    <img src="./assets/imgs/${animal.getImg}" style="width: 400px" class="img-fluid mx-auto my-auto"/>
                    <p class="text-white text-center pt-1" style="font-size: 12px"> ${animal.getNombre}</p>
                    <p class="text-white text-center" style="font-size: 12px">${animal.getEdad}</p>
                    <hr style="background-color: #FFFFFF">
                    <p class="text-white text-center" style="font-size: 12px">${animal.getComentario}</p>
                    `
                })
                
                botonSonido.addEventListener("click", () => {
                    if (animal.getNombre === "Leon") {
                            animal.Rugir(sonidos);
                    } else if (animal.getNombre === "Lobo") {
                            animal.Aullar(sonidos)
                    } else if (animal.getNombre === "Aguila") {
                            animal.Chillar(sonidos)
                    } else if (animal.getNombre === "Serpiente") {
                            animal.Sisear(sonidos)
                    } else if (animal.getNombre === "Oso") {
                            animal.Gruñir(sonidos)
                    }
                })

                cardAnimal.appendChild(imagen);
                cardAnimal.appendChild(botonSonido);
                tarjetadiv.appendChild(cardAnimal);                 
            })
        }
        
        let nuevoAnimal;
        let imgCut = imagenAvatar.src.slice(33);
        const nombre = nombreAnimal.value;
        const edad = rangoAnos.value;
        const comentario = comentarios.value;
        const { sonido } = respuesta.find(animal => animal.name === nombre)
    
        if (nombreAnimal.value == "Leon") {
            nuevoAnimal = new Leon (nombre, edad, imgCut, comentario, sonido)
        }
        else if (nombreAnimal.value == "Lobo") {
            nuevoAnimal = new Lobo (nombre, edad, imgCut, comentario, sonido)
        }
        else if (nombreAnimal.value == "Oso") {
            nuevoAnimal = new Oso (nombre, edad, imgCut, comentario, sonido)
        }
        else if (nombreAnimal.value == "Serpiente") {
            nuevoAnimal = new Serpiente (nombre, edad, imgCut, comentario, sonido)
        }
        else if (nombreAnimal.value == "Aguila") {
            nuevoAnimal = new Aguila (nombre, edad, imgCut, comentario, sonido)
        }

        if ((nombreAnimal.value !=8) && (rangoAnos.value !=0) && comentarios.value) {
            tarjetaAnimal.push(nuevoAnimal); 
                nombreAnimal.selectedIndex = 0;
                rangoAnos.selectedIndex = 0;
                comentarios.value = "";
                previewElement.removeChild(imagenAvatar);
                vistaTarjetas();
        } 
            else {
               alert("Faltan datos por ingresar");
            }                                
    });       
});

