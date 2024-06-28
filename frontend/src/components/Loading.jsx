import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/index";
import "../styling/preloader.css";
import "../styling/bg.css";
const Preloader = () => {

  useEffect(() => {
    preLoaderAnim()
  }, []);
  
  return (
    <div className="preloader ">
      <div className="text-container w-screen">
        <span>Envison.</span>
        <span>Plan.</span>
        <span>Create.</span>
      </div>
    </div>
  );
};

export default Preloader;
