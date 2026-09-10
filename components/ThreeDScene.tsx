'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type SceneVariant =
  | 'hero'
  | 'scales'
  | 'pillars'
  | 'shield'
  | 'building'
  | 'vault'
  | 'globe'
  | 'consultation';

interface ThreeDSceneProps {
  variant?: SceneVariant;
  className?: string;
  interactive?: boolean;
}

export default function ThreeDScene({
  variant = 'hero',
  className = '',
  interactive = true,
}: ThreeDSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if WebGL is supported
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch {
      return;
    }

    const isMobile = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

    // Subtle ambient & directional lights matching the brand
    // Soft whitish red: #B85A5A, white light, neutral fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(5, 8, 5);
    scene.add(dirLight1);

    const softRedLight = new THREE.PointLight(0xb85a5a, 2.0, 15);
    softRedLight.position.set(-4, -2, 3);
    scene.add(softRedLight);

    const rimLight = new THREE.PointLight(0xffffff, 1.0, 12);
    rimLight.position.set(3, -4, -2);
    scene.add(rimLight);

    // Root group for all objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Materials
    const metalMaterial = new THREE.MeshStandardMaterial({
      color: 0xd9d9d9,
      metalness: 0.85,
      roughness: 0.25,
    });

    const softRedMetalMaterial = new THREE.MeshStandardMaterial({
      color: 0xb85a5a,
      metalness: 0.7,
      roughness: 0.35,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.75,
      thickness: 0.8,
      transparent: true,
      opacity: 0.85,
    });

    // Ambient floating particles
    const particleCount = isMobile ? 35 : 90;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 8;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xb85a5a,
      size: isMobile ? 0.05 : 0.065,
      transparent: true,
      opacity: 0.45,
      blending: THREE.NormalBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    mainGroup.add(particles);

    // Build variant-specific objects
    const animatedSubObjects: {
      mesh: THREE.Object3D;
      rotSpeedX: number;
      rotSpeedY: number;
      rotSpeedZ: number;
      oscOffset?: number;
    }[] = [];

    if (variant === 'hero') {
      // Elegant 3D rings and geometric legal elements
      const ringGeo1 = new THREE.TorusGeometry(2.3, 0.04, 16, 80);
      const ringMesh1 = new THREE.Mesh(ringGeo1, metalMaterial);
      ringMesh1.rotation.x = Math.PI / 3;
      mainGroup.add(ringMesh1);
      animatedSubObjects.push({ mesh: ringMesh1, rotSpeedX: 0.002, rotSpeedY: 0.004, rotSpeedZ: 0.001 });

      const ringGeo2 = new THREE.TorusGeometry(1.7, 0.03, 16, 60);
      const ringMesh2 = new THREE.Mesh(ringGeo2, softRedMetalMaterial);
      ringMesh2.rotation.y = Math.PI / 4;
      mainGroup.add(ringMesh2);
      animatedSubObjects.push({ mesh: ringMesh2, rotSpeedX: -0.003, rotSpeedY: 0.002, rotSpeedZ: 0.002 });

      // Geometric glass tablet
      const glassGeo = new THREE.BoxGeometry(2.0, 2.8, 0.08);
      const glassMesh = new THREE.Mesh(glassGeo, glassMaterial);
      glassMesh.position.set(0, 0, -0.3);
      mainGroup.add(glassMesh);
      animatedSubObjects.push({ mesh: glassMesh, rotSpeedX: 0.001, rotSpeedY: 0.0015, rotSpeedZ: 0 });

      // Subtle metallic balance indicator
      const barGeo = new THREE.CylinderGeometry(0.04, 0.04, 3.4, 32);
      const barMesh = new THREE.Mesh(barGeo, metalMaterial);
      barMesh.rotation.z = Math.PI / 2;
      barMesh.position.set(0, 1.2, 0);
      mainGroup.add(barMesh);
      animatedSubObjects.push({ mesh: barMesh, rotSpeedX: 0, rotSpeedY: 0.002, rotSpeedZ: 0.001, oscOffset: 0 });
    } else if (variant === 'scales') {
      // 3D Scales of Justice
      const centerPoleGeo = new THREE.CylinderGeometry(0.08, 0.12, 4.2, 24);
      const centerPole = new THREE.Mesh(centerPoleGeo, metalMaterial);
      mainGroup.add(centerPole);

      const baseGeo = new THREE.CylinderGeometry(1.2, 1.4, 0.25, 32);
      const base = new THREE.Mesh(baseGeo, metalMaterial);
      base.position.y = -2.1;
      mainGroup.add(base);

      const beamGeo = new THREE.CylinderGeometry(0.06, 0.06, 3.6, 24);
      const beam = new THREE.Mesh(beamGeo, metalMaterial);
      beam.rotation.z = Math.PI / 2;
      beam.position.y = 1.7;
      mainGroup.add(beam);

      // Left pan & chain
      const panGeo1 = new THREE.CylinderGeometry(0.8, 0.4, 0.15, 32);
      const pan1 = new THREE.Mesh(panGeo1, softRedMetalMaterial);
      pan1.position.set(-1.6, 0.4, 0);
      mainGroup.add(pan1);

      // Right pan
      const pan2 = new THREE.Mesh(panGeo1, softRedMetalMaterial);
      pan2.position.set(1.6, 0.8, 0);
      mainGroup.add(pan2);

      animatedSubObjects.push({ mesh: beam, rotSpeedX: 0, rotSpeedY: 0.003, rotSpeedZ: 0, oscOffset: 0 });
      animatedSubObjects.push({ mesh: pan1, rotSpeedX: 0, rotSpeedY: 0.004, rotSpeedZ: 0, oscOffset: 1 });
      animatedSubObjects.push({ mesh: pan2, rotSpeedX: 0, rotSpeedY: 0.004, rotSpeedZ: 0, oscOffset: 2 });
    } else if (variant === 'pillars') {
      // Abstract courthouse columns
      for (let i = -2; i <= 2; i++) {
        const pillarGeo = new THREE.CylinderGeometry(0.2, 0.2, 4.0, 24);
        const pillar = new THREE.Mesh(pillarGeo, metalMaterial);
        pillar.position.set(i * 1.0, 0, (Math.abs(i) % 2) * -0.4);
        mainGroup.add(pillar);
      }
      const archGeo = new THREE.BoxGeometry(4.8, 0.35, 0.8);
      const arch = new THREE.Mesh(archGeo, softRedMetalMaterial);
      arch.position.y = 2.15;
      mainGroup.add(arch);

      const basePlinthGeo = new THREE.BoxGeometry(5.0, 0.35, 1.0);
      const basePlinth = new THREE.Mesh(basePlinthGeo, metalMaterial);
      basePlinth.position.y = -2.15;
      mainGroup.add(basePlinth);

      animatedSubObjects.push({ mesh: mainGroup, rotSpeedX: 0.0005, rotSpeedY: 0.003, rotSpeedZ: 0 });
    } else if (variant === 'shield') {
      // Abstract protection shield geometry
      const shieldGeo = new THREE.IcosahedronGeometry(2.0, 1);
      const shield = new THREE.Mesh(shieldGeo, metalMaterial);
      mainGroup.add(shield);

      const shieldOuterRing = new THREE.TorusGeometry(2.4, 0.04, 16, 64);
      const outerRing = new THREE.Mesh(shieldOuterRing, softRedMetalMaterial);
      mainGroup.add(outerRing);

      animatedSubObjects.push({ mesh: shield, rotSpeedX: 0.003, rotSpeedY: 0.005, rotSpeedZ: 0.001 });
      animatedSubObjects.push({ mesh: outerRing, rotSpeedX: -0.004, rotSpeedY: 0.002, rotSpeedZ: 0.003 });
    } else if (variant === 'building') {
      // Modern luxury architectural volumes
      const tower1 = new THREE.Mesh(new THREE.BoxGeometry(1.4, 4.2, 1.4), metalMaterial);
      tower1.position.set(-0.6, 0, 0);
      mainGroup.add(tower1);

      const tower2 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 3.2, 1.2), glassMaterial);
      tower2.position.set(0.8, -0.5, 0.4);
      mainGroup.add(tower2);

      const accentRing = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.03, 16, 64), softRedMetalMaterial);
      accentRing.rotation.x = Math.PI / 2.5;
      mainGroup.add(accentRing);

      animatedSubObjects.push({ mesh: mainGroup, rotSpeedX: 0.001, rotSpeedY: 0.004, rotSpeedZ: 0 });
    } else if (variant === 'vault') {
      // Vault and legal key precision composition
      const cubeGeo = new THREE.BoxGeometry(2.2, 2.2, 2.2);
      const cube = new THREE.Mesh(cubeGeo, glassMaterial);
      mainGroup.add(cube);

      const ringInner = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.05, 16, 64), softRedMetalMaterial);
      mainGroup.add(ringInner);

      const keyShaft = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2.6, 16), metalMaterial);
      keyShaft.rotation.z = Math.PI / 4;
      mainGroup.add(keyShaft);

      animatedSubObjects.push({ mesh: cube, rotSpeedX: 0.002, rotSpeedY: 0.003, rotSpeedZ: 0.001 });
      animatedSubObjects.push({ mesh: ringInner, rotSpeedX: -0.004, rotSpeedY: 0.002, rotSpeedZ: 0.003 });
    } else if (variant === 'globe') {
      // Minimalist legal globe wireframe
      const sphereRing1 = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.03, 16, 72), metalMaterial);
      mainGroup.add(sphereRing1);

      const sphereRing2 = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.03, 16, 72), metalMaterial);
      sphereRing2.rotation.x = Math.PI / 2;
      mainGroup.add(sphereRing2);

      const sphereRing3 = new THREE.Mesh(new THREE.TorusGeometry(2.0, 0.03, 16, 72), softRedMetalMaterial);
      sphereRing3.rotation.y = Math.PI / 2;
      mainGroup.add(sphereRing3);

      const orbitRing = new THREE.Mesh(new THREE.TorusGeometry(2.6, 0.025, 16, 80), softRedMetalMaterial);
      orbitRing.rotation.x = Math.PI / 3;
      mainGroup.add(orbitRing);

      animatedSubObjects.push({ mesh: sphereRing1, rotSpeedX: 0.002, rotSpeedY: 0.004, rotSpeedZ: 0 });
      animatedSubObjects.push({ mesh: sphereRing2, rotSpeedX: 0.003, rotSpeedY: -0.002, rotSpeedZ: 0.001 });
      animatedSubObjects.push({ mesh: orbitRing, rotSpeedX: -0.002, rotSpeedY: 0.005, rotSpeedZ: 0.002 });
    } else {
      // Consultation / default: balanced geometric harmony
      const ring = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.04, 16, 64), softRedMetalMaterial);
      mainGroup.add(ring);

      const innerBox = new THREE.Mesh(new THREE.OctahedronGeometry(1.6, 0), metalMaterial);
      mainGroup.add(innerBox);

      animatedSubObjects.push({ mesh: ring, rotSpeedX: 0.003, rotSpeedY: 0.002, rotSpeedZ: 0.001 });
      animatedSubObjects.push({ mesh: innerBox, rotSpeedX: -0.003, rotSpeedY: 0.004, rotSpeedZ: -0.002 });
    }

    // Mouse interaction with lerp for smooth motion
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.8;
      targetY = y * 0.6;
    };

    if (interactive && !isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Responsive resize handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Visibility observer to pause rendering when offscreen
    let isVisible = true;
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    intersectionObserver.observe(container);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y = mouseX;
      mainGroup.rotation.x = mouseY;

      // Animate individual sub-elements
      for (const obj of animatedSubObjects) {
        obj.mesh.rotation.x += obj.rotSpeedX;
        obj.mesh.rotation.y += obj.rotSpeedY;
        obj.mesh.rotation.z += obj.rotSpeedZ;

        if (obj.oscOffset !== undefined) {
          obj.mesh.position.y += Math.sin(elapsedTime * 1.5 + obj.oscOffset) * 0.0015;
        }
      }

      // Gentle pulse on particles
      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive && !isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();

      // Dispose Three.js resources
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      metalMaterial.dispose();
      softRedMetalMaterial.dispose();
      glassMaterial.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [variant, interactive]);

  return (
    <div
      ref={containerRef}
      id={`threed-scene-${variant}`}
      className={`relative w-full h-full min-h-[280px] pointer-events-none select-none ${className}`}
      aria-hidden="true"
    />
  );
}
