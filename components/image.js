import { getStrapiMedia } from "../lib/media";

const Image = ({ image, className }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      className={className}
    />
  );
};

export default Image;