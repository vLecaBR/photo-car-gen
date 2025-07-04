import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  margin-top: 2rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  object-fit: cover;
`;

export default function Gallery({ images }) {
  if (!images || images.length === 0) return null;

  return (
    <GalleryContainer>
      <h2>🌟 Veja os resultados de outros usuários</h2>
      <Grid>
        {images.map((img, idx) => (
          <Img key={idx} src={img} alt={`Resultado ${idx + 1}`} />
        ))}
      </Grid>
    </GalleryContainer>
  );
}
