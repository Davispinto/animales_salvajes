class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      let _nombre = nombre;
      let _edad = edad;
      let _img = img;
      let _comentarios = comentarios;
      let _sonido = sonido;
  
      this._getNombre = () => _nombre;
      this._getEdad = () => _edad;
      this._getImg = () => _img;
      this._getComentarios = () => _comentarios;
      this._getSonido = () => _sonido;
  
      this._setComentarios = (nuevo_comentario) => (_comentarios = nuevo_comentario);
    }
  
    get getNombre() {
      return this._getNombre();
    }
  
    get getEdad() {
      return this._getEdad();
    }
  
    get getImg() {
      return this._getImg();
    }
  
    get getComentario() {
      return this._getComentarios();
    }
  
    get getSonido() {
      return this._getSonido();
    }
  
    set setComentario(nuevo_comentario) {
      this._setComentarios(nuevo_comentario);
    }
  }  
  
  export default Animal