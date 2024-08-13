import React from 'react';
import ConversationInput from '../components/ConversationInput';
import ConversationMetrics from '../components/ConversationMetrics';
import ConversationInsights from '../components/ConversationInsights';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Conversation Analysis Tool</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <ConversationInput />
        <div className="space-y-8">
          <ConversationMetrics />
          <ConversationInsights />
        </div>
      </div>
    </div>
  );
};

export default Index;