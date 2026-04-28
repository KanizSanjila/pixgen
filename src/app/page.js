import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default async function Home() {
   const res = await fetch("http://localhost:5000/images")
   const data= await res.json();
   const images = data.slice(0,7)
  //  console.log(images)
  return (
   <div>
     <Banner></Banner>
    <div className="grid grid-cols-3 gap-4 mt-10 mx-auto">
      {images.map(image=><Card key={image.id} image={image}></Card>)}
   </div>
   </div>
  );
}
