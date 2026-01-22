import React from 'react';
import { Users } from 'lucide-react';
import { formatShortDate, formatCurrency } from '../../utils/format';
import { Card } from '../../components/ui/Card';

export function UserStats({ stats }) {
  if (stats.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400 bg-white rounded-xl border border-dashed border-gray-200">
        <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
        <p>No contributors yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 animate-fade-in pb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2 px-1">Top Contributors</h2>
      {stats.map((user, index) => (
        <Card key={user.name} className="relative overflow-hidden">
          {/* Rank Badge */}
          {index < 3 && (
            <div className={`absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 rotate-45 ${
              index === 0 ? 'bg-yellow-400' : index === 1 ? 'bg-gray-300' : 'bg-orange-300'
            }`} />
          )}
          
          <div className="flex justify-between items-center mb-2 relative z-10">
            <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
              <span className="text-gray-400 text-sm">#{index + 1}</span>
              {user.name}
            </h3>
            <span className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
              {user.count} contributions
            </span>
          </div>
          
          <div className="flex justify-between items-end relative z-10">
            <div className="text-xs text-gray-400">
              Last active: {formatShortDate(user.lastDate)}
            </div>
            <span className="font-bold text-gray-900 text-xl">{formatCurrency(user.total)}</span>
          </div>
          
          {/* Progress Bar Visual (relative to top contributor) */}
          <div className="mt-3 h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 rounded-full" 
              style={{ width: `${(user.total / stats[0].total) * 100}%` }}
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
