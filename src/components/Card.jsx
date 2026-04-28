import { Button, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';

const Card = ({image}) => {
    const {id,imageUrl,title,downloads,likes,category} = image
    return (
       <div className="card bg-base-100 w-96 shadow-sm">
 <div className='relative w-full aspect-square'>
     <figure>
   <Image src={imageUrl} alt={title}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
   fill className='object-cover rounded-2xl'></Image>
  </figure>
   <Chip className='absolute right-2 top-2'>{category}</Chip>
 </div>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <div className='flex  items-center gap-5'>
        <div className='flex items-center gap-2'>
        <FaHeart className='text-red-600' />
        <p>{likes}</p>
    </div>
    <Separator orientation='vertical'></Separator>
    <div className='flex items-center gap-2'>
        <IoMdDownload />
        <p>{downloads}</p>
    </div>
    </div>
  </div>
  <Link href={`/all-photos/${id}`}>
    <Button variant='outline' className={'w-full'}>View</Button>
  </Link>
</div>
    );
};

export default Card;