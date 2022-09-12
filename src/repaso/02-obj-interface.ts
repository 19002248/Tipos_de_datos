//'todos' los archivos differentes dentro del folder de trabajo los convierte en uno mismo, 
//no podemos usar dos variables iguales en archivos diferentes
let amaterno1:string|number;
amaterno1='Cano';
amaterno1=100;

let mascotas=['perro','gato',100,true];
let tem2:(boolean|number|string)[]=['rata',100];

tem2.push(200);

let acciones:string[]=['dormir','comer','volar'];

//Objetos 

//Interfaz: tipo de dato que nos va a definir una plantilla
//a partir de la cual nosotros vamos a implementar las propiedades, y tipado 
// de datos específico, para después definir un objeto basado en la interfaz.

interface Alumno{
    matricula:string|number,
    nombre:string,
    apaterno:string,
    email:string,
    acciones2?:string[];
}
//para utilizar la interfaz, se indica como si fuera un tipo de dato.
const alumno:Alumno={
    matricula:19002248,
    nombre:'Giselle',
    apaterno:'Sanchez',
    acciones2:[],
    email:'l.gis.cas@gmail.com',
}
//cuando se hace la definición de datos en base a una interfaz, los campos deben ser los
//mismos que pusimos en la interfaz. Ahora los nombres de las
//variables van acompañados por ':' 

alumno.nombre='Lucía';
console.table(alumno);
//nmp start para iniciar el servidor y poder ven en el navegador nuestro proyecto.