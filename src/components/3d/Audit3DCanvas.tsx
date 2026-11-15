"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Audit3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    try {
      const testCanvas = document.createElement("canvas");
      const gl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      50
    );
    camera.position.set(0, 0, 5.2);

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xE9E7EF, 1.2);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xB9A7E8, 3.5, 12);
    pointLight.position.set(3, 3, 4);
    scene.add(pointLight);

    const rimLight = new THREE.DirectionalLight(0x8162D6, 2.8);
    rimLight.position.set(-4, -2, -2);
    scene.add(rimLight);

    // Audit 3D Core Group
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // 1. Central Icosahedron Wireframe Gem (Audit Core)
    const gemGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const gemMat = new THREE.MeshPhysicalMaterial({
      color: 0xB9A7E8,
      roughness: 0.15,
      metalness: 0.8,
      transmission: 0.6,
      transparent: true,
      opacity: 0.85,
      wireframe: false,
    });
    const gem = new THREE.Mesh(gemGeo, gemMat);
    coreGroup.add(gem);

    // Wireframe overlay on gem
    const wireGeo = new THREE.IcosahedronGeometry(1.22, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x17151D,
      wireframe: true,
    });
    const wire = new THREE.Mesh(wireGeo, wireMat);
    coreGroup.add(wire);

    // 2. Orbital Rings (Marketplace synchronization representation)
    const ring1Geo = new THREE.TorusGeometry(1.9, 0.03, 16, 64);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x8162D6,
      metalness: 0.8,
      roughness: 0.2,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    coreGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(2.2, 0.025, 16, 64);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xB9A7E8,
      metalness: 0.6,
      roughness: 0.3,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    coreGroup.add(ring2);

    // 3. Orbiting Data Nodes (Amazon, Flipkart, Meesho, Shopify indicator spheres)
    const nodeColors = [0xFF9900, 0x2874F0, 0xE03B7C, 0x96BF48];
    const nodes: THREE.Mesh[] = [];

    nodeColors.forEach((color) => {
      const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
      const nodeMat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.2,
        metalness: 0.7,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      coreGroup.add(nodeMesh);
      nodes.push(nodeMesh);
    });

    // Mouse Tracking
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    container.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      curX += (targetX - curX) * 0.05;
      curY += (targetY - curY) * 0.05;

      if (!prefersReducedMotion) {
        gem.rotation.y = time * 0.4 + curX * 0.5;
        gem.rotation.x = time * 0.25 - curY * 0.4;
        wire.rotation.y = gem.rotation.y;
        wire.rotation.x = gem.rotation.x;

        ring1.rotation.z = time * 0.3;
        ring2.rotation.y = time * -0.25;

        // Position orbiting nodes along ring paths
        nodes.forEach((node, index) => {
          const angle = time * 0.7 + (index * Math.PI) / 2;
          const radius = 1.9;
          node.position.x = Math.cos(angle) * radius;
          node.position.y = Math.sin(angle) * 0.8 * Math.cos(time * 0.2);
          node.position.z = Math.sin(angle) * radius * 0.7;
        });

        coreGroup.position.y = Math.sin(time * 0.8) * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);

      [gemGeo, wireGeo, ring1Geo, ring2Geo].forEach((g) => g.dispose());
      [gemMat, wireMat, ring1Mat, ring2Mat].forEach((m) => m.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] md:h-[440px] flex items-center justify-center select-none"
      aria-hidden="true"
    >
      {!hasWebGL && (
        <div className="w-48 h-48 rounded-full border border-lavender bg-white/40 backdrop-blur-md flex items-center justify-center shadow-card animate-pulse-subtle">
          <div className="w-28 h-28 rounded-full bg-lavender/30 border border-lavender-accent flex items-center justify-center font-space font-bold text-brand-black">
            Audit 3D
          </div>
        </div>
      )}
    </div>
  );
}
