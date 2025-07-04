import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 8px;
`;

export default function CarForm({ carData, setCarData }) {
  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Input name="brand" placeholder="Marca" value={carData.brand} onChange={handleChange} />
      <Input name="model" placeholder="Modelo" value={carData.model} onChange={handleChange} />
      <Input name="year" placeholder="Ano" value={carData.year} onChange={handleChange} />
      <Input name="color" placeholder="Cor" value={carData.color} onChange={handleChange} />
    </div>
  );
}
