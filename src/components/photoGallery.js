import React, { useState, useEffect } from "react";
import "./Images.css";

const PhotoGallery = () => {
  const [imagesList, setImagesList] = useState([]);

  useEffect(() => {
    const task = async () => {
      const res = await fetch(
        "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=f9736f4d370f9c7115a952951b506569&gallery_id=66911286-72157647277042064&format=json&nojsoncallback=1"
      );
      const data = await res.json();
      console.log(data.photos.photo);
      setImagesList(data.photos.photo);
    };
    task()
  }, []);
let myCurrentDate = new Date()
let date = myCurrentDate.getDate();
let month = myCurrentDate.getMonth() + 1;
let year = myCurrentDate.getFullYear();

  return (
    <div className="app-container">
      
      <div className="images-container">
        {imagesList.map((each, i) => {
          return (
            <div className="image-container" key={i}>
              <img
                src={`https://farm${each.farm}.staticflickr.com/${each.server}/${each.id}_${each.secret}.jpg`}
                className="image"
                alt="shopping-images"
              />
              <div >
              <p className="title">{each.title} </p>
              <p className="date">{date}/{month<10?`0${month}`:`${month}`}/{year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;