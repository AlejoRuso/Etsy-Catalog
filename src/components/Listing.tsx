import React from 'react';
import { ListingProps } from '../types';

const Listing: React.FC<ListingProps> = ({ items = [] }) => {
  // Функция для форматирования заголовка
  const formatTitle = (title: string): string => {
    const cleanTitle = title.trim();
    if (cleanTitle.length > 50) {
      return cleanTitle.substring(0, 50) + '…';
    }
    return cleanTitle;
  };

  // Функция для форматирования цены
  const formatPrice = (price: string, currencyCode: string): string => {
    try {
      const numericPrice = parseFloat(price);
      if (isNaN(numericPrice)) {
        return `${currencyCode} ${price}`;
      }
      
      switch (currencyCode) {
        case 'USD':
          return `$${numericPrice.toFixed(2)}`;
        case 'EUR':
          return `€${numericPrice.toFixed(2)}`;
        case 'GBP':
          return `£${numericPrice.toFixed(2)}`;
        default:
          return `${currencyCode} ${numericPrice.toFixed(2)}`;
      }
    } catch {
      return `${currencyCode} ${price}`;
    }
  };

  // Функция для определения класса остатка
  const getStockClass = (quantity: number): string => {
    if (quantity <= 10) return 'stock-low';
    if (quantity <= 20) return 'stock-medium';
    return 'stock-high';
  };

  // Функция для отображения остатка
  const getStockText = (quantity: number): string => {
    return `${quantity} left`;
  };

  // Если нет items, показываем сообщение
  if (items.length === 0) {
    return <div className="no-items">No items to display</div>;
  }

  return (
    <div className="listing">
      {items.map((item) => (
        <div key={item.listing_id} className="product-card">
          <div className="image-container">
            <img 
              src={item.MainImage.url_570xN} 
              alt={formatTitle(item.title)}
              className="product-image"
              onError={(e) => {
                // Запасное изображение при ошибке загрузки
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/570x570?text=No+Image';
              }}
            />
          </div>
          <div className="product-info">
            <h3 className="product-title">
              {formatTitle(item.title)}
            </h3>
            <div className="price-container">
              <div className="product-price">
                {formatPrice(item.price, item.currency_code)}
              </div>
              <span className={`stock-badge ${getStockClass(item.quantity)}`}>
                {getStockText(item.quantity)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listing;