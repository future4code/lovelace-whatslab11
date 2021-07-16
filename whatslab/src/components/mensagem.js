import React from 'react'


export default class Mensagem extends React.Component {
    render() {
        return <div>
            <strong>
                {this.props.usuario}
            </strong>
            <p>
                {this.props.mensagem}
            </p>
        </div>
    }
}
