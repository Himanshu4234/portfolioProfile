"use client";

import React, { useEffect, useState } from "react";
import { FaCode, FaDatabase, FaPalette, FaBolt } from "react-icons/fa6";

export const SplashScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Smooth progress counter simulation from 0% to 100%
    const startTime = Date.now();
    const duration = 1600; // 1.6s total intro

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(() => {
            setIsDone(true);
          }, 600);
        }, 250);
      }
    }, 25);

    return () => clearInterval(timer);
  }, []);

  if (!mounted || isDone) {
    return null;
  }

  return (
    <div
      className={`splash-overlay ${isFading ? "fade-out" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        backgroundColor: "#050811",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s ease",
        opacity: isFading ? 0 : 1,
        pointerEvents: isFading ? "none" : "auto",
        fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Ambient Glow Aura */}
        <div
          style={{
            position: "absolute",
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(6, 182, 212, 0.12) 50%, transparent 70%)",
            borderRadius: "50%",
            filter: "blur(50px)",
            pointerEvents: "none",
            animation: "pulseGlow 2.5s infinite",
          }}
        />

        {/* Orbiting Satellite Tech Icons */}
        <div
          style={{
            position: "absolute",
            width: "210px",
            height: "210px",
            borderRadius: "50%",
            animation: "spin 10s linear infinite",
            pointerEvents: "none",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#818cf8",
              background: "rgba(15, 23, 42, 0.95)",
              border: "1px solid rgba(99, 102, 241, 0.5)",
              borderRadius: "50%",
              padding: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(99, 102, 241, 0.6)",
            }}
          >
            <FaCode size={16} />
          </div>
          <div
            style={{
              position: "absolute",
              bottom: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#06b6d4",
              background: "rgba(15, 23, 42, 0.95)",
              border: "1px solid rgba(6, 182, 212, 0.5)",
              borderRadius: "50%",
              padding: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(6, 182, 212, 0.6)",
            }}
          >
            <FaDatabase size={16} />
          </div>
          <div
            style={{
              position: "absolute",
              left: "-14px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#a855f7",
              background: "rgba(15, 23, 42, 0.95)",
              border: "1px solid rgba(168, 85, 247, 0.5)",
              borderRadius: "50%",
              padding: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(168, 85, 247, 0.6)",
            }}
          >
            <FaPalette size={16} />
          </div>
          <div
            style={{
              position: "absolute",
              right: "-14px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#f59e0b",
              background: "rgba(15, 23, 42, 0.95)",
              border: "1px solid rgba(245, 158, 11, 0.5)",
              borderRadius: "50%",
              padding: "7px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(245, 158, 11, 0.6)",
            }}
          >
            <FaBolt size={16} />
          </div>
        </div>

        {/* HC Central Monogram */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            fontSize: "5.5rem",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            background: "linear-gradient(135deg, #ffffff 10%, #818cf8 60%, #6366f1 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 40px rgba(99, 102, 241, 0.6)",
            transform: `scale(${0.85 + (progress / 100) * 0.15})`,
            transition: "transform 0.1s ease-out",
            userSelect: "none",
          }}
        >
          HC
        </div>

        {/* Name & Role */}
        <div
          style={{
            marginTop: "16px",
            textAlign: "center",
            opacity: progress > 15 ? 1 : 0,
            transform: progress > 15 ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.4s ease",
          }}
        >
          <h2
            style={{
              fontSize: "1.35rem",
              fontWeight: 700,
              color: "#f8fafc",
              letterSpacing: "0.02em",
              margin: 0,
            }}
          >
            Himanshu Chauhan
          </h2>
          <p
            style={{
              fontSize: "0.9rem",
              color: "#94a3b8",
              marginTop: "4px",
              marginBottom: 0,
              fontWeight: 500,
            }}
          >
            Senior Frontend Engineer
          </p>
        </div>

        {/* Progress Bar & Percentage */}
        <div
          style={{
            marginTop: "28px",
            width: "240px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "9999px",
              overflow: "hidden",
              border: "1px solid rgba(255, 255, 255, 0.05)",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "linear-gradient(90deg, #6366f1 0%, #a855f7 50%, #06b6d4 100%)",
                borderRadius: "9999px",
                transition: "width 0.04s linear",
                boxShadow: "0 0 16px rgba(99, 102, 241, 0.9)",
              }}
            />
          </div>

          <span
            style={{
              fontSize: "0.8rem",
              fontFamily: "var(--font-mono, monospace)",
              color: "#64748b",
              fontWeight: 600,
            }}
          >
            {progress}%
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
