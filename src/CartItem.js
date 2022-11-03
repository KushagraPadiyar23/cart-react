import React from "react";
class CartItem extends React.Component
{
  
 
      
    render()
    {
        console.log('this.props=',this.props);
        const{price,title,qty}=this.props.product;
        const{onIncreaseQuantity,onDecreaseQuantity,product,onHandleDelete}=this.props;
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
                      onClick={()=>onIncreaseQuantity(product)}
                    />
                    <img 
                      alt="decrease" 
                      className="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" 
                      onClick={()=>onDecreaseQuantity(product)}
                    />
                    <img 
                      alt="delete" 
                      className="action-icons" 
                      src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                      onClick={()=>onHandleDelete(product.id)}
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