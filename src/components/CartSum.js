import React, { Component } from 'react'
import Items from './Items'

class CartSum extends Component {
    constructor(){
        super()
        this.state = {
            tax : 0.0875,
            cartTotal : 0

        }
    }
    


    render() {
        return (
            <div>
                <h3>Item 1</h3> <p></p>
                {/* <button onClick = {}> + </button> */}
            </div>
        )
    }
}


export default CartSum