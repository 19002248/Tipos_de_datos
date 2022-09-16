// desestructuración de funciones

export interface Producto{
    desc:string;
    precio:number;
}

const telefono:Producto={
    desc:'Xiaomi',
    precio:789,
}
const tablet:Producto={
    desc:'iPad air',
    precio:17799,
}

//Para exportar lineas, antes se les debe agregar 'export', para usarlos en otro archivo
function calcularIVA(productos:Producto[]):number{
    let total=0;
    productos.forEach((producto)=>{
        total+=producto.precio;
    })
    return total+total*0.16;
}

const articulos1=[telefono,tablet];
const totIVA=calcularIVA(articulos1);
console.log('Total con IVA: ', totIVA);

export function calcularIVA1(productos:Producto[]):[number,number]{
    let total=0;
productos.forEach(({precio})=>{
    total+=precio;
})
return [total,total*0.16];
}
const articulos=[telefono,tablet];
const [total, iva]=calcularIVA1(articulos);
console.log('Total: ', total);
console.log('Total de IVA: ', iva);