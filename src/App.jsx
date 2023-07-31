import { useState } from 'react'
import './App.css'
import quotes from"./db/quote.json"
import { getRandom } from './utils/random'
import QuoteBox from './Components/QuoteBox'

const listBg = ["bg1", "bg2", "bg3", "bg4"]
// const listImage = ["/images/image1.png","/images/image2.png","/images/image3.png","/images/image4.png"]
const listImage = ["image1.png","image2.png","image3.png","image4.png"]

function App() {
    const [quote, setQuote] = useState(getRandom(quotes));
    const [currentBg, setCurrentBg] = useState(getRandom(listBg));
    const [images, setImages] = useState(getRandom(listImage));
    const handleChangeQuote = () =>{
      setQuote(getRandom(quotes));
      setCurrentBg(getRandom(listBg));
      setImages(getRandom(listImage))
    };
    return (
    <main className = {`App ${currentBg}`}>
      <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote} images={images}/>
    </main>
  );
}

export default App
