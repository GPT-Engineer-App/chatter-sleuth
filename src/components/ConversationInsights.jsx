import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ConversationInsights = () => {
  // TODO: Replace with actual insights
  const insights = [
    "Customer expressed frustration with product delivery times.",
    "Agent successfully de-escalated the situation by offering a discount.",
    "Multiple mentions of competitor products - potential churn risk.",
  ];

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