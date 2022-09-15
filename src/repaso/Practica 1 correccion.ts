interface direccion1{
        calle1:string,
        pais1:string,
        estado1:string,
        numm1:number,
    };
interface utlAlumno1{
    nombre1:string,
    edad1:number;
    direccion2:direccion1;
    mostrarDireccion1:()=>string;
};

const pruebaAlumno1:utlAlumno1={
nombre1:'Giselle S.C.',
edad1:22,
  direccion2:{
    calle1:'Estocolmo',
    pais1:'Mexico',
    estado1:'Guanajuato',
    numm1:509,
    },
    mostrarDireccion1(){
        return this.nombre1+','+ this.direccion2.estado1+','+this.direccion2.pais1;
    }
};

const dirreccion=pruebaAlumno1.mostrarDireccion1();
console.log(dirreccion);