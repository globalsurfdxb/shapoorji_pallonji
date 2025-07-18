import LeftContainer from "./sections/LeftContainer";
import RightContainer from "./sections/RightContainer";

const Index = () => {
  return (
   
    <section id="section3" className="h-[100dvh]  relative overflow-hidden" >
      
      <div className="grid grid-cols-2 h-full">
        <LeftContainer/>
        <RightContainer/> 
        
        <div className='absolute inset-0 top-[50%]  w-full border-t border-black/20 w-[70%] left-[15%]'></div>
      </div>
    </section>
  );
}

export default Index;