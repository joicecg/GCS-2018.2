import React from 'react'
import './CardVerbete.css'
import ReadJsonService from '../../service/ReadJsonService'
import Modal from '../modal/Modal'

export default class CardVerbete extends React.Component {
    constructor() {
        super()
        this.state = this.getInitialState()
        this.onCloseModal = this.onCloseModal.bind(this)
    }

    getInitialState() {
        return {
            verbetes: ReadJsonService.readJsonToMap(),
            modal: false,
            title: '',
            definition: ''
        }
    }

    render() {
        return (
            <div className="container">
                
                <div className="cards">
                    {this.renderCards()}
                    {this.state.modal ? <Modal title={this.state.title} definition={this.state.definition} onCloseModal={this.onCloseModal} /> :
                    undefined}
                </div>
               
            </div>
        )
    }

    renderCards() {
        let keys = ReadJsonService.readJsonGetKeys()
        return keys.map((option, key) => {
            return <div className="card" value={option} onClick={() => this.onClickOpenDefinition(option)}>{option}</div>
        })
    }

    onClickOpenDefinition(value) {
        console.log("herte")
        let definitions = this.getDefinitions(value)
        this.setState({
            modal: true,
            title: value,
            definition: definitions
        })
    }

    onCloseModal() {
        this.setState({
            modal: false,
            title: '',
            definition: ''
        })
    }

    getDefinitions(key) {
        return this.state.verbetes.get(key)
    }
}