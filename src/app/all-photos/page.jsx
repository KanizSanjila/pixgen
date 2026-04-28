import Card from '@/components/Card';
import React from 'react';

const AllPhotosPage =async () => {
    const res = await fetch("https://json-server-4u0i.onrender.com/images")
   const data= await res.json();
   const images = data.slice(0,7)
//    console.log(images)
    return (
        <div>
           <h1 className='text-4xl font-bold m-4'>All Photos</h1> 

            <div className="grid grid-cols-3 gap-4 mt-10 mx-auto">
                 {images.map(image=><Card key={image.id} image={image}></Card>)}
              </div>
        </div>
    );
};

export default AllPhotosPage;