import Image from "next/image"; 

const LeftContainer = () => {
  return ( 
    <div>
      <div className="flex h-full">
        <div className="w-1/3"> </div>
        <div className="w-2/3 pt-33">
        <div className="ml-28 flex flex-col h-full"> 
        <h1 className="text-60 font-light gradient-text leading-[70px]">Our Services</h1>
        <div className="  w-full   flex flex-col h-full justify-end border-l border-black/20 pl-13   mt-15">
         <div className=" pb-4 pt-28  ">
          <p className="text-60  font-light text-[#62626210]">02/06</p>
         </div>
         <div className="flex flex-col gap-2  pt-14 pb-21 pr-2  ">
          <p className="text-18  font-light text-[#626262]">Engineering & Construction</p>
          <p className="text-18  font-bold text-black">Design Studio</p>
          <p className="text-18  font-light text-[#626262]">MEP</p>
          <p className="text-18  font-light text-[#626262]">Interior Fit-out</p>
          <p className="text-18  font-light text-[#626262]">Façade</p>
          <p className="text-18  font-light text-[#626262]">Facilities Management</p>
          <p>Water</p>
         </div>
        </div>
        </div>
        </div>
        </div>
    </div>
   );
}
 
export default LeftContainer;