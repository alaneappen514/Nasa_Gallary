import React, { useState } from "react";
import { useSelector } from "react-redux";

const ImageComponent = () => {
  const images = useSelector((state) => state.allImages.images);
  const [like, setLike] = useState(false);
  const renderImages = images[0]?.map((image) => {
    console.log(images);
    return (
      <div className="col" key={image.id}>
        <div className="card">
          <img className="card-img-top" src={image.img_src} alt="mars image" />
          <div className="card-body">
            <h5 className="card-title">{image.rover.name}</h5>
            <p className="card-text">{image.earth_date}</p>
            <p className="card-text">
              <p onClick={() => setLike((prevLike) => !prevLike)}>
                Like:
                {like ? (
                  <i class="fas fa-heart"></i>
                ) : (
                  <i class="far fa-heart"></i>
                )}
              </p>
            </p>
          </div>
        </div>
      </div>
    );
  });
  console.log(images);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <>{renderImages}</>
      </div>
    </div>
  );
};

export default ImageComponent;
