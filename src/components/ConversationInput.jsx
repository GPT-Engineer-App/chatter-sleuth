import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useQueryClient } from '@tanstack/react-query';

const ConversationInput = () => {
  const [conversation, setConversation] = useState('');
  const queryClient = useQueryClient();

  const handleAnalyze = async () => {
    try {
      // TODO: Implement actual conversation analysis logic
      const analyzedData = {
        messageCount: conversation.split('\n').length,
        averageResponseTime: Math.random() * 10 + 1, // Random number between 1 and 11
        sentimentScore: Math.random(), // Random number between 0 and 1
        insights: ['Sample insight from the conversation'],
      };

      await addDoc(collection(db, 'conversations'), analyzedData);
      queryClient.invalidateQueries('conversations');
      setConversation('');
      console.log('Conversation analyzed and added to Firebase');
    } catch (error) {
      console.error('Error analyzing conversation:', error);
    }
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