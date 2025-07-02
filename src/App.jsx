import React from "react";
import Header from "./Header.jsx";
import MainComponent from "./maincomponent.jsx";
import Footer from "./footer.jsx";
import WelcomeMessage from "./compoent/welcomemessage.jsx";
import JsxRules from "./jsxrules.jsx";
import Greeting from "./compoent/greeting.jsx";
import ProductInfo from "./compoent/productinfo.jsx";
import UserList from "./compoent/userlist.jsx";
import ProductList from "./compoent/productlist.jsx";
import Person from "./compoent/person.jsx";
import Product from "./compoent/product.jsx";
import Weather from "./compoent/Weather.jsx";
import UserStatus from "./compoent/userstatus.jsx";
import Greetings from "./compoent/greetings.jsx";
import StyleCard from "./compoent/StyleCard.jsx";
import ProfileCard from "./compoent/profileCard.jsx";
import IconComponent from "./compoent/facomponent.jsx";
import { useState } from "react";
import Counter from "./compoent/counter.jsx";
import TodoList from "./compoent/TodoLIst.jsx";
// import Profile from "./compoent/profile.jsx";
import ShoppingList from "./compoent/shopping.jsx";
import CopyInput from "./compoent/copyinput.jsx";
import Switch from "./compoent/switcher.jsx";
import Effect from "./compoent/use.jsx"
import Apifetch from "./compoent/apifetch.jsx";
import BasicEffect from "./compoent/basiceffect.jsx";
import CounterEffect from "./compoent/countereffect.jsx";
import { createContext } from "react";
import ComponentA from "./compoent/componenta.jsx";
import Fetchdata from "./compoent/fetchdataeffect.jsx";
import { useContext } from "react";
import UserContext from "./compoent/Usercontext.jsx";


const Cart = () => {


  const Items = ["Kurta", "Shirt", "Pant", "T-Shirt", "Jeans"];
  return (
      <div>
      
      <h1>Cart 🛒</h1>
      {Items.length > 0 && <h2>You have {Items.length} items in your Cart</h2>}
      <ul>
        <h4>Products</h4>

        {Items.map(item => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export const Data = createContext();
export const Data1 = createContext();
export const Data3 = createContext();

const App = () => {
     const name = "Vivek"; 
     const age = 25; 
     const naming = 38;
     

   const [movie, setMovie] = useState({
    title: "3 Idiots", 
    rating: 7.5,
  });
  const handleClickevent = () => {
    setMovie({...movie,  rating: 9.5});
  }
  const [movies2, setMovies2] = useState([
    {id: 1, title: "4 Idiots", rating: 7},
    {id: 2, title: "7 Idiots", rating: 8.5},
  ])
  
  const onClickChange = () => {
    setMovies2(movies2.map(m => m.id === 1 ? {...movies2, title: "3 Iditos"}: m));
  };

  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 2);
  const ValidPass = () => <h1>Valid Password</h1>
  const InvalidPass = () => <h1>Invalid Password</h1>
  const Password = ({isvalid}) =>{
     return isvalid ? < ValidPass />: <InvalidPass />;
  };

  return(
  
  <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
    <Data.Provider value={name} >
    <Data1.Provider value={age} >
        <ComponentA />
    </Data1.Provider>
    </Data.Provider>
    <Data3.Provider value={naming}> 
        <UserContext />
    </Data3.Provider>

    <CounterEffect />
    <h2>{count}</h2>
    <button onClick={increment}>+</button>
    <h1>{movie.title}</h1>
    <h1>{movie.rating}</h1>
    <button onClick={handleClickevent}>Rate me</button>
`    <section>{movies2.map(m => (
      <li key={Math.random()}>{m.title}</li>))}
      <button onClick={onClickChange}>Change movie</button>
    </section>
    <Fetchdata />
    <BasicEffect />
    <Apifetch />
    <Effect />
    <Switch />
    <CopyInput /> 
    <TodoList />
    <Counter />
    {/* <Profile />  */}
    <ShoppingList />
    <Header />
    <Weather Temperature={30} />
    <StyleCard /> 
    <ProfileCard />
    <IconComponent />
    <Greetings/>
    <Password isvalid={false}/>
    <WelcomeMessage />
    <UserStatus  IsLoggedIn={true} IsAdmin={false}/>
    <Cart />
    <Greeting />
    <UserList />
    <Person name="John" age= {29} />
    <Product name="Iphone" price = {30000} />
    <ProductList />
    <ProductInfo />
    <JsxRules />
    <MainComponent />
    <Footer />
  </div>
  );
};


export default App;