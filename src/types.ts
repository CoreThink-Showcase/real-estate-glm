export interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  yearBuilt: number;
  lotSize: number;
  propertyType: string;
  description: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface ComparisonResult {
  property1: Property;
  property2: Property;
  summary: string;
  tradeoffs: string[];
  recommendation: string;
}