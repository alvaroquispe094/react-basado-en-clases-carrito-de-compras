import { Component } from "react";

const styles={
    button:{
        backgroundColor: '#0A283E', 
        color: '#FFF',
        padding: '15px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textAlign: 'center'
    }
}

class Button extends Component{
    render(){
        return(
            <button style={styles.button} {...this.props}/>
        )
    }
}

export default Button