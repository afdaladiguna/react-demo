import { useEffect } from 'react';
import { useState } from 'react';

const RANDOM_QUOTES_URL =
  'https://inspo-quotes-api.herokuapp.com/quotes/random';

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    const response = await fetch(RANDOM_QUOTES_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <button onClick={fetchQuote}>Get Quotes</button>
      <h1>{quote.text}</h1>
      <h2>{quote.author}</h2>
    </div>
  );
}
