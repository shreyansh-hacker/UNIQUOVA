"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Test WebGL support
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

    // Three.js Setup
    const scene = new THREE.Scene();
    
    // Camera
    const camera = new THREE.PerspectiveCamera(
      42,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 7.5);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.1;
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xE9E7EF, 1.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xFFFFFF, 2.2);
    mainLight.position.set(5, 8, 6);
    scene.add(mainLight);

    const lavenderRimLight = new THREE.DirectionalLight(0xB9A7E8, 3.5);
    lavenderRimLight.position.set(-6, -3, -2);
    scene.add(lavenderRimLight);

    const softFillLight = new THREE.PointLight(0x9D84E0, 2.0, 15);
    softFillLight.position.set(2, -4, 3);
    scene.add(softFillLight);

    // Group for all interactive floating elements
    const ecosystemGroup = new THREE.Group();
    scene.add(ecosystemGroup);

    // 1. MAIN E-COMMERCE PARCEL BOX (Lavender & Cardboard texture feel)
    const boxGeo = new THREE.BoxGeometry(1.6, 1.3, 1.5);
    const boxMat = new THREE.MeshStandardMaterial({
      color: 0xE2DEF0,
      roughness: 0.35,
      metalness: 0.1,
    });
    const mainBox = new THREE.Mesh(boxGeo, boxMat);
    mainBox.position.set(1.4, 0.2, 0);
    mainBox.rotation.set(0.3, -0.45, 0.15);
    ecosystemGroup.add(mainBox);

    // Packing tape across main box
    const tapeGeo = new THREE.BoxGeometry(1.62, 0.22, 1.52);
    const tapeMat = new THREE.MeshStandardMaterial({
      color: 0xB9A7E8,
      roughness: 0.2,
      metalness: 0.25,
    });
    const tape = new THREE.Mesh(tapeGeo, tapeMat);
    mainBox.add(tape);

    // Shipping label badge on box
    const labelGeo = new THREE.PlaneGeometry(0.65, 0.45);
    const labelMat = new THREE.MeshBasicMaterial({
      color: 0xFFFFFF,
      side: THREE.DoubleSide,
    });
    const label = new THREE.Mesh(labelGeo, labelMat);
    label.position.set(0, 0, 0.76);
    mainBox.add(label);

    // 2. SECONDARY FLOATING PACKAGE (D2C Luxury Gift Style)
    const giftGeo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const giftMat = new THREE.MeshStandardMaterial({
      color: 0x17151D,
      roughness: 0.2,
      metalness: 0.8,
    });
    const giftBox = new THREE.Mesh(giftGeo, giftMat);
    giftBox.position.set(2.8, -1.2, 0.8);
    giftBox.rotation.set(0.4, 0.6, -0.2);
    ecosystemGroup.add(giftBox);

    // Metallic lavender ribbon on gift box
    const ribbonVGeo = new THREE.BoxGeometry(0.92, 0.92, 0.14);
    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0xB9A7E8,
      roughness: 0.15,
      metalness: 0.6,
    });
    const ribbonV = new THREE.Mesh(ribbonVGeo, ribbonMat);
    giftBox.add(ribbonV);

    const ribbonHGeo = new THREE.BoxGeometry(0.14, 0.92, 0.92);
    const ribbonH = new THREE.Mesh(ribbonHGeo, ribbonMat);
    giftBox.add(ribbonH);

    // 3. FLOATING GLASS PRODUCT CARD (Representing catalog listings)
    const cardGeo = new THREE.BoxGeometry(1.4, 1.9, 0.06);
    const cardMat = new THREE.MeshPhysicalMaterial({
      color: 0xFFFFFF,
      transmission: 0.75,
      opacity: 0.9,
      transparent: true,
      roughness: 0.1,
      ior: 1.45,
      metalness: 0.1,
    });
    const glassCard = new THREE.Mesh(cardGeo, cardMat);
    glassCard.position.set(-0.2, -0.6, 1.2);
    glassCard.rotation.set(-0.15, 0.4, -0.1);
    ecosystemGroup.add(glassCard);

    // Miniature graphic elements on card
    const cardLineGeo = new THREE.PlaneGeometry(1.0, 0.12);
    const cardLineMat = new THREE.MeshBasicMaterial({ color: 0xB9A7E8 });
    const cardLine1 = new THREE.Mesh(cardLineGeo, cardLineMat);
    cardLine1.position.set(0, 0.45, 0.04);
    glassCard.add(cardLine1);

    const cardLine2 = new THREE.Mesh(
      new THREE.PlaneGeometry(0.65, 0.08),
      new THREE.MeshBasicMaterial({ color: 0xD8D5DF })
    );
    cardLine2.position.set(-0.17, 0.18, 0.04);
    glassCard.add(cardLine2);

    const cardBadge = new THREE.Mesh(
      new THREE.CircleGeometry(0.18, 24),
      new THREE.MeshBasicMaterial({ color: 0x8162D6 })
    );
    cardBadge.position.set(0.35, -0.45, 0.04);
    glassCard.add(cardBadge);

    // 4. FLOATING 3D GROWTH COIN / BADGE
    const coinGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.1, 32);
    const coinMat = new THREE.MeshStandardMaterial({
      color: 0xB9A7E8,
      metalness: 0.85,
      roughness: 0.2,
    });
    const coin = new THREE.Mesh(coinGeo, coinMat);
    coin.position.set(0.4, 1.6, 0.5);
    coin.rotation.set(Math.PI / 3, 0.3, 0.4);
    ecosystemGroup.add(coin);

    // 5. FLOATING GEOMETRIC SHAPES (Growth indicators, Torus, Octahedron)
    const octaGeo = new THREE.OctahedronGeometry(0.42, 0);
    const octaMat = new THREE.MeshStandardMaterial({
      color: 0x9D84E0,
      roughness: 0.25,
      metalness: 0.6,
      wireframe: false,
    });
    const octa = new THREE.Mesh(octaGeo, octaMat);
    octa.position.set(2.9, 1.4, -0.4);
    ecosystemGroup.add(octa);

    const torusGeo = new THREE.TorusGeometry(0.55, 0.08, 16, 48);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0x17151D,
      roughness: 0.3,
      metalness: 0.5,
    });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.position.set(-0.8, 1.2, -0.5);
    torus.rotation.set(0.8, 0.5, 0);
    ecosystemGroup.add(torus);

    // 6. AMBIENT PARTICLES (400 soft lavender and pearl particles)
    const particleCount = 350;
    const particleGeo = new THREE.BufferGeometry();
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0xB9A7E8);
    const color2 = new THREE.Color(0xFFFFFF);
    const color3 = new THREE.Color(0x9D84E0);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePos[i] = (Math.random() - 0.5) * 12;
      particlePos[i + 1] = (Math.random() - 0.5) * 8;
      particlePos[i + 2] = (Math.random() - 0.5) * 6;

      const c = Math.random() > 0.6 ? color1 : Math.random() > 0.3 ? color2 : color3;
      particleColors[i] = c.r;
      particleColors[i + 1] = c.g;
      particleColors[i + 2] = c.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    setIsLoaded(true);

    // Mouse Tracking with smooth interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      targetMouseX = (e.clientX / innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Resize Handler
    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // Visibility Observer to pause rendering when scrolled away
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse damping
      mouseX += (targetMouseX - mouseX) * 0.04;
      mouseY += (targetMouseY - mouseY) * 0.04;

      // Camera parallax & scroll response
      if (!prefersReducedMotion) {
        camera.position.x = mouseX * 0.6;
        camera.position.y = -mouseY * 0.4 - scrollY * 0.0012;
        camera.lookAt(0.3, 0, 0);

        // Gentle floating of individual objects
        mainBox.position.y = 0.2 + Math.sin(elapsedTime * 0.9) * 0.12;
        mainBox.rotation.y = -0.45 + Math.sin(elapsedTime * 0.6) * 0.08 + mouseX * 0.2;
        mainBox.rotation.x = 0.3 + Math.cos(elapsedTime * 0.7) * 0.06 - mouseY * 0.15;

        giftBox.position.y = -1.2 + Math.cos(elapsedTime * 1.1) * 0.14;
        giftBox.rotation.y += 0.004;
        giftBox.rotation.x = 0.4 + Math.sin(elapsedTime * 0.8) * 0.08;

        glassCard.position.y = -0.6 + Math.sin(elapsedTime * 1.0 + 1.2) * 0.1;
        glassCard.rotation.y = 0.4 + Math.sin(elapsedTime * 0.5) * 0.07 + mouseX * 0.15;

        coin.rotation.z += 0.012;
        coin.position.y = 1.6 + Math.cos(elapsedTime * 1.2) * 0.15;

        octa.rotation.x += 0.008;
        octa.rotation.y += 0.01;
        octa.position.y = 1.4 + Math.sin(elapsedTime * 0.8) * 0.12;

        torus.rotation.x += 0.005;
        torus.rotation.y += 0.007;

        // Subtle particle drift
        particles.rotation.y = elapsedTime * 0.03 + mouseX * 0.1;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      observer.disconnect();

      // Dispose geometries and materials
      [boxGeo, tapeGeo, labelGeo, giftGeo, ribbonVGeo, ribbonHGeo, cardGeo, cardLineGeo, coinGeo, octaGeo, torusGeo, particleGeo].forEach(g => g.dispose());
      [boxMat, tapeMat, labelMat, giftMat, ribbonMat, cardMat, cardLineMat, coinMat, octaMat, torusMat, particleMat].forEach(m => m.dispose());
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[520px] lg:min-h-[640px] pointer-events-auto select-none"
      aria-hidden="true"
    >
      {/* Loading state indicator */}
      {!isLoaded && hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-lavender-accent border-t-transparent animate-spin" />
        </div>
      )}

      {/* Fallback CSS 3D composition if WebGL is unavailable */}
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-72 h-80 bg-white/70 backdrop-blur-md rounded-3xl p-6 border border-neutral-grey/50 shadow-card animate-float-slow">
            <div className="w-16 h-16 rounded-2xl bg-lavender/30 flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-lavender flex items-center justify-center font-space font-bold text-brand-black">
                3D
              </div>
            </div>
            <div className="h-4 w-32 bg-lavender/40 rounded-full mb-3" />
            <div className="h-3 w-48 bg-neutral-grey/50 rounded-full mb-6" />
            <div className="grid grid-cols-2 gap-3">
              <div className="h-14 rounded-xl bg-lavender-light border border-lavender/30" />
              <div className="h-14 rounded-xl bg-brand-black text-white p-2 text-xs flex items-center justify-center font-space">
                Ecosystem
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
