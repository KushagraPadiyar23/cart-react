import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

class App extends React.Component
{
  constructor()
    {
        super();
        this.state={
        products:[],
        loading:true
        }   
        this.db=firebase.firestore();   
    }
    componentDidMount(){
      // firebase
      // .firestore()
      // .collection('products')
      // .get()
      // .then((snapshot)=>{
      //   // console.log(snapshot);

      //   // snapshot.docs.map((doc)=>{
      //   //   console.log(doc.data())        
      //   // });
        
      //   const products=snapshot.docs.map((doc)=>{
      //     const data= doc.data();
      //     data['id']=doc.id;
      //     return data;
      //   });
      //   this.setState({
      //     products,
      //     loading:false
      //   });
      // })
      //using sanpshot adds the listener to prodcuts collection in firebase...so whenever we update any info in database(firebase) it will automatically reflect without refreshing the page
      this.db
      .collection('products')
      .where('price','!=',500)
      //.where('title','==','mug')
      .orderBy('price')
      .onSnapshot((snapshot)=>{
        const products=snapshot.docs.map((doc)=>{
          const data= doc.data();
          data['id']=doc.id;
          return data;
        });
    
        this.setState({
          products,
          loading:false
        });
      })
    }
    handleIncreaseQuantity=(product)=>{
        //console.log("please increase the quantity of",product);
        const{products}=this.state;
        const index=products.indexOf(product);
        // products[index].qty+=1;
        // this.setState({
        //     products:products  //setting the products array with the change made in products above
        // })
        //below code will update the value directly  in firebase database
        const docRef=this.db.collection('products').doc(products[index].id);
        docRef
        .update({
          qty:products[index].qty+1
        })
        .then(()=>{
          console.log("updated successfully");
        })
        .catch((error)=>{
          console.log("error",error);
        })

    }
    handleDecreaseQuantity=(product)=>{
        //console.log("please decrese the quantity of",product);
        const {products}=this.state;
        const index=products.indexOf(product);
        // if(products[index].qty===0){
        //     return;
        // }
        // products[index].qty-=1;
        // this.setState({
        //     products           //since key and value has same name it can be written like this also 
        // })
         //below code will update the value directly  in firebase database
         const docRef=this.db.collection('products').doc(products[index].id)
         if(products[index].qty===0){
               return;
           }
         docRef
         .update({
          qty:products[index].qty-1
         })
         .then(()=>{
          console.log("product decreased successfully");
         })
         .catch((error)=>{
          console.log("error",error);
         })
    }
    handleDeleteProduct=(id)=>{
        const {products}=this.state;
        // const items=products.filter((item)=>item.id!==id);
        // this.setState({
        //     products:items          
        // })
        //below code will delete the value directly  in firebase database
        const docRef=this.db.collection('products').doc(id)
        docRef
        .delete('qty')
        .then(()=>{
          console.log("product deleted successfully");
         })
         .catch((error)=>{
          console.log("error",error);
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
        return cartTotal;
      })
      return cartTotal;
    }
    addProduct=()=>{
      this.db
      .collection('products')
      .add({
        qty:2,
        title:"Wachine Machine",
        price:20000,
        img:"data:image/jpeg;base64,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"
      })
      .then((referenceofaddedobject)=>{
        console.log("document added",referenceofaddedobject);
      })
      .catch((error)=>{
        console.log('Error:',error);
      })
    }
  render(){
    const{products,loading}=this.state;
    return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      {/* <button onClick={this.addProduct} style={{padding:10, fontSize:20}}>Add Product</button> */}
      <Cart
       products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity}
       onHandleDelete={this.handleDeleteProduct} />
       <div style={{padding:10,fontSize:20}}><b>TOTAL</b>:{this.totalPriceCount()}</div>
       {loading&&<h1>Loading Products...</h1>}
    </div>
      );
  }
}

export default App;
