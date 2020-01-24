import React, { Component } from 'react'

export default class chart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }
    componentDidMount() {
        fetch('https://www.eyemotion.me/chart/export.json')
        .then( response => response.json())
        .then( data => this.setState({data}))

        console.log("Json Data: " + this.data)
    }


    render() {
        return (
            <div>
                <h1>Chart Data</h1>
            </div>
        )
    }
}
