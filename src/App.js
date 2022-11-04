import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";


class App extends React.Component
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
                img:'https://images.unsplash.com/photo-1525598912003-663126343e1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                id:1
            },
            {
                price:689,
                title:'Watch',
                qty:1,
                img:'https://media.istockphoto.com/photos/wristwatch-picture-id1359180038?b=1&k=20&m=1359180038&s=170667a&w=0&h=DdYIpG4JNxkI4UZX_HR1GI8uUzLcUef1-JkvYgY5yG0=',
                id:2
            },
            {
                price:555,
                title:'calculator',
                qty:1,
                img:'https://media.istockphoto.com/photos/calculator-with-clipping-paths-picture-id1334791931?b=1&k=20&m=1334791931&s=170667a&w=0&h=_IAenRie4a2jK--khIUi1uFnzeHuGAf0B0kf7q-ruwU=',
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
        const items=products.filter((item)=>item.id!==id);

        this.setState({
            products:items
        })
    }
    getCartCount=()=>{
      const {products}=this.state;
      let count=0;
      products.forEach((product)=>{
        count+=product.qty;
      })
      return count;
    }
    totalPriceCount=()=>{
      const {products}=this.state;
      let cartTotal=0;
      products.map((product)=>{
        cartTotal+=(product.qty*product.price);
      })
      return cartTotal;
    }
  render(){
    const{products}=this.state;
    return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart
       products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onHandleDelete={this.handleDeleteProduct} />
       <div style={{padding:10,fontSize:20}}><b>TOTAL</b>:{this.totalPriceCount()}</div>
    </div>
      );
  }
}

export default App;
