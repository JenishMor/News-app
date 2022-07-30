import React, { Component } from 'react'
import Loading from './Spinner.gif';

export default class Spinner extends Component {
    render() {
        return (
            <div className="text-center">
                {/* <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div> */}
                <img src={Loading} alt="Loading" />
            </div>
        )
    }
}
