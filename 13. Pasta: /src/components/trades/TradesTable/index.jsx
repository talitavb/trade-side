export default function TradesTable({ trades = [] }) {
  // Dados de exemplo para visualização
  const sampleTrades = [
    { id: 1, date: 'APR 14', asset: 'GBD/USD', type: 'SELL', entryPrice: '1,2450', quantity: '18,000', result: '+1,400' },
    { id: 2, date: 'APR 13', asset: 'TSLA', type: 'BUY', entryPrice: '189,20', quantity: '100', result: '+570' },
    { id: 3, date: 'APR 12', asset: 'CUD/USD', type: 'BUY', entryPrice: '1,0975', quantity: '25,000', result: '+2,675' },
    { id: 4, date: 'APR 11', asset: 'AAPL', type: 'SELL', entryPrice: '163,76', quantity: '50', result: '+227' },
    { id: 5, date: 'APR 10', asset: 'BTC/USD', type: 'BUY', entryPrice: '42,310', quantity: '43,800', result: '+372' },
  ];
  
  const displayTrades = trades.length > 0 ? trades : sampleTrades;
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="bg-pastelGreen text-black p-4 text-left font-bold border-2 border-black">DATE</th>
            <th className="bg-pastelGreen text-black p-4 text-left font-bold border-2 border-black">ASSET</th>
            <th className="bg-pastelGreen text-black p-4 text-left font-bold border-2 border-black">TYPE</th>
            <th className="bg-pastelGreen text-black p-4 text-left font-bold border-2 border-black">ENTRY PRICE</th>
            <th className="bg-pastelGreen text-black p-4 text-left font-bold border-2 border-black">QUANTITY</th>
            <th className="bg-pastelGreen text-black p-4 text-left font-bold border-2 border-black">RESULT</th>
          </tr>
        </thead>
        <tbody>
          {displayTrades.map((trade) => (
            <tr key={trade.id} className="border-2 border-pastelGreen">
              <td className="p-4 text-off-white font-bold">{trade.date}</td>
              <td className="p-4 text-off-white font-bold">{trade.asset}</td>
              <td className="p-4 text-off-white font-bold">{trade.type}</td>
              <td className="p-4 text-off-white font-bold">{trade.entryPrice}</td>
              <td className="p-4 text-off-white font-bold">{trade.quantity}</td>
              <td className="p-4 text-off-white font-bold">{trade.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
