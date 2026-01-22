import { useState, useEffect } from 'react';

const STORAGE_KEY = 'dera_soft_entries';

export function useEntries() {
  const [entries, setEntries] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Failed to load entries', e);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  }, [entries]);

  const addEntry = (name, amount) => {
    const newEntry = {
      id: Date.now().toString(),
      name: name.trim(),
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };
    setEntries([newEntry, ...entries]);
    return true;
  };

  const deleteEntry = (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      setEntries(entries.filter(entry => entry.id !== id));
      return true;
    }
    return false;
  };

  const totalAmount = entries.reduce((sum, entry) => sum + entry.amount, 0);

  // Stats logic
  const userStats = entries.reduce((acc, entry) => {
    const name = entry.name;
    if (!acc[name]) {
      acc[name] = { total: 0, count: 0, lastDate: null, entries: [] };
    }
    acc[name].total += entry.amount;
    acc[name].count += 1;
    acc[name].lastDate = entry.date;
    acc[name].entries.push(entry);
    return acc;
  }, {});

  // Sort stats by total amount (highest first)
  const sortedUserStats = Object.entries(userStats)
    .sort(([, a], [, b]) => b.total - a.total)
    .map(([name, data]) => ({ name, ...data }));

  return {
    entries,
    addEntry,
    deleteEntry,
    totalAmount,
    userStats: sortedUserStats
  };
}
