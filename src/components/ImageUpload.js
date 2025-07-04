import React from 'react';
import styled from 'styled-components';

const UploadBox = styled.div`
  border: 2px dashed #ccc;
  padding: 1rem;
  margin-top: 1rem;
`;

export default function ImageUpload({ images, setImages }) {
  const handleChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 2) {
      alert('Apenas 2 imagens são permitidas');
      return;
    }
    setImages(files);
  };

  return (
    <UploadBox>
      <label>Envie 2 fotos do carro:</label>
      <input type="file" accept="image/*" multiple onChange={handleChange} />
    </UploadBox>
  );
}
