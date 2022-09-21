class table{
    private numero:number;
    public tem:number;

    setNumero(a:number){
        this.numero=a;
    }

    getNumero():number{
        return this.numero;
    }
    calcular():void{
        for(let i=1; i<11; ++i){
            console.log(`${this.numero} x ${i} = ${i*this.numero}`);
        }
    }
}

let table1=new table();
table1.setNumero(7);
console.log('Variable Privada: ' + table1.getNumero());

table1.tem=6;
console.log('Variable publica: '+table1.tem);
table1.calcular();