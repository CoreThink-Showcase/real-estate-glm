import { Property } from './types';

export const mockProperties: Property[] = [
  {
    id: '1',
    address: '123 Oak Street, San Francisco, CA',
    price: 850000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    yearBuilt: 2015,
    lotSize: 4000,
    propertyType: 'Single Family',
    description: 'Modern single-family home in quiet neighborhood. Open floor plan with updated kitchen and bathrooms. Close to schools and parks.'
  },
  {
    id: '2',
    address: '456 Maple Avenue, San Francisco, CA',
    price: 720000,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1200,
    yearBuilt: 1960,
    lotSize: 3500,
    propertyType: 'Single Family',
    description: 'Charming older home with original hardwood floors. Needs some updates but has great bones. Large backyard with mature trees.'
  },
  {
    id: '3',
    address: '789 Pine Road, San Francisco, CA',
    price: 950000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2200,
    yearBuilt: 2020,
    lotSize: 5000,
    propertyType: 'Single Family',
    description: 'New construction with modern amenities. Energy-efficient features, smart home technology, and spacious living areas. Excellent school district.'
  }
];

export const mockComparisonResponses: Record<string, string> = {
  '1-2': `Comparing Property 1 and Property 2:

Property 1 (123 Oak Street):
- Price: $850,000
- Size: 3 bed, 2 bath, 1,800 sq ft
- Built: 2015 (modern)
- Lot: 4,000 sq ft

Property 2 (456 Maple Avenue):
- Price: $720,000
- Size: 2 bed, 1 bath, 1,200 sq ft
- Square footage: 1,200 sq ft
- Built: 1960 (older)
- Lot: 3,500 sq ft

Key Tradeoffs:
- Property 1 costs $130,000 more but offers 50% more space and modern construction
- Property 2 is more affordable but needs updates and has fewer bedrooms
- Property 1 has better resale value due to age and condition
- Property 2 offers potential for appreciation through renovations

Recommendation: If budget allows, Property 1 offers better value with modern features and more space. Property 2 is a good option if you're willing to invest in renovations and need a lower entry price.`,

  '1-3': `Comparing Property 1 and Property 3:

Property 1 (123 Oak Street):
- Price: $850,000
- Size: 3 bed, 2 bath, 1,800 sq ft
- Built: 2015
- Lot: 4,000 sq ft

Property 3 (789 Pine Road):
- Price: $950,000
- Size: 4 bed, 3 bath, 2,200 sq ft
- Built: 2020 (newest)
- Lot: 5,000 sq ft

Key Tradeoffs:
- Property 3 costs $100,000 more but offers an extra bedroom and bathroom
- Property 3 is newer with smart home features and energy efficiency
- Property 1 is more affordable while still being relatively modern
- Property 3 has a larger lot and better school district

Recommendation: Property 3 is ideal if you need more space and want the latest features. Property 1 offers excellent value if you don't need the extra bedroom and want to save $100,000.`,

  '2-3': `Comparing Property 2 and Property 3:

Property 2 (456 Maple Avenue):
- Price: $720,000
- Size: 2 bed, 1 bath, 1,200 sq ft
- Built: 1960
- Lot: 3,500 sq ft

Property 3 (789 Pine Road):
- Price: $950,000
- Size: 4 bed, 3 bath, 2,200 sq ft
- Built: 2020
- Lot: 5,000 sq ft

Key Tradeoffs:
- Property 3 costs $230,000 more but offers nearly double the space
- Property 2 is significantly more affordable but requires renovations
- Property 3 is move-in ready with modern amenities
- Property 2 has potential for value appreciation through improvements

Recommendation: Property 3 is the better choice if budget allows, offering modern construction and ample space. Property 2 is suitable for buyers willing to invest time and money into renovations for long-term appreciation.`
};