import { Property } from '../types';

interface PropertySummaryProps {
  property: Property;
}

export function PropertySummary({ property }: PropertySummaryProps) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
      <h3 style={{ margin: '0 0 8px 0' }}>{property.address}</h3>
      <p style={{ margin: '4px 0' }}><strong>Price:</strong> ${property.price.toLocaleString()}</p>
      <p style={{ margin: '4px 0' }}><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p style={{ margin: '4px 0' }}><strong>Bathrooms:</strong> {property.bathrooms}</p>
      <p style={{ margin: '4px 0' }}><strong>Square Feet:</strong> {property.squareFeet.toLocaleString()}</p>
      <p style={{ margin: '4px 0' }}><strong>Year Built:</strong> {property.yearBuilt}</p>
      <p style={{ margin: '4px 0' }}><strong>Lot Size:</strong> {property.lotSize.toLocaleString()} sq ft</p>
      <p style={{ margin: '4px 0' }}><strong>Type:</strong> {property.propertyType}</p>
      <p style={{ margin: '8px 0 0 0' }}><em>{property.description}</em></p>
    </div>
  );
}