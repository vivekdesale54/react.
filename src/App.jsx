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

const App = () => {
  return(
  <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
    <Header />
    <WelcomeMessage />
    <Greeting />
    <UserList />
    <Person name={"John"} age={29} />
    <ProductList />
    <ProductInfo />
    <JsxRules />
    <MainComponent />
    <Footer />
  </div>
  );
};


export default App;