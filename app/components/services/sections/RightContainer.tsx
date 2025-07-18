import Image from "next/image"; 

const RightContainer = () => { 
  return (
    <div>
       <div className="relative w-full h-full">  
  <Image
    src="/assets/images/services/servicemain.jpg"
    alt="Service Image"
    fill
    className="object-cover"
  />
  <div className="absolute top-0 right-20  ">
    <Image src="../assets/images/services/studio-over.svg" alt="Logo" width={682} height={914} /></div>
</div>
    </div>
  );
}

export default RightContainer;