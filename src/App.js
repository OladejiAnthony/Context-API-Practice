import React from "react";
import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
//import  { ThemeContextProvider } from "./components/context/ThemeContext";

function App() {
  
  return (
    // <ThemeContextProvider>
      <div className="main">
        <Header />
        <Hero />
        <Footer />
      </div>
    // </ThemeContextProvider>
  );
}

export default App;


//We saved the theme(light and dark state) to local-storage.
//Data Persistence

