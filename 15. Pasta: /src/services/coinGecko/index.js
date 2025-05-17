import api from '../api';

const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3';

export const getAssets = async (params = {} ) => {
  const { 
    currency = 'usd', 
    order = 'market_cap_desc',
    perPage = 100,
    page = 1,
    priceChangePercentage = '24h,7d,30d'
  } = params;
  
  try {
    const response = await fetch(`${COINGECKO_BASE_URL}/coins/markets?vs_currency=${currency}&order=${order}&per_page=${perPage}&page=${page}&sparkline=false&price_change_percentage=${priceChangePercentage}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching assets:', error);
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const response = await fetch(`${COINGECKO_BASE_URL}/coins/categories`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const getTrending = async () => {
  try {
    const response = await fetch(`${COINGECKO_BASE_URL}/search/trending`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching trending assets:', error);
    throw error;
  }
};

export const getAssetDetails = async (id) => {
  try {
    const response = await fetch(`${COINGECKO_BASE_URL}/coins/${id}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false`);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching details for asset ${id}:`, error);
    throw error;
  }
};
