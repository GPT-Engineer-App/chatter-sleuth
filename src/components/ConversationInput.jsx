import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const ConversationInput = () => {
  const [conversation, setConversation] = useState('');

  const handleAnalyze = () => {
    // TODO: Implement conversation analysis logic
    console.log('Analyzing conversation:', conversation);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Input Conversation</h2>
      <Textarea
        placeholder="Paste your conversation here..."
        value={conversation}
        onChange={(e) => setConversation(e.target.value)}
        className="min-h-[200px] mb-4"
      />
      <Button onClick={handleAnalyze}>Analyze Conversation</Button>
    </div>
  );
};

export default ConversationInput;