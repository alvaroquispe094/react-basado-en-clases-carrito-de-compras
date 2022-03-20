import { Component } from "react";
import BubleAlert from './BubleAlert'
import DetallesCarro from './DetallesCarro'

const styles ={
    carro:{
        backgroundColor: '#359A2C',
        color: '#FFF',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    limpiarCarro:{
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '15px',
        marginRight: '10px',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    buble:{
        position: 'relative',
        left: '12px',
        top: '20px'
    }
}

class Carro extends Component{
    render(){
        const {carro, esCarroVisible, mostrarCarro, limpiarCarro} = this.props
        const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>

                <button onClick={limpiarCarro} style={styles.limpiarCarro}>
                    Clean
                </button>
                
                <span style={styles.buble}>
                    {cantidad!==0 ? <BubleAlert value={cantidad}/>: null}
                </span>
                <button onClick={mostrarCarro} style={styles.carro}>
                    Carro
                </button>
                {esCarroVisible
                    ?<DetallesCarro carro={carro}/>
                    :null
                }
            </div>
        )
    }
}

export default Carro