import React from 'react'

export default class Container extends React.Component {

    state = {
        inputUsuario: '',
        inputMensagem: '',

        mensagens: [

        ]



    }

    

    onChangeUsuario = (event) => {
        this.setState({inputUsuario: event.target.value})
    }

    onChangeMensagem = (event) => {
        this.setState({inputMensagem: event.target.value})
    }

    enviarMensagem = () => {
        this.state.mensagens.push({mensagem:this.state.inputMensagem, usuario:this.state.inputUsuario})
        console.log(this.state.mensagens)
    }

    render() {
        return (
            <div>
                <div className='quadroMensagens'>
                    teste
                </div>
                <div className='inputMensagens'>
                    <label></label>
                    <input type='text' name='Usuário' placeholder='Usuário' onChange={this.onChangeUsuario} />
                    <label></label>
                    <input type='text' name='Mensagem' placeholder='Mensagem' onChange={this.onChangeMensagem} />
                    <button onClick={this.enviarMensagem}>Enviar</button>
                </div>
            </div>
        )
    }
}

// array objeto
// cada indice array: objeto com .nome e .mensagem

// metodo push
