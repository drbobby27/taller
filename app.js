const app = new Vue({
    el: '#app',
    data: {

        Bodega1: 100000,
        Bodega2: 230000,
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
        totalVentas: "",
        errors: false

    },
    methods: {
        getIndex(evt) {
            this.index = evt.target.selectedIndex;
            
          },
        agregar(){
            this.dataBodegas.push(
                {
                    bodega: this.defaultBodega ,
                    cantidad: this.cantidad,
                    tipo:this.defaultPeso

                }
            )
        },
        conversion(data){
            if(data.bodega === 'gramos') {
                return data
            }
            if(data.bodega === 'libra') {
                return data.tipo * .5
            }
              
            else {
                console.log('Ready');
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