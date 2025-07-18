import Image from "next/image";
import { aboutData } from "../data";

const RightContainer = () => {
  console.log(aboutData.rightBgImage);
  return (
    <div className="relative flex flex-col h-full px-10 xl:px-[90px] pb-20 xl:pb-[93px] mt-20 xl:mt-[50px]">
      <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-r from-black/30 to-black/80"></div>
      <div className="absolute top-0 left-0 w-full z-10 h-full bg-amber-50">
        <Image src={aboutData.rightBgImage} alt="" width={2000} height={1500} className="w-full h-full object-cover" />
      </div>
      <div className="relative z-40 ml-auto">
        <div className="w-[45px] h-[45px] bg-black rounded-full flex items-center justify-center">
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.79266 16.6637C13.0015 16.6637 16.4134 13.2315 16.4134 8.99761C16.4134 4.76373 13.0015 1.3315 8.79266 1.3315C4.58382 1.3315 1.17188 4.76373 1.17188 8.99761C1.17188 13.2315 4.58382 16.6637 8.79266 16.6637Z" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13.8047 14.7701L18.6702 19.6646" stroke="#30B6F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>

        </div>
      </div>
      <div className="relative z-40 mt-6 xl:mt-[35px] text-white">
        <h1 className="text-48 xl:text-60 font-light leading-[1.166666666666667]">{aboutData.title}</h1>
        <h3 className="text-18 xl:text-24 font-light max-w-xl">{aboutData.subtitle}</h3>
      </div>
      <div className="relative z-40 mt-auto ml-auto">
        <div className="bg-primary p-10 w-fit xl:w-[550px] px-15 py-10 text-white">
          <p className="text-16 xl:text-20 font-light">{aboutData.description}</p>
        </div>
      </div>
      <div className="relative z-40 border-t border-white/30">
        
      </div>
    </div>
  );
}

export default RightContainer;