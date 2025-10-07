import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Header = () => {
  const nameHeader = useRef(null);

  useEffect(() => {
    const typed = new Typed(nameHeader.current, {
      strings: ['Yampo'],
      typeSpeed: 150, 
      onComplete: () => {
        const cursor = document.querySelector('.typed-cursor');
        cursor?.remove();
      }  
    });
    return () => {
      typed.destroy()
    };
  }, []);
  return (
    <header className="flex flex-col justify-center items-center">
      <div className="flex flex-row text-5xl">
        <span className="mt-3 mb-1 text-center font-[Orbitron]" ref={nameHeader}/>
      </div>
      
      <hr className="w-1/5 m-2 mx-auto border-gray-400"/>
    </header>
  )
}

export default Header;