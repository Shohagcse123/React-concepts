import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  var fnames=[{names:"Fordi",Dist:"Tangail"},{names:"Fihad", Dist:"Dhaka"}];
 const names=['shohag','sagor']
 const allname=names.map(name=>name);
 console.log(allname);
 const products=[{name:'photoshop',price:'45$'},{name:'camera',price:'560$'}];
 const productname= products.map(product=>product);
console.log(productname);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          I am a React person;
        </p>
        <ul>
  {
   
      names.map(name1=><li>{name1}</li>)
      
  }
 

</ul>
{
  fnames.map(fnm=> <Friend fnm={fnm}></Friend>)
}
  
        {/* <Product product={products[0]} ></Product>
        <Product product={products[1]} ></Product> */
        products.map(product=><Product product={product}></Product>)
        }
        {/* <Person name={names[0]} age='24'> </Person>
        <Person name={names[1]}age='35'> </Person>
        <Person name={names[2]}age='27'> </Person> */
        names.map=(na=> <Person na={na}> </Person>)
        }
        <Count> </Count>
        <User></User>
      </header>
    </div>
  );
}
function Count ()
{
  const [count,setCount]=useState(10);
  
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
    </div>
  )
  
}
function User()
{
  const[user,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  })
  return(
    <div>
      <h2>Dynamic User:{user.length}</h2>
      <ul>
      {
        user.map(u=><li>{u.name}</li>)
      }
      </ul>
    
    </div>
  )
}
function Friend(props){
  const style={
    border:'3px solid gray',
    borderRadius:'5px',
    margin:'10px',height:'200px',width:'200px'

   }
  var {names,Dist}= props.fnm;
  return(
    <div style={style}>
      <h3>Name:{names}</h3>
      <h4>Dist:{Dist}</h4>
    </div>
  )
}



 function Product(props){
  const style={
    border:'3px solid gray',
    borderRadius:'5px',
    margin:'10px',height:'200px',width:'200px'

   }
  const  {name,price}=props.product;
  return (
  <div style={style}>
   <h1>{name}</h1>
   <h2>{price}</h2>
   <button>Buy Now</button>
  </div>
  )
 }
function Person (props){
  return (
    <div style={{border:'2px solid blue',margin:'10px'}}>
    <h2>Name:{}</h2>
    
    <h4>Country:Bangladesh</h4>
      </div>
  )
 
  
  
}


export default App;
