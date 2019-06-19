import React from 'react'

class Tt extends React.Component{
    constructor(){
        super()
        this.state = {
            date: new Date().toLocaleTimeString()
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                date: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    render(){
        return (
            <div>
                12313213
                {this.state.date}
            </div>
        );
    }
}

export default Tt;