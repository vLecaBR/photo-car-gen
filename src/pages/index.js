import React, { useState } from 'react';
import CarForm from '../components/CarForm';
import ImageUpload from '../components/ImageUpload';
import GlobalStyle from '../styles/GlobalStyles';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background: white;
  border-radius: 8px;
`;

export default function Home() {
  const [carData, setCarData] = useState({
    brand: '',
    model: '',
    year: '',
    color: '',
  });
  const [images, setImages] = useState([]);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (images.length < 2) {
      alert('Envie duas imagens');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('brand', carData.brand);
    formData.append('model', carData.model);
    formData.append('year', carData.year);
    formData.append('color', carData.color);
    images.forEach((img, idx) => formData.append(`image${idx + 1}`, img));

    const res = await fetch('/api/generate', {
      method: 'POST',
      body: formData,
    });

    const data = await res.json();
    setGeneratedImage(data.image);
    setLoading(false);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>🚗 Gerador de Arte com IA</h1>
        <CarForm carData={carData} setCarData={setCarData} />
        <ImageUpload images={images} setImages={setImages} />
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? 'Gerando...' : 'Gerar Imagem'}
        </button>
        {generatedImage && (
          <img src={generatedImage} alt="Imagem gerada" style={{ marginTop: 20, width: '100%' }} />
        )}
      </Container>
    </>
  );
}
