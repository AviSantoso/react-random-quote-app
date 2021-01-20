import { createState, useState } from '@hookstate/core';

import allQuotes from './quotes.json';

interface Quote {
  text: string;
  author: string;
}

function getRandomItem(arr: unknown[]) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getRandomQuote() {
  return getRandomItem(allQuotes) as Quote;
}

const globalQuoteState = createState<Quote>(getRandomQuote());

export default function useQuoteStore() {
  const quoteState = useState(globalQuoteState);
  const quoteStore = {
    get quote() {
      return quoteState.get();
    },
    randomize: () => {
      globalQuoteState.set(() => getRandomQuote());
    },
  };
  return quoteStore;
}
