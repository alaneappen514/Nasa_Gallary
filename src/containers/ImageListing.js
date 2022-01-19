import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../redux/actions/actions";
import ImageComponent from "../containers/ImageComponent";

const ImageListing = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const API_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`;
  const images = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchImages = async () => {
    const response = await axios.get(API_URL).catch((error) => {
      console.log("error", error);
    });
    dispatch(setImages(response.data.photos));
  };

  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="container my-5">
      <div>
        <ImageComponent />
      </div>
    </div>
  );
};

export default ImageListing;
