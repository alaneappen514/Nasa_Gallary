import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../redux/actions/actions";
import ImageComponent from "../containers/ImageComponent";

const ImageListing = () => {
  const images = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchImages = async () => {
    const response = await axios
      .get(
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=n4gz6Y1uEVbCva6x6SCzL4gUyCQBJ8PZ8D1okTaA"
      )
      .catch((error) => {
        console.log("error", error);
      });
    dispatch(setImages(response.data.photos));
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="container my-5">
      <h2>Mars</h2>
      <div className="my-3">
        <ImageComponent />
      </div>
    </div>
  );
};

export default ImageListing;
