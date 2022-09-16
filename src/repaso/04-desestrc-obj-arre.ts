//Des-estructuración de objetos y arreglos

interface Detalles{
    autor:string;
    fecha: number;
}

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

const reproductor: Reproductor={
    volumen: 90,
    segundo: 60,
    cancion:'Morena Mia',
    detalles:{
        autor:'Miguel Bose',
        fecha: 2002,
    }
}
const{cancion,volumen,segundo, detalles}=reproductor;
const{autor,fecha}=detalles;

console.log('Nombre de la cancion: '+ cancion);
console.log('Volumen actual: '+ volumen);
console.log('El segundo: '+ segundo);
console.log('Autor de la cancion: '+ autor);

const dbz:string[]=['Goku','Vegeta','Trunks','Mr. Satan'];

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);
console.log('Personaje 4: ', dbz[3]);

const[p1,p2,p3,p4]=dbz;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
console.log('Personaje 4: ', p4);