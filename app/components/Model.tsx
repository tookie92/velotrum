'use client'
import * as THREE from "three";
import React, { useLayoutEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";
import { GLTFResult } from "./typing";



export function Model(props: JSX.IntrinsicElements["group"]) {
  const {scene, camera} =useThree()
  const { nodes, materials } = useGLTF("models/bicycle.glb") as GLTFResult;
  console.log(camera.position)
  
  return (
    <group {...props} dispose={null}>
      <group position={[0,1,0]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group>
            <group position={[0, 3.00, 0]}>
              <group position={[0, -3.00, 0]} >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_5.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_9.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_13.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_17.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_21.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_25.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_27.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.472, 0.127, 31.264]}>
              <group position={[2.472, -0.127, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_33.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_36.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_39.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_42.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_43.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_46.geometry}
                  material={materials.KL003_Metallic_o}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_49.geometry}
                  material={materials.KL003_Metallic_o}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_52.geometry}
                  material={materials.KL003_Metallic_o}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_55.geometry}
                  material={materials.KL003_Metallic_o}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_56.geometry}
                  material={materials.KL003_Metallic_o}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_57.geometry}
                  material={materials.KL003_Metallic_o}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_60.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_61.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.811, 0.665, 32.197]}>
              <group position={[2.811, -0.665, -32.197]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_64.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_67.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_70.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_71.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_72.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_75.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_78.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.47, 0.665, 31.264]}>
              <group position={[2.47, -0.665, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_81.geometry}
                  material={materials.Mat_Zwart_Rubber}
                />
              </group>
            </group>
            <group position={[-2.47, 0.665, 31.264]}>
              <group position={[2.47, -0.665, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_84.geometry}
                  material={materials.Mat_Zwart_Rubber}
                />
              </group>
            </group>
            <group position={[-2.47, 0.665, 31.264]}>
              <group position={[2.47, -0.665, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_87.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.47, 0.665, 31.264]}>
              <group position={[2.47, -0.665, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_90.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.47, 0.665, 31.264]}>
              <group position={[2.47, -0.665, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_93.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_94.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_95.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.475, 0.664, 31.267]}>
              <group position={[2.475, -0.664, -31.267]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_98.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.475, 0.664, 31.267]}>
              <group position={[2.475, -0.664, -31.267]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_101.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.475, 0.664, 31.267]}>
              <group position={[2.475, -0.664, -31.267]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_104.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.475, 0.664, 31.267]}>
              <group position={[2.475, -0.664, -31.267]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_107.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.47, 0.671, 31.264]}>
              <group position={[2.47, -0.671, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_110.geometry}
                  material={materials.logo_mach_SR01}
                />
              </group>
            </group>
            <group position={[-2.47, 0.671, 31.264]}>
              <group position={[2.47, -0.671, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_113.geometry}
                  material={materials.logo_mach_SR01}
                />
              </group>
            </group>
            <group position={[-2.47, 0.671, 31.264]}>
              <group position={[2.47, -0.671, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_116.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.47, 0.671, 31.264]}>
              <group position={[2.47, -0.671, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_119.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_120.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.47, 0.671, 31.264]}>
              <group position={[2.47, -0.671, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_123.geometry}
                  material={materials.Glanzend_staalc}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_124.geometry}
                  material={materials.Glanzend_staalc}
                />
              </group>
            </group>
            <group position={[-2.47, 0.671, 31.264]}>
              <group position={[2.47, -0.671, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_127.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_128.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group
              position={[-48.771, 0.64, 36.065]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group
                position={[48.771, -36.065, 0.64]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_131.geometry}
                  material={materials.Mat_Zwart_Rubber}
                />
              </group>
            </group>
            <group
              position={[62.596, 0.128, 36.065]}
              rotation={[Math.PI / 2, 0, 0]}
            >
              <group
                position={[-62.596, -36.065, 0.128]}
                rotation={[-Math.PI / 2, 0, 0]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_134.geometry}
                  material={materials.Mat_Zwart_Rubber}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_137.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
            <group position={[-2.472, 0.662, 31.264]}>
              <group position={[2.472, -0.662, -31.264]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_140.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_141.geometry}
                  material={materials.Mat_Zwart_Poeder}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("models/bicycle.glb");