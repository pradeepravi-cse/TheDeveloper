import React from "react";
import images from "../../assets/images/icons/*.png";

import "./IconImage.scss";

interface Props {
  imageName?: string;
  image: string;
  imageHover?: string;
}

export function IconImage({ imageName, image, imageHover }: Props) {
  return (
    <div className="imageWrapper my-5">
      <img
        src={images[image]}
        alt={imageName}
        onMouseOver={e => (e.currentTarget.src = images[imageHover])}
        onMouseLeave={e => (e.currentTarget.src = images[image])}
      />
    </div>
  );
}
