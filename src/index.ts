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

console.table(reproductor);