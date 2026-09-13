import './App.css'
import Nav from "./components/nav";
import Hero from './components/hero';
import Cards from './components/card/cards';
import { Suspense } from 'react';
import type { Icard } from './types/cardtype';
import Footer from './components/footer';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const cardsFetch = async (): Promise<Icard[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data
}

function App() {
  // console.log(cardsPromise);
  const cardsPromise = cardsFetch();

  return (
    <>
      <Nav />
      <Hero />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Cards cardsPromise={cardsPromise} />
      </Suspense>
      <Footer />
      <ToastContainer />


    </>
  )
}

export default App
