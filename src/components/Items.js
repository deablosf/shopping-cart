import React, { Component } from 'react'

class Items extends Component {
    constructor() {
        super()
        this.state = {
            items : [
            {
                item: "CPU",
                cost: 123,
                quantity: 0
            },
            {
                item: "Mother Board",
                cost: 123,
                quantity: 0
            },
            {
                item: "SDD",
                cost: 123,
                quantity: 0
            },
            {
                item: "RAM",
                cost: 123,
                quantity: 0
            }
            ]
        }

    }

    increase = (event) => {
        this.setState = ({
            quantity: this.state[0].quantity +1
        })
    } 

    render() {
        return(
            <div className="main">
                <div className="firstItem">
                 # 1 {this.state.items[0].item} Price {this.state.items[0].cost} Quantity {this.state.items[0].quantity}
                </div>

                <div className="secondItem">
                 # 2 {this.state.items[1].item} Price {this.state.items[1].cost} Quantity {this.state.items[1].quantity }
                </div>
                
            </div>
            
        
        )
    }
}

export default Items