"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export default function ShaderBackground() {
  const [Shader, setShader] = useState<React.ComponentType<Record<string, unknown>> | null>(null);

  useEffect(() => {
    if (!hasWebGL()) return;
    import("@paper-design/shaders-react")
      .then((mod) => setShader(() => mod.MeshGradient))
      .catch(() => {});
  }, []);

  if (!Shader) {
    return <div className={styles.shaderFallback} />;
  }

  return (
    <>
      <Shader
        className={styles.shaderBase}
        colors={["#1e14c0", "#3a28e0", "#5a3cf5", "#7b5bf5", "#140ea0"]}
        speed={0.8}
        distortion={0.6}
        swirl={0.5}
      />
      <Shader
        className={styles.shaderOverlay}
        colors={["#a87bff", "#d9a0f7", "#7b5bf5", "#a87bff"]}
        speed={0.6}
        distortion={0.4}
        swirl={0.4}
      />
    </>
  );
}
