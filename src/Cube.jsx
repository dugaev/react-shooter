import React from "react";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import cubes from "@/cubes.json";
import { RigidBody } from "@react-three/rapier";
import Kym from "@/assets/images/kym.jpg";

export const Cubes = () => {
  // Знаходимо середні значення координат
  const averageCoords = cubes.reduce(
    (acc, coords) => {
      acc[0] += coords[0];
      acc[1] += coords[1];
      acc[2] += coords[2];
      return acc;
    },
    [0, 0, 0]
  );

  // Розраховуємо середні значення
  averageCoords[0] /= cubes.length;
  averageCoords[1] /= cubes.length;
  averageCoords[2] /= cubes.length;

  return cubes.map((coords, index) => (
    <Cube key={index} position={subtractCoords(coords, averageCoords)} />
  ));
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

// Віднімання координат
function subtractCoords(coords, subtractor) {
  return [
    coords[0] - subtractor[0],
    coords[1] - subtractor[1],
    coords[2] - subtractor[2],
  ];
}
