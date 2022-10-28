import React from "react";
class CartItem extends React.Component
{
    constructor()
    {
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:1,
            img:''
        }
        this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    increaseQuantity()
    {
        console.log('this', this.state);
    }
    render()
    {
        const{price,title,qty}=this.state;
        return(
           <div className="cart-item">
            <div className="left-block">
            <img style={styles.image}/>        
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#256'}}>Rs:{price}</div>
                <div style={{color:'#256'}}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    {/*buttons*/}
                    <img 
                      alt="increase" 
                      className="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                      onClick={this.increaseQuantity}
                    />
                    <img 
                      alt="decrease" 
                      className="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                    />
                    <img 
                      alt="delete" 
                      className="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                    />
                </div>
            </div>
           </div> 
        );
    }
}
const styles={
    image:{
       height:110,
       width:110,
       borderRadius:4,
       background:"#ccc" 
    }
}


export default CartItem;