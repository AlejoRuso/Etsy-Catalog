import { ListingItem } from '../types';

// Функция для проверки и фильтрации валидных items
export const processListingData = (data: any[]): ListingItem[] => {
  return data
    .filter(item => {
      // Проверяем обязательные поля
      return (
        item &&
        item.listing_id &&
        item.MainImage &&
        item.MainImage.url_570xN &&
        item.title &&
        item.currency_code &&
        item.price !== undefined &&
        item.quantity !== undefined
      );
    })
    .map(item => ({
      ...item,
      quantity: typeof item.quantity === 'number' ? item.quantity : parseInt(item.quantity) || 0,
      price: typeof item.price === 'string' ? item.price : String(item.price)
    }));
};