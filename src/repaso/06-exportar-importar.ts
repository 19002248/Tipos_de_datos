import {calcularIVA1, Producto} from './05-desestructura-funciones'

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio: 1345
    },
    {
        desc:'Telefono2',
        precio: 1344
    }
];
const [total, iva ]=calcularIVA1(carrito);
console.log('Total: ', total);
console.log('Total de IVA: ', iva);