import { useState } from 'react'
import './App.css'
import quotes from"./db/quote.json"
import { getRandom } from './utils/random'
import QuoteBox from './Components/QuoteBox'

const listBg = ["bg1", "bg2", "bg3", "bg4"]

function App() {
    const [quote, setQuote] = useState(getRandom(quotes));
    const [currentBg, setCurrentBg] = useState(getRandom(listBg));

    const handleChangeQuote = () =>{
      setQuote(getRandom(quotes));
      setCurrentBg(getRandom(listBg))
    };
    return (
    <main className = {`App ${currentBg}`}>
      <QuoteBox handleChangeQuote={handleChangeQuote} quote={quote} />
    </main>
  );
}

export default App
