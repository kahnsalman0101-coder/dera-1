import React from 'react';
import { Calendar, Trash2, History } from 'lucide-react';
import { formatDate, formatCurrency } from '../../utils/format';
import { Card } from '../../components/ui/Card';

export function EntryList({ entries, onDelete }) {
  if (entries.length === 0) {
    return (
      <div className="text-center py-10 text-gray-400 bg-white rounded-xl border border-dashed border-gray-200">
        <History className="w-12 h-12 mx-auto mb-2 opacity-50" />
        <p>No entries yet</p>
      </div>
    );
  }

  return (
    <div className="space-y-3 animate-fade-in pb-4">
      <h2 className="text-lg font-semibold text-gray-800 mb-2 px-1">Recent History</h2>
      {entries.map((entry) => (
        <Card key={entry.id} className="flex justify-between items-center group relative overflow-hidden">
          <div>
            <p className="font-semibold text-gray-800 text-lg">{entry.name}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {formatDate(entry.date)}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="font-bold text-green-600 text-lg">+{formatCurrency(entry.amount)}</p>
            <button
              onClick={() => onDelete(entry.id)}
              className="p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
              title="Delete Entry"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}
