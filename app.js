const app = new Vue({
    el: '#app',
    data: {
        prueba: 0,
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
        kgs: 1000,
        lbs: 500,
        grs:1,
        calculoInventario: "",
        alerta:"",
        errors: false

    },
    methods: {
        
        agregar(){
            this.acumuladorValues()
           
            this.dataBodegas.push(
                {
                    bodega: this.defaultBodega ,
                    cantidad: this.cantidad,
                    tipo:this.defaultPeso,
                    convertKg: this.prueba
                }
            )
            this.limpiar()   
            
            console.log(this.dataBodegas);
            
        },
        acumuladorValues(){
            if(this.defaultBodega === 'Bodega1'){
                this.acumuladoBodega1 += this.conversionValues
            }else{
                this.acumuladoBodega2 += this.conversionValues
            }
        },
        limpiar(){
            this.defaultBodega= null,
            this.defaultPeso= null,
            this.cantidad = ""
        },
        conversionValues(data){
            if(data.tipo === 'gramos' ) {
                return  this.prueba = data.cantidad / 1000
            }
            if(data.tipo === 'libra') {
                return this.prueba =data.cantidad * .5
            }
            else {
                return this.prueba =data.cantidad
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