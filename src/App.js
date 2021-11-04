import { useEffect, useState } from 'react';
import './App.scss';

function App() {
  const quotesURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

  const [quote, setQuote] = useState('The best revenge is massive success.')
  const [author, setAuthor] = useState('Frank Sinatra')
  const [randomNumber, setRandomNumber] = useState('0')
  const [quotesArray, setQuotesArray] = useState(null)

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(quotesArray)
  }

  useEffect(() => {
    fetchQuotes(quotesURL)
  }, [quotesURL])

  const generateRandomNumber = () => {
    let randomInteger = Math.floor(Math.random()*quotesArray.length)
    setRandomNumber(randomInteger)
  }

  const switchQuoteAndAuthor = () => {
    generateRandomNumber()
    setQuote(quotesArray[randomNumber].quote)
    setAuthor(quotesArray[randomNumber].author)
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          "{quote}"
        </p>
        <p>- {author}</p>
        <button onClick={switchQuoteAndAuthor}>Change quote</button>
      </header>
    </div>
  );
}


export default App;
