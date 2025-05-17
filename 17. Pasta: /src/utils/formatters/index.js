// Formatadores de dados

// Formatar valor monetário
export const formatCurrency = (value, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(value);
};

// Formatar porcentagem
export const formatPercentage = (value) => {
  return `${value.toFixed(2)}%`;
};

// Formatar data
export const formatDate = (date) => {
  const d = new Date(date);
  const month = d.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const day = d.getDate();
  return `${month} ${day}`;
};

// Formatar número com separadores de milhares
export const formatNumber = (value) => {
  return new Intl.NumberFormat('en-US').format(value);
};
