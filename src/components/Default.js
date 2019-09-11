import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-10 pt-5 mx-auto text-title text-center text-uppercase">
                        <h1 className="display-3">404</h1>
                        <h1>error</h1>
                        <h2>page not fund</h2>
                        <h3>the request url</h3>
                        <span className="text-danger">{this.props.location.pathname}{""}was not found</span>
                    </div>
                </div>
            </div>
        )
    }
}
