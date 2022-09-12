//Manejo de funciones

function apodos():void{
    console.log('apodo');
}
//función: fragmento de código que hace una tarea específica
//console.log(apodos());

function sumar(num1:number,num2:number):number{
    return num1+num2;
}
console.log(sumar(4,5));

function restar(num1:number,num2:number,num3?:number):number{
    if(num3){
        return num1-num2-num3;
    } 
    else{
        return num1-num2;
    }
}
console.log(restar(4,5,2));

function restar2(num1:number,num2:number,num3:number=0):number{
        return num1-num2-num3;
}
//en la función al principio definimo el valor que se le dará al 3er numero
//de modo que al ingresar solo 2 valores, se toma en cuenta el tercero.f
console.log(restar2(4,5));


/*function sumarflecha (a:number,b:number):number=>{
    return a+b;
}*/

interface escuelaAlumno{
    nombre:string,
    email?:string,
    edad:number;
    saludar:()=>void
}

function alumnoUTL(alumno:escuelaAlumno,calificar:number):void{
    alumno.nombre='Mario',
    alumno.email='mario@gmail.com',
    alumno.edad=calificar;
}

const nuevoAlumno:escuelaAlumno={
    nombre:'Gabriel',
    edad:24,
    saludar(){
        console.log('Hola compañero!!!!');
    }
}