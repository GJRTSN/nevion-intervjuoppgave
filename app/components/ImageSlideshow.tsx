"use client";

import ImageGallery from "react-image-gallery";

const ImageSlideshow = ({ launchImages }: { launchImages: string[] }) => {
  const images = launchImages.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <ImageGallery
      items={images}
      showThumbnails={false}
      showPlayButton={false}
    />
  );
};

export default ImageSlideshow;
