import React from 'react'
import Mensagem from './mensagem'
import QuadroMensagem from './quadroMensagens'


export default class Container extends React.Component {

    state = {
        inputUsuario: '',
        inputMensagem: '',

        mensagens: [{
           
        }

        ]
    }

    onChangeUsuario = (event) => {
        this.setState({ inputUsuario: event.target.value })
    }

    onChangeMensagem = (event) => {
        this.setState({ inputMensagem: event.target.value })
    }

    enviarMensagem = () => {
        const novaListaMensagens = this.state.mensagens
        const novaMensagem = { mensagem: this.state.inputMensagem, usuario: this.state.inputUsuario }

        novaListaMensagens.push(novaMensagem)

        this.setState({mensagens: novaListaMensagens})

        this.setState({inputUsuario: "", inputMensagem: ""})

    }

    render() {
        return (
            <div>
                <div className='quadroMensagens'>
                    
                    <QuadroMensagem Mensagens = {this.state.mensagens}/>

                </div>
                <div className='inputMensagens'>
                    <label></label>
                    <input value={this.state.inputUsuario} type='text' name='Usuário' placeholder='Usuário' onChange={this.onChangeUsuario} />
                    <label></label>
                    <input value={this.state.inputMensagem} type='text' name='Mensagem' placeholder='Mensagem' onChange={this.onChangeMensagem} />
                    <button onClick={this.enviarMensagem}>Enviar</button>
                </div>
            </div>
        )
    }
}




