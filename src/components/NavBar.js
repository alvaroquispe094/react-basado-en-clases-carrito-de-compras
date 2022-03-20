import { Component } from "react";
import Logo from './Logo'
import Carro from './Carro'

const styles = {
    navbar:{
        backgroundColor: '#FFF',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}

class NavBar extends Component{
    render(){
        const {carro, esCarroVisible, mostrarCarro, limpiarCarro} = this.props
        return(
            <nav style={styles.navbar}>
                <Logo/>
                <Carro carro={carro}
                       esCarroVisible = {esCarroVisible}
                       mostrarCarro = {mostrarCarro}
                       limpiarCarro = {limpiarCarro}
                />
            </nav>
        )
    }
}

export default NavBar