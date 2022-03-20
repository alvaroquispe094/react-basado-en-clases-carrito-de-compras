import { Component } from "react";
import Button from './Button'

const styles = {
    producto:{
        backgroundColor: '#FFF',
        border: 'solid 1px #EEE',
        boxShadow: '0 5px 5px rgb(0,0,0,0.1)',
        width: '33%',
        // padding: '10px 15px',
        borderRadius: '5px',
        margin:'10px',
        paddingBottom: '15px',
        textAlign: 'center'
    },
    img: {
            width: '100%',
    },
    // centrar:{
    //     textAlign: 'center'
    // }
}

class Producto extends Component{
    render(){
        // console.log(this.props)
        const {producto, agregarAlCarro} = this.props
        return(
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img}/>
                <h3>{producto.name}</h3>
                <p>${producto.price}</p>
                <Button onClick={() => agregarAlCarro(producto)}>
                    agregar al carro
                </Button>
            </div>
        )
    }
}

export default Producto