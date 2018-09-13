import React from 'react'
import './Modal.css'
import MarkDown from 'react-markdown'

export default class Modal extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="teste">
                <div className="modalDefinition" id="exampleModalLong" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">{this.props.title}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.onCloseModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <MarkDown source={this.props.definition} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.onCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}