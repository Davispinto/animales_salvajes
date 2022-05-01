let animales = (() => {
    // funcion privado no se puede acceder
        const url = "http://localhost:5500/animales.json";
        const getData = async () =>{
            const respuesta = await fetch(url);
            const data = await respuesta.json();
            console.log(data);
            return data;
        }    
        
        return {getData};        
    })();
    
    export default animales;