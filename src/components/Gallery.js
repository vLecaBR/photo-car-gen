import React from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
  margin-top: 2rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
`;

const ImageCard = styled.div`
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    display: block;
  }
`;

export default function Gallery({ images }) {
  return (
    <GalleryWrapper>
      <h2>🌟 Resultados da Comunidade</h2>
      <GalleryGrid>
        {images.map((src, i) => (
          <ImageCard key={i}>
            <img src={src} alt={`Imagem ${i + 1}`} />
          </ImageCard>
        ))}
      </GalleryGrid>
    </GalleryWrapper>
  );
}
