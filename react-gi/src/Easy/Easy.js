import React, { Component } from 'react'

export default class Easy extends Component {
    constructor(props) {
        super();
        this.state = {
            person: {},
        }
    }
    render() {
    return (
        <div>
            <div>
                <h1>Sergio Quintero</h1>
                    <p>yuyiq@gmail.com</p>
                    <p>June 8, 1997</p>
                    <p>Charlotte, NC</p>
            </div>
        </div>
    )
    }
}
