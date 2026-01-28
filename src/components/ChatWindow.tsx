import { useState } from 'react';
import { Message } from '../types';

interface ChatWindowProps {
  onSendMessage: (message: string) => void;
  messages: Message[];
}

export function ChatWindow({ onSendMessage, messages }: ChatWindowProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', height: '400px', display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ margin: '0 0 16px 0' }}>Chat with AI Assistant</h2>
      
      <div style={{ flex: 1, overflowY: 'auto', marginBottom: '16px', border: '1px solid #eee', padding: '8px' }}>
        {messages.length === 0 ? (
          <p style={{ color: '#666' }}>No messages yet. Ask me to compare properties!</p>
        ) : (
          messages.map((message) => (
            <div key={message.id} style={{ marginBottom: '12px' }}>
              <strong>{message.role === 'user' ? 'You' : 'AI'}:</strong>
              <p style={{ margin: '4px 0 0 0', whiteSpace: 'pre-wrap' }}>{message.content}</p>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '8px' }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about properties (e.g., 'Compare property 1 and 2')"
          style={{ flex: 1, padding: '8px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Send
        </button>
      </form>
    </div>
  );
}