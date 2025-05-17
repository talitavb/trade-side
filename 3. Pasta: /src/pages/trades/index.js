import { useState } from 'react';
import Head from 'next/head';
import MainLayout from '../../components/layout/MainLayout';
import FiltersSection from '../../components/trades/FiltersSection';
import TradesTable from '../../components/trades/TradesTable';

export default function Trades() {
  const [filters, setFilters] = useState({});
  const [trades, setTrades] = useState([]);
  
  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
    // Em um projeto real, você faria uma chamada à API aqui
    console.log('Applying filters:', newFilters);
  };
  
  return (
    <MainLayout>
      <Head>
        <title>Trades | Trade</title>
      </Head>
      
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-off-white text-6xl font-black">TRADES LISTING</h1>
        
        <div className="w-32 h-32 relative">
          <div className="absolute inset-0 border-4 border-pastelGreen">
            <div className="w-16 h-16 rounded-full bg-pastelGreen absolute top-1/4 left-1/4"></div>
            <div className="w-full h-1 bg-pastelGreen absolute bottom-1/4 transform rotate-45"></div>
          </div>
        </div>
      </div>
      
      <FiltersSection onApplyFilters={handleApplyFilters} />
      
      <TradesTable trades={trades} />
    </MainLayout>
  );
}
