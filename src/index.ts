interface utlAlumno{
    nombre:string,
    edad:number;
    direccion:{
        calle:string,
        pais:string,
        estado:string,
        numm:number,
    },
    //En ningún momento mandaba llamar la función, asi que la puse aquí, aunque de todas maneras no me funcionó :(
    mostrarDireccion:()=>void;
};

const pruebaAlumno:utlAlumno={
nombre:'Giselle S.C.',
edad:22,
  direccion:{
    calle:'Estocolmo',
    pais:'Mexico',
    estado:'Guanajuato',
    numm:509,
    },
    //Esa linea no ayuda de mucho, pero tampoco manda error :c
    mostrarDireccion:()=>pruebaAlumno.nombre+','+ pruebaAlumno.direccion.estado+','+pruebaAlumno.direccion.pais,
};

function mostrarDireccion(){

    //Estas lineas no mandan nada a la consola, pero tampoco mandan error 

    //return pruebaAlumno.nombre+','+ pruebaAlumno.direccion.estado+','+pruebaAlumno.direccion.pais;
    //return this.nombre+','+ this.direccion.estado+','+this.direccion.pais;
}

//la linea 35 si muestra los datos solicitados en la consola :)
console.log(pruebaAlumno.nombre+','+ pruebaAlumno.direccion.estado+','+pruebaAlumno.direccion.pais);