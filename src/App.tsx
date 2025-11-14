import React from 'react';
import './App.css';
import Listing from './components/Listing';
import { ListingItem } from './types';
import { processListingData } from './utils/dataUtils';

// Импортируем исходный JSON без изменений
import originalEtsyData from './data/etsy.json';

function App() {
  // Обрабатываем данные - фильтруем и приводим к нужному виду
  const items: ListingItem[] = processListingData(originalEtsyData);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Etsy Catalog</h1>
        <p className="items-count">Showing {items.length} items</p>
      </header>
      <main>
        <Listing items={items} />
      </main>
    </div>
  );
}

export default App;