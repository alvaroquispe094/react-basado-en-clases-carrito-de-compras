import { Component } from 'react';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import NavBar from './components/NavBar'

class App extends Component{
  state = {

    productos:[
      {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg'},
      {name: 'Arbejas', price: 2500, img: '/productos/arbejas.jpg'},
      {name: 'Lechuga', price: 500, img: '/productos/lechuga.jpg'}
    ],
    carro:[
      // {name: 'Tomate', price: 1500, img: '/productos/tomate.jpg', catidad: 1},
    ],
    esCarroVisible:false
  }

  agregarAlCarro = (producto) => {
    // console.log(producto)
    const {carro} = this.state

    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
      ?({
        ...x,
        cantidad: x.cantidad + 1
      })
      :x)
      return this.setState({carro: newCarro})
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad:1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  limpiarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.state.carro = []
    this.setState({esCarroVisible: false})
    // this.mostrarCarro();
  }

  render(){
    console.log(this.state.carro)
    const {esCarroVisible} = this.state
    return(
      <div>
        <NavBar carro={this.state.carro}
                esCarroVisible = {esCarroVisible}
                mostrarCarro = {this.mostrarCarro} 
                limpiarCarro = {this.limpiarCarro}
        />
        <Layout>
          <Title/>
          <Productos agregarAlCarro={()=>this.agregarAlCarro}  //averiguar porque aqui hay que agregar fat arrow y en la anterior no, si ambas son funciones iguales

                     productos={this.state.productos} 
          />
        </Layout>
      </div>
    )
  }
}


export default App;
