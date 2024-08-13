import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useConversationData } from '../hooks/useConversationData';

const ConversationInsights = () => {
  const { data: conversations, isLoading, error } = useConversationData();

  if (isLoading) return <div>Loading insights...</div>;
  if (error) return <div>Error loading insights: {error.message}</div>;

  const insights = conversations.flatMap(conv => conv.insights).slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Insights</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {insights.map((insight, index) => (
            <li key={index}>{insight}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ConversationInsights;