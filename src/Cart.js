import React from "react";
import CartItem from "./CartItem";
class Cart extends React.Component
{
    constructor()
    {
        super();
        this.state={
        products:[
            {
                price:999,
                title:'Phone',
                qty:1,
                img:'',
                id:1
            },
            {
                price:689,
                title:'Watch',
                qty:1,
                img:'',
                id:2
            },
            {
                price:555,
                title:'calculator',
                qty:1,
                img:'',
                id:3
            }
            ]
        }
       
    }
    handleIncreaseQuantity=(product)=>{
        console.log("please increase the quantity of",product);
        const{products}=this.state;
        const index=products.indexOf(product);
        products[index].qty+=1;
        this.setState({
            products:products  //setting the products array with the change made in products above
        })
    }
    handleDecreaseQuantity=(product)=>{
        console.log("please decrese the quantity of",product);
        const {products}=this.state;
        const index=products.indexOf(product);
        if(products[index].qty===0){
            return;
        }
        products[index].qty-=1;
        this.setState({
            products           //since key and value has same name it can be written like this also 
        })
    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;
        const items=products.filter((item)=>item.id!=id);

        this.setState({
            products:items
        })
    }
    render()
    {
        const {products}=this.state;
        return(
            <div className="cart">             
              {products.map((product)=>{
               return(
                <CartItem product={product} 
                 key={product.id}
                 onIncreaseQuantity={this.handleIncreaseQuantity}
                 onDecreaseQuantity={this.handleDecreaseQuantity}
                 onHandleDelete={this.handleDeleteProduct}
                 />
               ) 
              })}
            </div>
        );

    }
}  

export default Cart;