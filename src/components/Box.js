import React, { useState, useRef } from 'react';

import { Canvas, useFrame } from 'react-three-fiber';
import { ambientLight } from 'three';
import { MeshWobbleMaterial, OrbitControls } from 'drei';
import { a, useSpring } from 'react-spring/three';


const SpinningMesh = ({ position, args, color, speed }) => {
  const mesh = useRef(null)
  // useFrame() must always be in its own component
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01 )); 

  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return(
    <a.mesh onClick={() => setExpand(!expand)} scale={props.scale} position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial attach="material" color={color} speed={speed} factor={0.2} />
    </a.mesh>
  )
}


class Box extends React.Component {

  render() {
    return (
        <>
                  <Canvas colorManagement camera={{position: [30, 30, 5], fov: 20, near: 0.2, far: 2000}} className="canvas" >
                    <ambientLight intensity={0.2} />
                    <directionalLight position={[0, 10, 0]} intensity={1} />

                    <group>
                      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 10]} ></mesh>
                      <SpinningMesh position={[5, 5, 0]} args={[5, 5, 5]} color="#FF6400" speed={4} />
                    </group>

                    <pointLight position={[-10, 0, -20]} intensity={0.5} />
                    <pointLight position={[0, -10, 0]} intensity={1} />

                    <OrbitControls enableZoom={false} />
                </Canvas>

        </>
    );
  }
}


export default Box;
