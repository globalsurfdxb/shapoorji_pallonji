import Image from "next/image";
import { aboutData } from "../data";

const LeftContainer = () => {
  return ( 
    <div className="relative py-4 xl:py-[50px] xl:pl-[150px]">
      <div className="absolute top-0 left-0 z-20 w-full h-full bg-gradient-to-l from-black/30 to-black/80"></div>
      <div className="absolute top-0 left-0 w-full z-10 h-full bg-amber-50">
        <Image src={aboutData.leftBgImage} alt="" width={2000} height={1500} className="w-full h-full object-cover"/>
      </div>
    </div>
   );
}
 
export default LeftContainer;