import React from "react";
import { useSelector } from "react-redux";
import ImageLike from "./ImageLike";
import "../containers/style/image.css";

const ImageComponent = () => {
  const images = useSelector((state) => state.allImages.images);
  const renderImages = images[0]?.map((image) => {
    console.log(images);
    return (
      <div className="card shadow my-4" key={image.id}>
        <img className="card-img-top" src={image.img_src} alt="mars image" />
        <div className="card-body">
          <h5 className="card-title">{image.rover.name}</h5>
          <p className="card-text">{image.earth_date}</p>
          <p className="card-text">
            <ImageLike />
          </p>
        </div>
      </div>
    );
  });
  console.log(images);
  return (
    <div>
      <div className="card-columns">
        <>{renderImages}</>
      </div>
    </div>
  );
};

export default ImageComponent;
