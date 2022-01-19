import React, { useState } from "react";

const ImageLike = () => {
  const [like, setLike] = useState(false);
  return (
    <span role="button" onClick={() => setLike((prevLike) => !prevLike)}>
      Like:
      {like ? (
        <i style={{ color: "red" }} className="mx-1 fas fa-heart"></i>
      ) : (
        <i style={{ color: "red" }} className="mx-1 far fa-heart"></i>
      )}
    </span>
  );
};

export default ImageLike;
