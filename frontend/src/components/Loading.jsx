import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/index";
import "../styling/preloader.css";
import "../styling/bg.css";
const Preloader = () => {

  useEffect(() => {
    preLoaderAnim()
  }, []);
  
  return (
    <div className="preloader background h-screen">
      <div className="text-container">
        <span>Envison.</span>
        <span>Plan.</span>
        <span>Create.</span>
        <span>Deploy.</span>
      </div>
    </div>
  );
};

export default Preloader;
