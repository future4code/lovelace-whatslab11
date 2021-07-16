import React from 'react'
import Mensagem from './mensagem'

export default class QuadroMensagem extends React.Component {

    render() {

        const arrayMsg = this.props.Mensagens

        return <div>
            {
            
            arrayMsg.map((texto, index) => {
                return <Mensagem key={index} usuario={texto.usuario} mensagem={texto.mensagem} />
            })

            }
        </div>

    }
}


