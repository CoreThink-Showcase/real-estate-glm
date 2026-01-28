import { useState } from 'react';
import { PropertySummary } from './components/PropertySummary';
import { ChatWindow } from './components/ChatWindow';
import { mockProperties, mockComparisonResponses } from './mockData';
import { Message } from './types';

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedProperties, setSelectedProperties] = useState<string[]>([]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simple mock AI response logic
    setTimeout(() => {
      const lowerContent = content.toLowerCase();
      let response = '';

      if (lowerContent.includes('compare') || lowerContent.includes('difference')) {
        // Extract property IDs from message
        const propertyIds = content.match(/\d+/g);
        
        if (propertyIds && propertyIds.length >= 2) {
          const key = `${propertyIds[0]}-${propertyIds[1]}`;
          const reverseKey = `${propertyIds[1]}-${propertyIds[0]}`;
          
          response = mockComparisonResponses[key] || mockComparisonResponses[reverseKey] || 
            'I could not find comparison data for those properties. Please try comparing properties 1, 2, or 3.';
          
          // Select the properties being compared
          setSelectedProperties(propertyIds.slice(0, 2));
        } else {
          response = 'Please specify which properties to compare by their numbers (e.g., "Compare property 1 and 2").';
        }
      } else if (lowerContent.includes('property') || lowerContent.includes('house')) {
        response = 'I can help you compare properties! Try asking "Compare property 1 and 2" or "What are the differences between property 2 and 3?"';
      } else {
        response = 'I\'m here to help you compare house listings. Ask me to compare any two properties (1, 2, or 3) and I\'ll explain the tradeoffs.';
      }

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 500);
  };

  const propertiesToShow = selectedProperties.length > 0
    ? mockProperties.filter((p) => selectedProperties.includes(p.id))
    : mockProperties;

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>
        Real Estate Comparison AI
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <h2 style={{ marginBottom: '16px' }}>
            {selectedProperties.length > 0 ? 'Selected Properties' : 'All Properties'}
          </h2>
          {propertiesToShow.map((property) => (
            <PropertySummary key={property.id} property={property} />
          ))}
        </div>

        <div>
          <ChatWindow onSendMessage={handleSendMessage} messages={messages} />
        </div>
      </div>
    </div>
  );
}

export default App;