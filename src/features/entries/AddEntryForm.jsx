import React, { useState } from 'react';
import { Users, PlusCircle } from 'lucide-react';
import { Card } from '../../components/ui/Card';

export function AddEntryForm({ onAdd }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !amount) return;
    
    const success = onAdd(name, amount);
    if (success) {
      setName('');
      setAmount('');
      // Optional: Show toast or feedback
    }
  };

  return (
    <Card className="animate-fade-in">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">New Entry</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <div className="relative">
            <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter contributor name"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Amount (Rs)</label>
          <div className="relative">
            <span className="absolute left-4 top-3 text-gray-500 font-semibold">Rs</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
            />
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-xs text-gray-500">Min target: 100 Rs/day</p>
            <div className="flex gap-2">
              {[100, 500, 1000].map(val => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val.toString())}
                  className="text-xs bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors"
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!name || !amount}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg shadow-lg shadow-blue-200 active:scale-95 transition-all flex justify-center items-center gap-2"
        >
          <PlusCircle className="w-5 h-5" />
          Save Entry
        </button>
      </form>
    </Card>
  );
}
