import Image from "next/image";
import { aboutData } from "../data";

const RightContainer = () => {
  console.log(aboutData.rightBgImage);
  return (
    <div className="relative flex flex-col h-full px-10 xl:px-[90px] pb-20 xl:pb-[93px] pt-20 xl:pt-[50px]">
      <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-r from-black/30 to-black/80"></div>
      <div className="absolute top-0 left-0 w-full z-10 h-full bg-amber-50">
        <video src="../assets/videos/hero.mp4" autoPlay loop muted className='w-full h-full object-cover'></video>
      </div>
      <div className="relative z-40 ml-auto">
        
      </div>
      <div className="relative z-40 pt-6 xl:pt-[35px] text-white">
        <h1 className="text-48 xl:text-60 font-light leading-[1.166666666666667]">{aboutData.title}</h1>
        <h3 className="text-18 xl:text-24 font-light max-w-xl">With a rich legacy of more than <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">160 years</span> of delivering iconic projects</h3>
      </div>
      <div className="relative z-40 mt-auto ml-auto">
        <div className="bg-primary p-10 w-fit xl:w-[550px] px-15 py-10 text-white">
          <p className="text-16 xl:text-20 font-light">{aboutData.description}</p>
        </div>
      </div>
      <div className="relative z-40 border-t border-white/30 pt-6 xl:pt-[30px] flex gap-6 xl:gap-[75px] text-white">
        <div>
          <h3 className="text-24 xl:text-40 font-light">160+</h3>
          <p>Years of Legacy</p>
        </div>
        <div>
          <h3 className="text-24 xl:text-40 font-light">35000+</h3>
          <p>Employees Strength</p>
        </div>
        <div>
          <h3 className="text-24 xl:text-40 font-light">35+</h3>
          <p>Countries Globally Reached</p>
        </div>
      </div>
    </div>
  );
}

export default RightContainer;