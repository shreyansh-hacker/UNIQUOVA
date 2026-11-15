"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GlobalBackground3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Safely check WebGL support using a separate test canvas
    try {
      const testCanvas = document.createElement("canvas");
      const testGl = testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl");
      if (!testGl) return;
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 15;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: "low-power",
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      container.appendChild(renderer.domElement);
    } catch {
      return;
    }

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xE9E7EF, 1.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xB9A7E8, 2.5);
    dirLight.position.set(5, 10, 7);
    scene.add(dirLight);

    // Floating 3D geometric tokens distributed across deep space
    const group = new THREE.Group();
    scene.add(group);

    const items: {
      mesh: THREE.Mesh;
      rotSpeedX: number;
      rotSpeedY: number;
      floatSpeed: number;
      initialY: number;
      floatOffset: number;
    }[] = [];

    const octaGeo = new THREE.OctahedronGeometry(0.35, 0);
    const torusGeo = new THREE.TorusGeometry(0.4, 0.06, 12, 32);
    const boxGeo = new THREE.BoxGeometry(0.45, 0.45, 0.45);
    const icosaGeo = new THREE.IcosahedronGeometry(0.3, 0);

    const matLavender = new THREE.MeshStandardMaterial({
      color: 0xB9A7E8,
      metalness: 0.7,
      roughness: 0.25,
      transparent: true,
      opacity: 0.45,
    });

    const matDark = new THREE.MeshStandardMaterial({
      color: 0x17151D,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.3,
    });

    const matLight = new THREE.MeshStandardMaterial({
      color: 0xFFFFFF,
      metalness: 0.4,
      roughness: 0.2,
      transparent: true,
      opacity: 0.4,
    });

    const geometries = [octaGeo, torusGeo, boxGeo, icosaGeo];
    const materials = [matLavender, matDark, matLight];

    // Create 18 distributed floating tokens along the depth axis
    for (let i = 0; i < 18; i++) {
      const geo = geometries[i % geometries.length];
      const mat = materials[i % materials.length];
      const mesh = new THREE.Mesh(geo, mat);

      const x = (Math.random() - 0.5) * 22;
      const y = (Math.random() - 0.5) * 18;
      const z = (Math.random() - 0.5) * 10 - 2;

      mesh.position.set(x, y, z);
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      group.add(mesh);

      items.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        floatSpeed: 0.5 + Math.random() * 0.8,
        initialY: y,
        floatOffset: Math.random() * Math.PI * 2,
      });
    }

    // Subtle 3D Dust Field (150 micro particles)
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 28;
      particlePos[i + 1] = (Math.random() - 0.5) * 24;
      particlePos[i + 2] = (Math.random() - 0.5) * 12;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.04,
      color: 0x9D84E0,
      transparent: true,
      opacity: 0.35,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Mouse & Scroll Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      mouseX += (targetMouseX - mouseX) * 0.03;
      mouseY += (targetMouseY - mouseY) * 0.03;

      camera.position.x = mouseX * 0.8;
      camera.position.y = -mouseY * 0.6 - (scrollY * 0.0008);
      camera.lookAt(0, 0, 0);

      items.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.position.y = item.initialY + Math.sin(time * item.floatSpeed + item.floatOffset) * 0.35;
      });

      particles.rotation.y = time * 0.02 + mouseX * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      [octaGeo, torusGeo, boxGeo, icosaGeo, particleGeo].forEach((g) => g.dispose());
      [matLavender, matDark, matLight, particleMat].forEach((m) => m.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
