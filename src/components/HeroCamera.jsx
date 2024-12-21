import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"

const HeroCamera = ({children}) => {
    // const groupRef=useRef();

    // useFrame((state, delta) => {
    //     easing.damp3(state.camera.position, { target: [0,0,20] },
    //         { smoothTime: 0.25 }, delta);
    // })
  return (
    <group >{children}</group>
  )
}

export default HeroCamera