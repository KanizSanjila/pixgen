import React from 'react';

const PhotoDetailsPage =async ({params}) => {
    const {id} =await params;

     const res = await fetch("http://localhost:5000/images")
   const images= await res.json();

   const photo = images.find(image=>image.id==id)
    // console.log(photo)
    const {title,prompt} = photo
    return (
        <div>
            <p>{title}</p>
        </div>
    );
};

export default PhotoDetailsPage;