import LeftContainer from "./sections/LeftContainer";
import RightContainer from "./sections/RightContainer";

const Index = () => {
  return (
   
    <section id="section3" className="h-screen relative overflow-x-hidden whitebgref scroll-area" >
      <div className="grid grid-cols-2 h-full">
        <LeftContainer/>
        <RightContainer/> 
        <div className='absolute inset-0 top-[50%] h-[1px] bg-gradient-to-r from-black/30 to-white w-[70%] left-[15%]'></div>
      </div>
    </section>
  );
}

export default Index;