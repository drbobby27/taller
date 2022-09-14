const app = new Vue({
    el: '#app',
    data: {
        Bodega1: 100000,
        Bodega2: 230000,
        acumuladoBodega1: 0,
        acumuladoBodega2: 0,
        pesoEnKgs: 0,
        OpcionesBodega: ['Bodega1', 'Bodega2'],
        OpcionesPeso: ['kilo', 'libra', 'gramos'],
        dataBodegas: [],
        defaultBodega: null,
        defaultPeso: null,
        cantidad: "",
        calculoInventario: "",
        alerta:"",
        errors: false

    },
    methods: {
        
        agregar(){
            
            this.dataBodegas.push(
                {
                    bodega: this.defaultBodega ,
                    cantidad: this.cantidad,
                    tipo:this.defaultPeso,
                    conversion: this.conversionValues()
                }
            )
            this.acumulador()
            
            console.log(this.dataBodegas)
            console.log(`[conversion]: ${this.conversionValues()}`)

            this.limpiar()   
           
        },
        acumulador(){
          if(this.defaultBodega === 'Bodega1') {
                this.acumuladoBodega1 += this.conversionValues()
          } else{
                this.acumuladoBodega2 += this.conversionValues()
          }
        },        
        limpiar(){
            this.defaultBodega= null,
            this.defaultPeso= null,
            this.cantidad = ""
        },
        conversionValues(){
            if(this.defaultPeso === 'gramos' ) {
                return  this.cantidad / 1000
            }
            if(this.defaultPeso === 'libra') {
                return  this.cantidad * .5
            }
            else {
                return this.cantidad
            }
              
               
        } ,
        alert1() {
            Swal.fire(
                'Cuidado',
                'Tu inventario esta en un 10%',
                'warning'
              )
        }
    }    
  })