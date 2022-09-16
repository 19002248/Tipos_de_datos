//formula general

class FGeneral{
    private a:number= 7;
    private b:number= 12;
    private c:number= -30;
    private valorx1:number=0;
    private valorx2:number=0;
    private rinf:number=0;
    private rsup:number=0;

    public CalculoX(){
        this.operacionsuma();
        this.operacionresta();
    }
    private operacionsuma(){
   
        this.rinf= 2*this.a;
        this.rsup=((-this.b))+(Math.sqrt((this.b*this.b)-(4*(this.a*this.c))))
        this.valorx1 = this.rsup/this.rinf;
    }
    private operacionresta(){
   
        this.rinf= 2*this.a;
        this.rsup=((-this.b))-(Math.sqrt((this.b*this.b)-(4*(this.a*this.c))))
        this.valorx2 = this.rsup/this.rinf;
    }
    public imprimirx(){
        console.log(`el primer valor de X es ${this.valorx1} y el segundo valor es ${this.valorx2}`);
        console.log('El problema estaba en las cantidades, quedaban negativas y anulaban el resultado')
    }
}

let x1=new FGeneral();
x1.CalculoX();
x1.imprimirx();

/*
class FGeneral{
    private a:number= 1;
    private b:number= 20;
    private c:number= 3;
    private valorx:number=0;
    private rinf:number=0;
    private rsup:number=0;
    private raiz:number=0;
    private dentroraiz:number;

    public CalculoX(){
        this.operacion();
    }
    private operacion(){
        /*let rinf:number=0;
        let rsup:number=0;*/
        // AQUI SEPARÉ LAS OPERACIONES PARA CORROBORAR QUE DATOS PASABAN Y CUÁLES NO
 //     this.rinf= 2*this.a;
 //     this.dentroraiz=(this.b*this.b)-(4*(this.a*this.c)),
 //     this.raiz=Math.sqrt(this.dentroraiz),
 //     this.rsup=((-this.b))+this.raiz,/*+(Math.sqrt((this.b*this.b)-(4*(this.a*this.c))))*/
//      this.valorx = this.rsup/this.rinf; /*renglon sup entre renglon inf */
  /*  }
    public imprimirx(){
        console.log(`el valor de X es ${this.valorx}`);
    }
}
//DESCUBRÍ QUE MI ERROR ESTABA EN QUE LOS NUMEROS QUEDABAN COMO NEGATIVOS 
//Y SI QUEDAN NEGATIVOS AL SACAR RAIZ SE ANULA EL RESULTADO, POR LO TANTO 
//ME MOSTRABA 'NAN'
let x1=new FGeneral();
x1.CalculoX();
x1.imprimirx();
*/

