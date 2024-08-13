import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useQuery } from '@tanstack/react-query';

const fetchConversationData = async () => {
  const conversationsCol = collection(db, 'conversations');
  const conversationSnapshot = await getDocs(conversationsCol);
  return conversationSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const useConversationData = () => {
  return useQuery({
    queryKey: ['conversations'],
    queryFn: fetchConversationData,
  });
};