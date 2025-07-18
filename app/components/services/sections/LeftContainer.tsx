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
         <div className=" pb-4    ">
          <p className="text-60  font-light text-[#62626210]">02/06</p>
         </div>
         <div className="flex flex-col gap-2  pt-14 pb-21 pr-2  ">
          <div className="flex items-center gap-3 cursor-pointer group">
          <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262] cursor-pointer transform-all duration-300">Engineering & Construction</p>
          <Image src="../assets/images/services/arrowblw.svg" className="hidden group-hover:block transform-all duration-300" alt="Logo" width={21} height={21} />
          </div>
          <div className="flex items-center gap-3 cursor-pointer group">
          <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262] cursor-pointer transform-all duration-300">Design Studio</p>
          <Image src="../assets/images/services/arrowblw.svg" className="hidden group-hover:block transform-all duration-300" alt="Logo" width={21} height={21} />
          </div>
          <div className="flex items-center gap-3 cursor-pointer group">
          <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">MEP</p>
          <Image src="../assets/images/services/arrowblw.svg" className="hidden group-hover:block transform-all duration-300" alt="Logo" width={21} height={21} />
          </div>
          <div className="flex items-center gap-3 cursor-pointer group">
          <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">Interior Fit-out</p>
          <Image src="../assets/images/services/arrowblw.svg" className="hidden group-hover:block transform-all duration-300" alt="Logo" width={21} height={21} />
          </div>
          <div className="flex items-center gap-3 cursor-pointer group">
          <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">Façade</p>
          <Image src="../assets/images/services/arrowblw.svg" className="hidden group-hover:block transform-all duration-300" alt="Logo" width={21} height={21} />
          </div>
          <div className="flex items-center gap-3 cursor-pointer group">
          <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">Facilities Management</p>
          <Image src="../assets/images/services/arrowblw.svg" className="hidden group-hover:block transform-all duration-300" alt="Logo" width={21} height={21} />
          </div>
          <div className="flex items-center gap-3 cursor-pointer group">
          <p className="text-29  font-light group-hover:text-black group-hover:font-bold text-[#626262]  transform-all duration-300">Water</p>
          <Image src="../assets/images/services/arrowblw.svg" className="hidden group-hover:block transform-all duration-300" alt="Logo" width={21} height={21} />
         </div>

        </div>
        </div>
        </div>
        </div>
    </div>
    </div>
   );
}
 
export default LeftContainer;