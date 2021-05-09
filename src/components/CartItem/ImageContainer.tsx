import styled from 'styled-components';

const ImageContainer = styled.div`
  width: 11.25rem;
  height: 11.25rem;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 1rem;
  img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;

export default ImageContainer;
