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
            if(this.cantidad === "" || this.cantidad < 1 || this.defaultBodega === null  || this.defaultPeso === null)  {
                this.errors = true;
                // alert(this.errors)
            } else {
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
                this.mensaje();
            }
        },
        acumulador(){
          if(this.defaultBodega === 'Bodega1') {
                this.acumuladoBodega1 += this.conversionValues()
          } else{
                this.acumuladoBodega2 += this.conversionValues()//total kg
          }
        },
        limpiar(){
            this.defaultBodega= null,
            this.defaultPeso= null,
            this.cantidad = "",
            this.errors = false
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
        mensaje() {
            if(this.acumulado1() === 10000) {
                return this.alertA10();
            } else if(this.acumulado1() === 50000) {
                return this.alertA50();
            }else if(this.acumulado2() === 26000) {
                return this.alertB10();
            } else if(this.acumulado2() === 115000) {
                return this.alertB50();
            } else {
                console.log('Estamos en problemas')
            }
        },
        acumulado1() {
            return this.Bodega1 - this.acumuladoBodega1
        },
        acumulado2() {
            return this.Bodega2 - this.acumuladoBodega2
        },
        alertA10() {
            Swal.fire(
                'Precaución',
                'El inventario de la Bodega1 esta en un 10%',
                'warning'
              )
        },
        alertA50() {
            Swal.fire(
                'Cuidado',
                'El inventario de la Bodega1 esta en un 50%',
                'warning'
              )
        },
        alertB10() {
            Swal.fire(
                'Precaución',
                'El inventario de la Bodega2 esta en un 10%',
                'warning'
              )
        },
        alertB50() {
            Swal.fire(
                'Cuidado',
                'El inventario de la Bodega2 esta en un 50%',
                'warning'
              )
        },
        validacionesErrors() {
            if(this.cantidad === "" || this.cantidad < 1 || this.defaultBodega === null  || this.defaultPeso === null)  {
                this.errors = true;
            }
        }
    }
  })