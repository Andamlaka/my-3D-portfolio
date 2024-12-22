import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import  gsap  from 'gsap';
import { useGSAP } from '@gsap/react';
// Target component to load a GLTF model
const Target = (props) => {
  const targetRef = useRef();

  // Use GLTF hook to load the model
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

  // Ensure that the model is rendered using the <primitive> component
  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });
  
  return (
    <mesh {...props} ref={targetRef} rotation={[0,Math.PI/5,0]}
    scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
