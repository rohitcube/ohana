// hooks/useEvents.ts
import { useState, useEffect } from 'react';

export const useEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Fetch events from your API
      // For now using mock data
      setEvents(MOCK_EVENTS);
      setLoading(false);
    }, []);

    return { events, loading };
  };