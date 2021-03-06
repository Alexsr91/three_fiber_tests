/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: murilo.kleine (https://sketchfab.com/murilo.kleine)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/61671f29ca0a4fa39dc9653290282418
title: Jupiter - Free Downloadable Model
*/

import * as THREE from 'three'
import React, { useRef, useState, useEffect } from 'react'
import { useFrame } from 'react-three-fiber'
import { useGLTF } from '@react-three/drei'

import { useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/jupiter.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <primitive object={nodes.Armature_rootJoint} />
        <skinnedMesh
          material={materials.JUPITER}
          geometry={nodes.JUPITER_0.geometry}
          skeleton={nodes.JUPITER_0.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/jupiter.gltf')
