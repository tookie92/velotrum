'use client'
import * as THREE from "three";
import React, { useLayoutEffect, useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useFrame, useThree } from "@react-three/fiber";
import { GLTFResult } from "./typing";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {easing} from "maath"
import MyLeva from "./MyLeva";
import { useSnapshot } from "valtio";
import state from "@/store";




export function Model(props: JSX.IntrinsicElements["group"]) {
  const snap = useSnapshot(state)
  const {scene, camera} =useThree()
  const { nodes, materials } = useGLTF("models/bicycle.glb") as GLTFResult;
  console.log(camera.position)
  console.log("Scene",scene.position)
  console.log("Scene Rotation",scene.rotation)
  const tl = gsap.timeline()
 

  useFrame((state, delta) => {
    if (!snap.intro) { 
      easing.dampC(materials.KL003_Metallic_o.color,snap.color,0.25, delta)
    } else {
      return;
    }
  })

  useLayoutEffect(() => {
    if (snap.intro) {
    
    new ScrollTrigger({})
    tl.to(camera.position, {
      x: 147.27784499999999,
      y: 138.02049,
      z: -77.50189299999998,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        // markers: true
      }
    })
    .to(scene.position, {
      x: 0,
      y: -51.00,
      z: -69.00,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        // markers: true
      }
    })
    .to(scene.rotation, {
      x: 0,
      y: -0.45,
      z: 0,
      scrollTrigger: {
        trigger: ".second-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        // markers: true
      }
    })
      // troisieme
    .to(camera.position, {
      x: 348.7951654324132,
      y: 75.07387520975776,
      z: 354.8917870153913,
      scrollTrigger: {
        trigger: ".third-section",
        start: "top bottom",
        end: "top top",
        scrub: true,
        immediateRender: false,
        // markers: true
      }
    })
      .to(scene.position, {
        x: 0,
        y: -41.00,
        z: 120.00,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true
        }
      })
      .to(scene.rotation, {
        x: 0,
        y: -0.40,
        z: 0,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true
        }
      })
      // .to(camera.position, {
      //   x: -10.782102351962124,
      //   y: 49.98315421076273,
      //   z: 313.01263861123016,
      //   scrollTrigger: {
      //     trigger: ".anime-section",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //     markers: true
      //   }
      // })
      // .to(scene.position, {
      //   x: 0,
      //   y: -60.0,
      //   z: 0,
      //   scrollTrigger: {
      //     trigger: ".anime-section",
      //     start: "top bottom",
      //     end: "top top",
      //     scrub: true,
      //     immediateRender: false,
      //     markers: true
      //   }
      // })
      
      ;
    }
    
  },[])
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-2.472, 0.662, 31.264]}>
          <group position={[2.472, -0.662, -31.264]}>
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials.Glanzend_staalc}
            position={[2.472, -0.662, -31.264]}
          />
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_30.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.472, -0.127, -31.264]}
          />
        </group>
        <group position={[-2.472, 0.662, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_33.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.472, -0.662, -31.264]}
          />
        </group>
        <group position={[-2.472, 0.662, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_36.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.472, -0.662, -31.264]}
          />
        </group>
        <group position={[-2.472, 0.662, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_39.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.472, -0.662, -31.264]}
          />
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_46.geometry}
            material={materials.KL003_Metallic_o}
            material-roughness={1}
            position={[2.472, -0.662, -31.264]}
          />
        </group>
        <group position={[-2.472, 0.662, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_49.geometry}
            material={materials.KL003_Metallic_o}
            material-roughness={1}
            position={[2.472, -0.662, -31.264]}
          />
        </group>
        <group position={[-2.472, 0.662, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_52.geometry}
            material={materials.KL003_Metallic_o}
            material-roughness={1}
            position={[2.472, -0.662, -31.264]}
          />
        </group>
        <group position={[-2.472, 0.662, 31.264]}>
          <group position={[2.472, -0.662, -31.264]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.KL003_Metallic_o}
              material-roughness={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials.KL003_Metallic_o}
              material-roughness={1}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_57.geometry}
              material={materials.KL003_Metallic_o}
              material-roughness={1}
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_64.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.811, -0.665, -32.197]}
          />
        </group>
        <group position={[-2.472, 0.662, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_67.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.472, -0.662, -31.264]}
          />
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_75.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.472, -0.662, -31.264]}
          />
        </group>
        <group position={[-2.472, 0.662, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_78.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.472, -0.662, -31.264]}
          />
        </group>
        <group position={[-2.47, 0.665, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_81.geometry}
            material={materials.Mat_Zwart_Rubber}
            position={[2.47, -0.665, -31.264]}
          />
        </group>
        <group position={[-2.47, 0.665, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_84.geometry}
            material={materials.Mat_Zwart_Rubber}
            position={[2.47, -0.665, -31.264]}
          />
        </group>
        <group position={[-2.47, 0.665, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_87.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.47, -0.665, -31.264]}
          />
        </group>
        <group position={[-2.47, 0.665, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_90.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.47, -0.665, -31.264]}
          />
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_98.geometry}
            material={materials.Glanzend_staalc}
            position={[2.475, -0.664, -31.267]}
          />
        </group>
        <group position={[-2.475, 0.664, 31.267]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_101.geometry}
            material={materials.Glanzend_staalc}
            position={[2.475, -0.664, -31.267]}
          />
        </group>
        <group position={[-2.475, 0.664, 31.267]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_104.geometry}
            material={materials.Glanzend_staalc}
            position={[2.475, -0.664, -31.267]}
          />
        </group>
        <group position={[-2.475, 0.664, 31.267]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_107.geometry}
            material={materials.Glanzend_staalc}
            position={[2.475, -0.664, -31.267]}
          />
        </group>
        <group position={[-2.47, 0.671, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_110.geometry}
            material={materials.logo_mach_SR01}
            position={[2.47, -0.671, -31.264]}
          />
        </group>
        <group position={[-2.47, 0.671, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_113.geometry}
            material={materials.logo_mach_SR01}
            position={[2.47, -0.671, -31.264]}
          />
        </group>
        <group position={[-2.47, 0.671, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_116.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.47, -0.671, -31.264]}
          />
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
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_131.geometry}
            material={materials.Mat_Zwart_Rubber}
            position={[48.771, -36.065, 0.64]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group
          position={[62.596, 0.128, 36.065]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_134.geometry}
            material={materials.Mat_Zwart_Rubber}
            position={[-62.596, -36.065, 0.128]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
        <group position={[-2.472, 0.662, 31.264]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_137.geometry}
            material={materials.Mat_Zwart_Poeder}
            position={[2.472, -0.662, -31.264]}
          />
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
  );
}

useGLTF.preload("models/bicycle.glb");