import profilePhotoFile from "/profilePhoto.jpg"
import { styled } from 'styled-components'

const StyledImg = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
`;

// retain className for layout of intro section
export const ProfilePhoto = ({className} ) => {
  return (
    <StyledImg className={className} src={profilePhotoFile} alt="Kasia's photo" />
  );
};