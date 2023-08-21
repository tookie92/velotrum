'use client'
import React, { useEffect, useRef } from "react";
import { PivotControls, useGLTF, useScroll } from "@react-three/drei";
import { GLTFResult } from "./typing";
import { useControls } from "leva";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";


export function Model(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<any>()

  const { camera, scene } = useThree()
  
  const { nodes, materials } = useGLTF("models/cartoon_car.glb") as GLTFResult;

   console.log(camera.position);
   
   
  return (
    <group {...props} dispose={null}>
      <group>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.body_car_body_0.geometry}
                  material={materials.car_body}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.hood_car_body_0.geometry}
                  material={materials.car_body}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.front_bumper_carbon_fiber_0.geometry}
                  material={materials.carbon_fiber}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.front_fenders_carbon_fiber_0.geometry}
                  material={materials.carbon_fiber}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane006_car_body_0.geometry}
                  material={materials.car_body}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane008_window_0.geometry}
                  material={materials.window}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane009_black_parts_0.geometry}
                  material={materials.black_parts}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane007_black_parts_0.geometry}
                  material={materials.black_parts}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.trunk_car_body_0.geometry}
                  material={materials.car_body}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.black_parts_black_parts_0.geometry}
                  material={materials.black_parts}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.rear_fenders_carbon_fiber_0.geometry}
                  material={materials.carbon_fiber}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.headlight_glass_headlight_glass_0.geometry}
                  material={materials.headlight_glass}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane026_chrome_0.geometry}
                  material={materials.chrome}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.rear_bumper_carbon_fiber_0.geometry}
                  material={materials.carbon_fiber}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.exhaust_chrome_0.geometry}
                  material={materials.chrome}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane005_black_parts_0.geometry}
                  material={materials.black_parts}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.side_skirts_carbon_fiber_0.geometry}
                  material={materials.carbon_fiber}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane011_window_0.geometry}
                  material={materials.window}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane014_black_parts_0.geometry}
                  material={materials.black_parts}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane017_window_0.geometry}
                  material={materials.window}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane033_black_parts_0.geometry}
                  material={materials.black_parts}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane034_black_parts_0.geometry}
                  material={materials.black_parts}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane035_window_0.geometry}
                  material={materials.window}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane036_black_parts_0.geometry}
                  material={materials.black_parts}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.mirrors_chrome_0.geometry}
                  material={materials.chrome}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.front_right_wheel_wheel_0.geometry}
                  material={materials.wheel}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane038_black_parts_0.geometry}
                  material={materials.black_parts}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.intercooler_intercooler_0.geometry}
                  material={materials.intercooler}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.black_floats_Pure_black_0.geometry}
                  material={materials.Pure_black}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.black_floats_chrome_0.geometry}
                  material={materials.chrome}
                />
              </group>
              <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.rear_wheels_wheel_0.geometry}
                  material={materials.wheel}
                />
              </group>
              <group ref={group} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.front_left_wheel_wheel_0.geometry}
                  material={materials.wheel}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/cartoon_car.glb");
