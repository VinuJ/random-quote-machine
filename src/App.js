import { useState } from 'react';
import './App.scss';

function App() {
  const [quote, setQuote] = useState('The best revenge is massive success.')
  const [author, setAuthor] = useState('Frank Sinatra')

  const switchQuoteAndAuthor = () => {
    setQuote('I am the one don\'t weigh a ton')
    setAuthor('Vinu Jey')
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
