import React from 'react';
import { Wallet } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-10">
      <div className="max-w-md mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Wallet className="w-6 h-6" />
            Dera Soft
          </h1>
          <p className="text-blue-100 text-xs mt-1">Daily Contribution Tracker</p>
        </div>
        <div className="text-xs bg-blue-700 px-2 py-1 rounded-md">
          v1.0
        </div>
      </div>
    </header>
  );
}
