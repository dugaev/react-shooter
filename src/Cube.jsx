import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import cubes from "@/cubes.json";
import { RigidBody } from "@react-three/rapier";
import Kym from "@/assets/images/kym.jpg";

export const Cubes = () => {
  return cubes.map((coords, index) => <Cube key={index} position={coords} />);
};

const Cube = (props) => {
  const texture = useLoader(TextureLoader, Kym);

  return (
    <RigidBody {...props}>
      <mesh castShadow receiveShadow>
        <meshBasicMaterial attach="material" map={texture} />
        <boxGeometry />
      </mesh>
    </RigidBody>
  );
};
