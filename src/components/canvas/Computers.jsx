import { Suspense, useEffect, useState } from 'react';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import CanvasLoader from '../Loader';
const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene} 
        scale={0.75}
      />
    </mesh>
  )

}


const ComputersCanvas = () => {
  return (
    <Canvas
    frameLoop='demand'
    shadows
    camera={{position: [20, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={flase} 
        maxPolarAngle={Math.PI / 2} 
        minPolarAngle={Math.PI / 2}
        />
        <Computers/>
      </Suspense>

      <Preload all />

    </Canvas>
  )
}

export default Computers