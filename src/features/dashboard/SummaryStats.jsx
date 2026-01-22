import React from 'react';
import { TrendingUp, Calendar } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { formatCurrency } from '../../utils/format';

export function SummaryStats({ totalAmount, entryCount }) {
  return (
    <Card className="mb-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white border-none shadow-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-blue-100 text-sm mb-1">Total Collected</p>
          <p className="text-3xl font-bold">{formatCurrency(totalAmount)}</p>
        </div>
        <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
          <TrendingUp className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 flex gap-4 text-xs text-blue-100">
        <span className="flex items-center gap-1">
          <Calendar className="w-3 h-3" />
          Today: {new Date().toLocaleDateString()}
        </span>
        <span>
          {entryCount} entries total
        </span>
      </div>
    </Card>
  );
}
