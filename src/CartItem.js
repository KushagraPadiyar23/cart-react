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
        //this.decreaseQuantity=this.decreaseQuantity.bind(this);
        this.testing();
    }
      testing()
     {
       const promise=new Promise((resolve,reject)=>{
         setTimeout(()=>{
          resolve('done');
        },5000);
       })
       promise.then(()=>{
         this.setState({qty:100},()=>{
          console.log(this.state);
        });
        //  this.setState({qty:this.state.qty+10});
        // this.setState({qty:this.state.qty+20});
        //  this.setState({qty:this.state.qty+30});
         console.log("state",this.state);
       });
      } 
    increaseQuantity()
    {
      //setState form 1 
     /* this.setState({
        qty:this.state.qty+1
      });*/
     
      //setState form2-using callback
      this.setState((prevState)=>{
        return{
            qty:prevState.qty+1
        }
      },()=>{
        console.log(this.state);
      });
      this.setState((prevState)=>{
        return{
            qty:prevState.qty+1
        }
      },()=>{
        console.log(this.state);
      });
     
    }
    //arrow functions can also be used,then we dont need to bind it in constructor
    decreaseQuantity=()=>
    {
      const {qty}=this.state
      if(qty===0)
      {
        return;
      }
        this.setState((prevState)=>{
            return{
                qty:prevState.qty-1
            }
        });
    }
    render()
    {
        console.log('render');
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
                      onClick={this.decreaseQuantity}
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