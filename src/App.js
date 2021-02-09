import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber"
import { OrbitControls, Stars } from "@react-three/drei";

import Joder from "./Joder.js";
// import Jupiter from "./Jupiter.js"

import './App.css';




export default function App() {
  return (
    
  <Canvas>
    <OrbitControls />
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <spotLight position={[0, 1, 1]} angle={0.3} />
      
      <Suspense fallback={null}>
        <Stars count={1000} />
        <Joder />
        {/* <Jupiter/> */}
      </Suspense>
  </Canvas>
  );
}



