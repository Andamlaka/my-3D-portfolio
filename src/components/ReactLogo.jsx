
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei'

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react.glb')
  return (
    <Float  FloatIntensity={1}>
      <group position={[8, 8, 0]} scale={0.3} {...props}
        dispose={null}>
        <mesh
        
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.79, 0.18]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.39, 0.39, 0.5]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')
export default ReactLogo