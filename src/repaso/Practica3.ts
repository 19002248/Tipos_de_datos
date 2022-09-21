class multi{
    private num:number=0;
    private num2:number=0;
    private tem:string="";
    public mult:number=0;

    setNumero1(n:number){
        this.num=n;
    }
    setNumero2(b:number){
        this.num2=b;
    }
    obtener():number{
        return this.num;
    } 
    obtener2():number{
    return this.num2;
    }
    public calcular():[number,string]{
        for(let i=0; i<this.num2; i++){
           this.tem += this.num+" + ";
           this.mult+=this.num;
        } 
        return[this.mult,this.tem];
    }
}

let numera1=new multi();
numera1.setNumero1(7);
numera1.setNumero2(5);
console.log(`la multiplicación de: ${numera1.obtener()}   por ${numera1.obtener2() }  es de: `);
const[a,b]=numera1.calcular();
console.log(b);
console.log(a);