import React from "react";
import User from "./components/User";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import ThemeProvider from "./context/ThemeContext";
import ProductsList from "./components/Productslist";
const App = () => {
  return (
    <>
      <ThemeProvider>
        <User name={"Gouri"} email={"gouri@gmail.com"} />
        <Wrapper>Something</Wrapper>
        <Counter />
        <ProductsList />
      </ThemeProvider>
    </>
  );
};

export default App;
