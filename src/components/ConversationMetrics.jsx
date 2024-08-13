import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useConversationData } from '../hooks/useConversationData';

const ConversationMetrics = () => {
  const { data: conversations, isLoading, error } = useConversationData();

  if (isLoading) return <div>Loading metrics...</div>;
  if (error) return <div>Error loading metrics: {error.message}</div>;

  const metrics = {
    messageCount: conversations.reduce((total, conv) => total + conv.messageCount, 0),
    averageResponseTime: calculateAverageResponseTime(conversations),
    sentimentScore: calculateAverageSentiment(conversations),
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Messages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.messageCount}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.averageResponseTime}</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Sentiment Score</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{metrics.sentimentScore.toFixed(2)}</div>
        </CardContent>
      </Card>
    </div>
  );
};

const calculateAverageResponseTime = (conversations) => {
  const totalTime = conversations.reduce((total, conv) => total + conv.averageResponseTime, 0);
  return (totalTime / conversations.length).toFixed(2) + 's';
};

const calculateAverageSentiment = (conversations) => {
  const totalSentiment = conversations.reduce((total, conv) => total + conv.sentimentScore, 0);
  return totalSentiment / conversations.length;
};

export default ConversationMetrics;