import { useState } from 'react';
import Button from '../../common/Button';
import Input from '../../common/Input';

export default function FiltersSection({ onApplyFilters }) {
  const [date, setDate] = useState('');
  const [asset, setAsset] = useState('');
  
  const handleApplyFilters = () => {
    onApplyFilters({ date, asset });
  };
  
  return (
    <div className="bg-pastelGreen border-4 border-black p-6 mb-8">
      <h2 className="text-black text-3xl font-bold mb-4">FILTER</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="text-black text-xl font-bold mb-2 block">DATE</label>
          <Input 
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="04/18/2024"
            className="w-full"
          />
        </div>
        
        <div>
          <label className="text-black text-xl font-bold mb-2 block">ASSET</label>
          <Input 
            type="text"
            value={asset}
            onChange={(e) => setAsset(e.target.value)}
            placeholder="All Assets +"
            className="w-full"
          />
        </div>
        
        <div className="flex items-end">
          <Button onClick={handleApplyFilters}>FILTER</Button>
        </div>
      </div>
    </div>
  );
}
