import Animal from "./Animal.js"

class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido) 
    }
        Rugir(player){
        player.src = `./assets/sounds/${this.getSonido}`
        player.load();
        player.play();
        }
}

class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido) 
    }
        Aullar(){
        player.src = `./assets/sounds/${this.getSonido}`
        player.load();
        player.play();
        }
}

class Oso extends Animal {

    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido) 
    }
        Gruñir(){
        player.src = `./assets/sounds/${this.getSonido}`
        player.load();
        player.play();
        }
}

class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {    
    super(nombre, edad, img, comentarios, sonido) 
    }
        Sisear(){
        player.src = `./assets/sounds/${this.getSonido}`
        player.load();
        player.play();
    }
}

class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido) 
    }
        Chillar(){
        player.src = `./assets/sounds/${this.getSonido}`
        player.load();
        player.play();
        }
}

export { Leon, Lobo, Oso, Serpiente, Aguila }