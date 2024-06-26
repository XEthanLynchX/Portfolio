import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/index";
import "../styling/preloader.css";
import "../styling/bg.css";
const Preloader = () => {

  useEffect(() => {
    preLoaderAnim()
  }, []);
  
  return (
    <div className="preloader background ">
      <div className="text-container w-full">
        <span>Envison.</span>
        <span>Plan.</span>
        <span>Create.</span>
      </div>
    </div>
  );
};

export default Preloader;
