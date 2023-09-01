import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import React from 'react'

function MyLeva() {
    const { camera, scene } = useThree()
    const { cameraPosition,scenePosition, sceneRotation} = useControls({
        cameraPosition: {
            value: { x: 50.59850295439549, y: 27.329665342329637, z: 312.273164410099 },
            step:0.05
        },
        scenePosition: {
            value: { x: 0, y: -41.00, z: 90.00 },
            step:0.05
        },
        sceneRotation: {
            value: { x: 0, y: -0.4, z: 0 },
            step:0.001
        }
    })

    useFrame(() => {
        camera.position.x = cameraPosition.x
        camera.position.y = cameraPosition.y
        camera.position.z = cameraPosition.z
        scene.position.y = scenePosition.y
        scene.position.z = scenePosition.z
        scene.rotation.x = sceneRotation.x
        scene.rotation.y = sceneRotation.y
        scene.rotation.z = sceneRotation.z
    })
    return null;
}

export default MyLeva