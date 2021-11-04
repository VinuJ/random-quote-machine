import { useEffect, useState } from 'react';
import './App.scss';
import COLOURS from './coloursArray';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {
  const quotesURL = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

  const [quote, setQuote] = useState('The best revenge is massive success.')
  const [author, setAuthor] = useState('Frank Sinatra')
  const [randomNumber, setRandomNumber] = useState('0')
  const [quotesArray, setQuotesArray] = useState(null)
  const [accentColour, setAccentColour] = useState('#F39C12')

  const fetchQuotes = async (url) => {
    const response = await fetch(url)
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
    console.log(quotesArray)
  }

  useEffect(() => {
    fetchQuotes(quotesURL)
  }, [quotesURL])

  const switchQuote = () => {
    let randomInteger = Math.floor(Math.random()*quotesArray.length)
    let randomColourIndex = Math.floor(Math.random()*COLOURS.length)
    setRandomNumber(randomInteger)
    setAccentColour(COLOURS[randomColourIndex])
    setQuote(quotesArray[randomNumber].quote)
    setAuthor(quotesArray[randomNumber].author)
  }

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColour, color: accentColour}}>
        <div id='quote-box'>
          <p id='text'>"{quote}"</p>
          <p id='author'>- {author}</p>
          <div className='buttons'>
            <a id='tweet-quote' style={{backgroundColor: accentColour}} target='_blank' href=
            {encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} -${author}`)+`&hashtags=quotes`}
            ><FontAwesomeIcon id='twitter-icon' icon={faTwitter}></FontAwesomeIcon></a>
            <button id='new-quote' style={{backgroundColor: accentColour}} onClick={switchQuote}>New quote</button>
          </div>
        </div>
      </header>
    </div>
  );
}


export default App;
