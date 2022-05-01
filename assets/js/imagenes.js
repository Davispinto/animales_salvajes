import Animales from "./consulta.js";
 
 const pj = document.querySelector("#animal")
 const previewElement= document.querySelector("#preview")
 console.log(pj)
    pj.addEventListener('change',async () => {
        const {animales} = await Animales.getData();
        console.log(animales)
        
     let eleccion = pj.value
        const imagenesPjTemplate = animales.find((p) => p.name == eleccion)
        const imagen = document.createElement("img");
         imagen.id="imagenAvatar"
         imagen.src = `./assets/imgs/${imagenesPjTemplate.imagen}`;
         imagen.className = "w-100 h-100 mx-auto"
         previewElement.setAttribute("src",imagen)
         previewElement.innerHTML = ""
         previewElement.appendChild(imagen) 
    })