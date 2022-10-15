import './App.css'
import React , { useState, useEffect, useRef, Suspense} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, MeshDistortMaterial} from '@react-three/drei'

function Book(props){

  const group = useRef(null)
  const {nodes, materials, animations} = useGLTF('../assets/Book.gltf');
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);


  return(
    <Suspense>
      <group ref={group}
        {...props}
        position={[4,-0.8,0]}
        dispose={null}
        scale={active?1.2:1}
      >
          <mesh
            name="Cube"
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials["Material.002"]}
            position={[0,3.56,0]}
            rotation={[0.68,0,0]}
            scale={[0.7,0.14,0.67]}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}>
          </mesh>
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            material={materials["Material.001"]}
            position={[0,0,0]}
            scale={1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}>
          </mesh>
        </group>
    </Suspense>
  )

  useGLTF.preload("../assets/Book.gltf");
}

function CrystalBall(props){

  const group = useRef(null)
  const {nodes, materials} = useGLTF('../assets/CrystalBall.gltf');
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);


  return(
    <Suspense>
      <group ref={group} {...props}
        position={[-4,-0.8,0]}
        dispose={null}
        scale={active?1.2:1}
        onClick={(event)=>setActive(!active)}
      >
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder001.geometry}
            material={materials["Material.002"]}
            scale={1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={materials["Material.001"]}
            position={[0, 3.66, 0]}
            scale={0.63}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}>
          </mesh>
        </group>
    </Suspense>
  )

  useGLTF.preload("../assets/CrystalBall.gltf");
}

function Cauldron(props){

  const group = useRef(null)
  const {nodes, materials, animations} = useGLTF('../assets/Calderon2.gltf');
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state,delta) => {
      group.current.rotation.y += 0.01;
    }
  )

  return(
    <Suspense>
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group name="Empty" position={[3.35,0.01,0.03]}
            />
          <mesh
            name="Sphere"
            castShadow
            recieveShadow
            geometry={nodes.Sphere.geometry}
            material={nodes.Sphere.material}
            scale={active?1.2:1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}
          />
          <mesh
            name="NurbsPath"
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath.geometry}
            material={nodes.NurbsPath.material}
            scale={active?1.2:1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}
          />
          <mesh
            name="Cylinder"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder.geometry}
            position={[0.01, 0.5, 0.03]}
            scale={active?1:0.75}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event)=> setHover(true)}
            onPointerOut={(event)=> setHover(false)}>
            <MeshDistortMaterial distort={0.45} radius={0.8} speed={10} color={0x80AA00} />
          </mesh>
          </group>
        </group>
    </Suspense>
  )

  useGLTF.preload("../assets/Calderon.gltf");
}


function App() {

  return (
    <div id="canvas-container">
      <Canvas>
        <color attach="background" args={["#006000"]}/>
        <ambientLight />
        <pointLight position={[0,0,10]}/>
        <Cauldron/>
        <Book></Book>
        <CrystalBall></CrystalBall>
        <OrbitControls/>
      </Canvas>
      <div id="title">
        <h1>IHC-Catalog</h1>
        <h3>Let's make some magic</h3>
      </div>
    </div>
  );
}


export default App

