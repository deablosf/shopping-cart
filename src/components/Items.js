import React, { Component } from 'react'

class Items extends Component {
    constructor() {
        super()
        this.state = {
            items : [
            {
                item: "CPU",
                quantity: 0,
                cost: 1299.99
            },
            {
                item: "Mother Board",
                quantity: 0,
                cost: 149.99
            },
            {
                item: "SDD",
                quantity: 0,
                cost: 129.99
            },
            {
                item: "RAM",
                quantity: 0,
                cost: 89.99
            }
            ],
            cartSubTotal: 0,
            tax: 0.0875,
            total: 0
        }

    }

    increase = (x) => {
        this.setState ({
           quantity: this.state.items[x].quantity++
        })   
    } 

    decrease = (x) => {
        this.setState ({
           quantity: this.state.items[x].quantity--
        }) 
    }      
    

    render() {
        let CPU = this.state.items[0];
        let MotherBoard = this.state.items[1];
        let SSD = this.state.items[2];
        let RAM = this.state.items[3]
        let itemSubtotal = CPU.quantity + MotherBoard.quantity + SSD.quantity + RAM.quantity
        let itemCostSubtotal = (CPU.quantity * CPU.cost) + (MotherBoard.quantity * MotherBoard.cost) + (SSD.quantity * SSD.cost) + (RAM.quantity * RAM.cost)
        let tax = this.state.tax * itemCostSubtotal;
        let finalTotal = (itemCostSubtotal + tax).toFixed(2); 
        return(
            <div className="main">
                <div className="itemlist">
                    <div id="itemOne" className="slot">
                        <img className="images" src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/617456_058537_02_package_zoom.jpg"/>
                    # 1 {CPU.item}  
                    Price ${CPU.cost} Quantity
                    <button onClick={()=> this.decrease(0)}>-</button>
                     {CPU.quantity}
                    <button onClick={()=> this.increase(0)}>+</button>
                    </div>

                    <div id="itemTwo" className="slot">
                        <img className="images" src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/624551_127449_01_front_thumbnail.jpg" />
                    # 2 {MotherBoard.item} 
                    Price ${MotherBoard.cost} Quantity
                    <button onClick={()=> this.decrease(1)}>-</button>
                     {MotherBoard.quantity }
                    <button onClick={()=> this.increase(1)}>+</button>
                    </div>

                    <div id="itemThree" className="slot">
                        <img className="images" src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/600422_860312_01_front_thumbnail.jpg"/>
                    # 3 {SSD.item} 
                    Price ${SSD.cost} Quantity
                    <button onClick={()=> this.decrease(2)}>-</button>
                     {SSD.quantity }
                    <button onClick={()=> this.increase(2)}>+</button>
                    </div>
                    
                    <div id="itemFour" className="slot">
                    <img className="images" src="https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/611303_984534_01_front_thumbnail.jpg"/>
                    # 4 {RAM.item} 
                    Price ${RAM.cost} Quantity
                    <button onClick={()=> this.decrease(3)}>-</button>
                     {RAM.quantity }
                    <button onClick={()=> this.increase(3)}>+</button>
                    </div>
                </div>

                <div className="summary">
                    <div><p>Subtotal: ({itemSubtotal} items) ${itemCostSubtotal.toFixed(2)}</p></div>
                    <div><p>Delivery: <span>Free</span></p></div>
                    <div><p>Estimated tax : ${tax.toFixed(2)}</p></div>
                    <div>TOTAL ${finalTotal}</div>
                    <button type="submit">Check Out</button>
                </div>
            
            </div>   
        
        )
    }
}

export default Items