import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ACCESS_KEY, API_PHOTO } from '../utils/constants';

const Image = () => {
    const [photos, setPhotos] = useState([])

    const cardItems = useSelector(store=>store.details.items)
    useEffect(() =>{
        getPhotos()
        const interval = setInterval(getPhotos, 10000);
        return () => clearInterval(interval);
    },[cardItems])

    const getPhotos = async() =>{
        const accessKey= [ACCESS_KEY]
        const data = await fetch ([API_PHOTO] +accessKey)
        const json = await data.json();
        console.log(json)
        setPhotos(json)  
    }

  return (
    <div className="grid grid-cols-3 p-4 mt-2 gap-4">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo.urls.regular}
          className="w-full h-[90%] object-cover "
          alt={photo.alt_description}
        />
      ))}
    </div>
  );
};

export default Image