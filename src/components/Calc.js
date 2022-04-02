import React from "react";

class Calc extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {current: 1,
        min: 0, max:10}
    }

    increment = () =>
    {
        if(this.state.current < this.state.max)
            this.setState({...this.state, current: this.state.current + 1})
    }

    decrement = () =>
    {
        if(this.state.current > this.state.min)
            this.setState({...this.state, current: this.state.current - 1})
    }

    render() {
        return (
            <block>
                <button onClick={this.decrement}>-</button>
                 {this.state.current}
                <button onClick={this.increment}>+</button>
            </block>
        );
    }
}

export default Calc;