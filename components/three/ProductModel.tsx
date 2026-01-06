'use client';

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import type { Product } from "@/lib/products";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

interface ProductModelProps{
    product: Product;
}

export function ProductModel({ product } : ProductModelProps){

    let gltf;
    try{
        gltf = useGLTF(product.modelPath);
    } catch (error) {
        console.error(`Failed to load model: ${product.modelPath}`, error);
        return null;
    }

    const { scene } = gltf;

    const clonedScene = scene.clone();

    useEffect(() => {
        clonedScene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                if (child.material) {
                    child.material.needsUpdate = true;
                    if (child.material instanceof THREE.MeshStandardMaterial){
                        child.material.metalness = Math.max(child.material.metalness, 0.2);

                        child.material.roughness = Math.min(child.material.roughness, 0.8);

                        child.material.envMapIntensity = 1;
                    }
                }
            }
        });
    }, [clonedScene]);
    return (
        <primitive
        object = {clonedScene}
        scale = {product.scale}
        position = {product.position || [0,0,0]}
        rotation = {product.rotation || [0,0,0]}
        />
    );
} 


export function preloadProductModels(products: Product[]) {
  products.forEach((product) => {
    useGLTF.preload(product.modelPath);
  });
}