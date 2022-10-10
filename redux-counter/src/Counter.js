import React from 'react'
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";


class Counter extends React.Component {
    state = { count: 0 }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT'})
    }

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT'})
    }
    render () {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <span className="mx-2 p-1 border border-3">{this.props.count}</span>
                    <button onClick={this.decrement} className="mx-2">-</button>
                    <button onClick={this.increment} className="mx-2">+</button>
                </div>
            </div>
        )
    }
}

// Add the mapStateToProps function:
function mapStateToProps(state) {
    return {
        count: state.count
    };
}


//export default Counter;

export default connect(mapStateToProps)(Counter);