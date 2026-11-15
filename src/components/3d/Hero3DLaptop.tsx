"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DLaptop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // WebGL support test
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

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      36,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    // Position camera slightly elevated, looking slightly downward at laptop
    camera.position.set(0, 0.5, 7.6);

    // 2. Renderer
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
      renderer.toneMappingExposure = 1.25;
      container.appendChild(renderer.domElement);
    } catch {
      setHasWebGL(false);
      return;
    }

    // 3. Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xffffff, 2.6);
    mainKeyLight.position.set(5, 8, 6);
    scene.add(mainKeyLight);

    // Purple rim lights for glowing edges
    const purpleRimLight1 = new THREE.DirectionalLight(0x8b5cf6, 4.5);
    purpleRimLight1.position.set(-6, 3, -2);
    scene.add(purpleRimLight1);

    const purpleRimLight2 = new THREE.PointLight(0x6c38ff, 3.8, 14);
    purpleRimLight2.position.set(0, -1, 3.5);
    scene.add(purpleRimLight2);

    const topSoftLight = new THREE.PointLight(0xc4b5fd, 2.2, 12);
    topSoftLight.position.set(1, 5, 2.5);
    scene.add(topSoftLight);

    // Master Group for 3D elements with mouse parallax
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // 4. GENERATE SCREEN WALLPAPER CANVAS TEXTURE (Glowing UQ Monogram)
    const screenCanvas = document.createElement("canvas");
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const ctx = screenCanvas.getContext("2d")!;

    function renderScreenTexture(time = 0) {
      // Deep dark violet gradient
      const bgGrad = ctx.createRadialGradient(512, 320, 30, 512, 320, 520);
      bgGrad.addColorStop(0, "#2c1c5c");
      bgGrad.addColorStop(0.45, "#181232");
      bgGrad.addColorStop(1, "#0d0918");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, 1024, 640);

      // Subtle background grid
      ctx.strokeStyle = "rgba(139, 92, 246, 0.12)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x <= 1024; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 640);
        ctx.stroke();
      }
      for (let y = 0; y <= 640; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(1024, y);
        ctx.stroke();
      }

      // Ambient radial glow behind logo
      const glowGrad = ctx.createRadialGradient(512, 300, 20, 512, 300, 260);
      const pulseOpacity = 0.45 + Math.sin(time * 2.2) * 0.1;
      glowGrad.addColorStop(0, `rgba(108, 56, 255, ${pulseOpacity})`);
      glowGrad.addColorStop(0.5, `rgba(139, 92, 246, ${pulseOpacity * 0.5})`);
      glowGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, 1024, 640);

      // Draw stylized UQ Logo Monogram on screen
      ctx.save();
      ctx.translate(512, 290);
      const scale = 2.8;
      ctx.scale(scale, scale);
      ctx.translate(-50, -50);

      // U loop
      ctx.beginPath();
      ctx.moveTo(22, 24);
      ctx.bezierCurveTo(22, 24, 22, 62, 22, 64);
      ctx.bezierCurveTo(22, 78, 38, 82, 46, 72);
      ctx.bezierCurveTo(50, 67, 52, 56, 52, 46);
      ctx.lineTo(52, 24);
      ctx.lineWidth = 14;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      const uGrad = ctx.createLinearGradient(0, 0, 100, 100);
      uGrad.addColorStop(0, "#E9D5FF");
      uGrad.addColorStop(0.4, "#A855F7");
      uGrad.addColorStop(1, "#6C38FF");
      ctx.strokeStyle = uGrad;
      ctx.stroke();

      // Q loop
      ctx.beginPath();
      ctx.moveTo(52, 38);
      ctx.bezierCurveTo(52, 26, 64, 22, 74, 22);
      ctx.bezierCurveTo(85, 22, 92, 32, 92, 48);
      ctx.bezierCurveTo(92, 64, 85, 74, 72, 74);
      ctx.bezierCurveTo(62, 74, 55, 68, 52, 58);
      ctx.lineWidth = 13;
      ctx.stroke();

      // Q tail
      ctx.beginPath();
      ctx.moveTo(70, 62);
      ctx.lineTo(87, 83);
      ctx.lineWidth = 13;
      ctx.strokeStyle = "#FFFFFF";
      ctx.stroke();

      ctx.restore();

      // Top bar window dots
      ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
      ctx.beginPath();
      ctx.arc(36, 32, 6, 0, Math.PI * 2);
      ctx.arc(56, 32, 6, 0, Math.PI * 2);
      ctx.arc(76, 32, 6, 0, Math.PI * 2);
      ctx.fill();

      // Bottom subtle status indicator
      ctx.font = "bold 22px 'Space Grotesk', sans-serif";
      ctx.fillStyle = "rgba(255, 255, 255, 0.55)";
      ctx.textAlign = "center";
      ctx.fillText("UNIQOVA OS • ACTIVE", 512, 580);
    }

    renderScreenTexture(0);
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenTexture.generateMipmaps = true;
    screenTexture.minFilter = THREE.LinearMipmapLinearFilter;

    // 5. CONSTRUCT 3D LAPTOP
    const laptopGroup = new THREE.Group();
    // Position slightly lower in scene, angled facing forward-left
    laptopGroup.position.set(0.1, -0.4, 0);
    laptopGroup.rotation.set(0.24, -0.44, 0.08);
    masterGroup.add(laptopGroup);

    // Materials
    const aluminumMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4cfe0,
      metalness: 0.88,
      roughness: 0.22,
    });

    const darkTrimMaterial = new THREE.MeshStandardMaterial({
      color: 0x14111d,
      metalness: 0.6,
      roughness: 0.35,
    });

    const screenMaterial = new THREE.MeshBasicMaterial({
      map: screenTexture,
    });

    // Base Chassis
    const baseWidth = 3.6;
    const baseHeight = 0.12;
    const baseDepth = 2.4;
    const baseGeo = new THREE.BoxGeometry(baseWidth, baseHeight, baseDepth);
    const baseMesh = new THREE.Mesh(baseGeo, aluminumMaterial);
    baseMesh.position.set(0, 0, 0);
    laptopGroup.add(baseMesh);

    // Keyboard well indent
    const kbWellGeo = new THREE.BoxGeometry(3.1, 0.02, 1.4);
    const kbWellMesh = new THREE.Mesh(kbWellGeo, darkTrimMaterial);
    kbWellMesh.position.set(0, baseHeight / 2 + 0.005, -0.3);
    laptopGroup.add(kbWellMesh);

    // Individual chiclet keyboard keys
    const keysRowGroup = new THREE.Group();
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x221f2d,
      roughness: 0.3,
      metalness: 0.3,
    });
    for (let r = 0; r < 5; r++) {
      const rowZ = -0.85 + r * 0.26;
      const numKeys = r === 4 ? 8 : 12;
      const keyWidth = (2.9 / numKeys) * 0.85;
      for (let k = 0; k < numKeys; k++) {
        const keyX = -1.35 + k * (2.85 / (numKeys - 1 || 1));
        const keyGeo = new THREE.BoxGeometry(keyWidth, 0.02, 0.18);
        const keyMesh = new THREE.Mesh(keyGeo, keyMat);
        keyMesh.position.set(keyX, baseHeight / 2 + 0.02, rowZ);
        keysRowGroup.add(keyMesh);
      }
    }
    laptopGroup.add(keysRowGroup);

    // Trackpad
    const trackpadGeo = new THREE.BoxGeometry(1.2, 0.015, 0.8);
    const trackpadMat = new THREE.MeshStandardMaterial({
      color: 0xc8c4d4,
      metalness: 0.7,
      roughness: 0.35,
    });
    const trackpadMesh = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpadMesh.position.set(0, baseHeight / 2 + 0.008, 0.65);
    laptopGroup.add(trackpadMesh);

    // Laptop Lid (Hinge & Screen)
    // Placed at the back edge of the base: z = -baseDepth / 2
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, baseHeight / 2, -baseDepth / 2);
    // Open angle ~110 degrees: tilted backward ~20 degrees from vertical (rotation.x = -0.35)
    lidGroup.rotation.x = -0.35;
    laptopGroup.add(lidGroup);

    // Lid Back Shell (facing backward into -Z)
    const lidThickness = 0.08;
    const lidHeight = 2.4;
    const lidShellGeo = new THREE.BoxGeometry(baseWidth, lidHeight, lidThickness);
    const lidShell = new THREE.Mesh(lidShellGeo, aluminumMaterial);
    lidShell.position.set(0, lidHeight / 2, -lidThickness / 2);
    lidGroup.add(lidShell);

    // Screen Bezel (Dark Frame facing forward into +Z)
    const bezelWidth = 3.52;
    const bezelHeight = 2.32;
    const bezelGeo = new THREE.PlaneGeometry(bezelWidth, bezelHeight);
    const bezelMesh = new THREE.Mesh(bezelGeo, darkTrimMaterial);
    bezelMesh.position.set(0, lidHeight / 2, 0.001);
    lidGroup.add(bezelMesh);

    // Screen Display Plane with CanvasTexture (facing camera into +Z)
    const displayWidth = 3.36;
    const displayHeight = 2.15;
    const displayGeo = new THREE.PlaneGeometry(displayWidth, displayHeight);
    const displayMesh = new THREE.Mesh(displayGeo, screenMaterial);
    displayMesh.position.set(0, lidHeight / 2, 0.004);
    lidGroup.add(displayMesh);

    // Camera dot
    const cameraDotGeo = new THREE.CircleGeometry(0.025, 16);
    const cameraDotMat = new THREE.MeshBasicMaterial({ color: 0x6c38ff });
    const cameraDot = new THREE.Mesh(cameraDotGeo, cameraDotMat);
    cameraDot.position.set(0, lidHeight - 0.04, 0.005);
    lidGroup.add(cameraDot);

    // 6. SWIRLING 3D GLOWING TOROIDAL LIGHT RIBBON AROUND LAPTOP
    const curvePoints: THREE.Vector3[] = [];
    const ribbonRadiusX = 3.1;
    const ribbonRadiusY = 2.1;
    const ribbonRadiusZ = 2.4;
    const numPoints = 100;

    for (let i = 0; i <= numPoints; i++) {
      const theta = (i / numPoints) * Math.PI * 2;
      const x = Math.cos(theta) * ribbonRadiusX;
      const y = Math.sin(theta) * ribbonRadiusY + Math.sin(theta * 2) * 0.35;
      const z = Math.sin(theta) * ribbonRadiusZ * 0.9;
      curvePoints.push(new THREE.Vector3(x, y, z));
    }

    const ribbonCurve = new THREE.CatmullRomCurve3(curvePoints, true);
    const ribbonGeo = new THREE.TubeGeometry(ribbonCurve, 140, 0.11, 16, true);

    const ribbonMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      emissive: 0x6c38ff,
      emissiveIntensity: 1.1,
      roughness: 0.15,
      metalness: 0.25,
      transparent: true,
      opacity: 0.88,
    });

    const lightRibbon = new THREE.Mesh(ribbonGeo, ribbonMat);
    lightRibbon.rotation.set(0.38, -0.42, 0.2);
    lightRibbon.position.set(0.1, 0.3, 0.1);
    masterGroup.add(lightRibbon);

    // Secondary luminous inner halo ring
    const haloGeo = new THREE.TorusGeometry(3.35, 0.04, 16, 120);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0xd8b4fe,
      transparent: true,
      opacity: 0.7,
    });
    const haloRing = new THREE.Mesh(haloGeo, haloMat);
    haloRing.rotation.set(Math.PI * 0.38, -0.32, 0.22);
    haloRing.position.set(0.1, 0.45, -0.1);
    masterGroup.add(haloRing);

    // 7. ORBITING 3D GLOSSY VIOLET CUBES
    interface CubeData {
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      rotSpeed: THREE.Vector3;
      bobSpeed: number;
      bobAmp: number;
      phase: number;
    }

    const cubesData: CubeData[] = [];
    const cubeMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x7c3aed,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.35,
      roughness: 0.15,
      metalness: 0.4,
      clearcoat: 0.95,
      clearcoatRoughness: 0.1,
    });

    const cubeConfigs = [
      // Top Right Cube
      { size: 0.42, pos: [2.7, 2.1, 0.5], rotSpeed: [0.01, 0.015, 0.005], bobSpeed: 1.4, bobAmp: 0.15, phase: 0 },
      // Far Right Middle Cube
      { size: 0.34, pos: [3.3, 0.2, 1.1], rotSpeed: [-0.012, 0.008, 0.01], bobSpeed: 1.8, bobAmp: 0.12, phase: 1.2 },
      // Top Left Cube
      { size: 0.3, pos: [-2.4, 2.0, -0.5], rotSpeed: [0.008, -0.012, 0.015], bobSpeed: 1.2, bobAmp: 0.1, phase: 2.5 },
      // Bottom Left Cube
      { size: 0.36, pos: [-2.3, -1.7, 0.8], rotSpeed: [0.015, 0.01, -0.008], bobSpeed: 1.6, bobAmp: 0.14, phase: 3.8 },
      // Bottom Right Cube
      { size: 0.24, pos: [2.8, -1.8, 0.3], rotSpeed: [0.01, -0.015, 0.01], bobSpeed: 2.0, bobAmp: 0.09, phase: 5.0 },
    ];

    cubeConfigs.forEach((cfg) => {
      const geo = new THREE.BoxGeometry(cfg.size, cfg.size, cfg.size);
      const mesh = new THREE.Mesh(geo, cubeMaterial);
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      masterGroup.add(mesh);

      cubesData.push({
        mesh,
        basePos: new THREE.Vector3(cfg.pos[0], cfg.pos[1], cfg.pos[2]),
        rotSpeed: new THREE.Vector3(...cfg.rotSpeed),
        bobSpeed: cfg.bobSpeed,
        bobAmp: cfg.bobAmp,
        phase: cfg.phase,
      });
    });

    // 8. GLOWING SPARKLE PARTICLES
    const particleCount = 45;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particlePhases = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const radius = 2.0 + Math.random() * 2.5;
      const angle = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 3.5;
      particlePositions[i * 3] = Math.cos(angle) * radius;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = Math.sin(angle) * radius;
      particlePhases[i] = Math.random() * Math.PI * 2;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xc4b5fd,
      size: 0.07,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    masterGroup.add(particles);

    // 9. MOUSE INTERACTION & SMOOTH PARALLAX DAMPING
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = normX * 0.16;
      targetRotX = -normY * 0.1;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 10. ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let lastScreenUpdate = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth camera damping towards mouse target
      masterGroup.rotation.y += (targetRotY - masterGroup.rotation.y) * 0.05;
      masterGroup.rotation.x += (targetRotX - masterGroup.rotation.x) * 0.05;

      // Gentle floating animation of laptop
      laptopGroup.position.y = -0.4 + Math.sin(elapsedTime * 1.2) * 0.07;
      laptopGroup.rotation.z = 0.08 + Math.cos(elapsedTime * 0.9) * 0.015;

      // Rotate light ribbon slowly
      lightRibbon.rotation.z = 0.18 + elapsedTime * 0.15;
      haloRing.rotation.z = 0.22 - elapsedTime * 0.08;

      // Bob & rotate cubes
      cubesData.forEach((c) => {
        c.mesh.rotation.x += c.rotSpeed.x;
        c.mesh.rotation.y += c.rotSpeed.y;
        c.mesh.rotation.z += c.rotSpeed.z;
        c.mesh.position.y = c.basePos.y + Math.sin(elapsedTime * c.bobSpeed + c.phase) * c.bobAmp;
      });

      // Twinkle particles
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(elapsedTime * 2 + particlePhases[i]) * 0.003;
      }
      particleGeo.attributes.position.needsUpdate = true;

      // Periodically update screen glow pulse
      if (elapsedTime - lastScreenUpdate > 0.08) {
        renderScreenTexture(elapsedTime);
        screenTexture.needsUpdate = true;
        lastScreenUpdate = elapsedTime;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 11. RESIZE HANDLER
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 12. CLEANUP
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => mat.dispose());
          } else {
            object.material?.dispose();
          }
        }
      });

      screenTexture.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] flex items-center justify-center select-none"
    >
      {!hasWebGL && (
        <div className="absolute inset-0 flex items-center justify-center bg-lavender/10 rounded-3xl p-6 text-center">
          <p className="text-sm text-neutral-600">
            Interactive 3D preview requires WebGL.
          </p>
        </div>
      )}
    </div>
  );
}
