import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { BottomNav } from './components/layout/BottomNav';
import { SummaryStats } from './features/dashboard/SummaryStats';
import { AddEntryForm } from './features/entries/AddEntryForm';
import { EntryList } from './features/entries/EntryList';
import { UserStats } from './features/entries/UserStats';
import { useEntries } from './hooks/useEntries';

function App() {
  const [activeTab, setActiveTab] = useState('add');
  const { entries, addEntry, deleteEntry, totalAmount, userStats } = useEntries();

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans text-gray-900">
      <Header />

      <main className="p-4 max-w-md mx-auto">
        
        {/* Always show summary on dashboard (add tab) */}
        {activeTab === 'add' && (
          <SummaryStats totalAmount={totalAmount} entryCount={entries.length} />
        )}

        <div className="transition-all duration-300">
          {activeTab === 'add' && (
            <AddEntryForm onAdd={addEntry} />
          )}

          {activeTab === 'history' && (
            <EntryList entries={entries} onDelete={deleteEntry} />
          )}

          {activeTab === 'stats' && (
            <UserStats stats={userStats} />
          )}
        </div>

      </main>

      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
