import "./ProfilePhoto.css"
import profilePhotoFile from "../../assets/profilePhoto.jpg"

export const ProfilePhoto = ({className} ) => {
  return (
    <img className={className} src={profilePhotoFile} alt="Kasia's photo" />
  );
};