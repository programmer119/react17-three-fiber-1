import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from 'react-three-fiber'
import './styles.css'
import { Html, ContactShadows, Environment, useGLTF, OrbitControls, useProgress } from '@react-three/drei'

function Thing() {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  return (
    <mesh
      ref={ref}
      onClick={(e) => console.log('click')}
      onPointerOver={(e) => console.log('hover')}
      onPointerOut={(e) => console.log('unhover')}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

ReactDOM.render(
  <Canvas>
    <Thing />
    <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI * 0.5}></OrbitControls>
  </Canvas>,
  document.getElementById('root')
)
