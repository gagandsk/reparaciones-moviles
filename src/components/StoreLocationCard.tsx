// src/components/StoreLocationCard.tsx
import React from 'react';
import { Card } from 'react-bootstrap';

interface StoreLocationCardProps {
  name: string;
  address: string;
  imageUrl: string;
}

const StoreLocationCard: React.FC<StoreLocationCardProps> = ({ name, address, imageUrl }) => {
  return (
    <Card className="h-100 shadow-lg border-0 rounded-3 overflow-hidden">
      <div className="position-relative">
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={`Imagen de la tienda en ${name}`}
          className="img-fluid"
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div
          className="position-absolute bottom-0 w-100 p-3 text-white"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0))'
          }}
        >
          <Card.Title className="fw-bold fs-5">{name}</Card.Title>
        </div>
      </div>

      <Card.Body className="p-4">
        <Card.Text className="d-flex align-items-center text-dark-50">
          <i className="bi bi-geo-alt-fill me-2 fs-5 text-primary-custom"></i>
          {address}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default StoreLocationCard;