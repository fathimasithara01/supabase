"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";

export function RealtimeCard() {
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [lagCoords, setLagCoords] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle cursor positioning
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  // Lerp secondary cursor position for trailing effect
  useEffect(() => {
    if (!hovered) return;
    let frameId: number;

    const updateLag = () => {
      setLagCoords((prev) => {
        const dx = coords.x - prev.x;
        const dy = coords.y - prev.y;
        // Ease value
        const ease = 0.08;
        return {
          x: prev.x + dx * ease,
          y: prev.y + dy * ease,
        };
      });
      frameId = requestAnimationFrame(updateLag);
    };

    frameId = requestAnimationFrame(updateLag);
    return () => cancelAnimationFrame(frameId);
  }, [coords, hovered]);

  // Set secondary cursor starting positions on mouse enter
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
    setLagCoords({ x: x - 50, y: y + 50 }); // Offset start
    setHovered(true);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      id="realtime"
      className="group relative overflow-hidden rounded-xl border border-zinc-900 bg-zinc-950/40 p-6 flex flex-col justify-between hover:border-zinc-800 transition-all duration-300 min-h-[380px] cursor-none"
    >
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-500/5 blur-[80px] pointer-events-none" />

      {/* Info Header */}
      <div className="pointer-events-none">
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400">
            <Globe className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight">Realtime</h3>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
          Build multiplayer experiences with <span className="text-white font-semibold">real-time data synchronization</span>.
        </p>
      </div>

      {/* Interactive Visual Canvas */}
      <div className="relative flex-1 rounded-lg border border-zinc-900/60 bg-black/60 bg-grid-pattern overflow-hidden min-h-[160px]">
        {/* Helper Instructions (when not hovering) */}
        {!hovered && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300">
            <span className="text-[10px] font-mono font-medium text-zinc-600 bg-zinc-950 px-2 py-1.5 border border-zinc-900 rounded">
              Hover inside to sync cursors
            </span>
          </div>
        )}

        {/* User's simulated custom cursor (only shown when hovering container) */}
        {hovered && (
          <div
            className="absolute pointer-events-none z-20 flex flex-col items-start"
            style={{
              left: coords.x,
              top: coords.y,
              transform: "translate(-2px, -2px)",
            }}
          >
            {/* Custom SVG pointer */}
            <svg className="h-4 w-4 text-emerald-500 fill-emerald-500" viewBox="0 0 24 24">
              <path d="M4.5 3V19L9.5 14L15.5 20L18.5 17L12.5 11.5L17.5 9.5L4.5 3Z" stroke="black" strokeWidth="1.5" />
            </svg>
            <span className="mt-1 ml-3 px-1.5 py-0.5 rounded bg-emerald-500 text-black text-[8px] font-extrabold font-mono uppercase">
              You
            </span>
          </div>
        )}

        {/* Multiplayer partner lag cursor */}
        {hovered && (
          <div
            className="absolute pointer-events-none z-10 flex flex-col items-start transition-opacity duration-300"
            style={{
              left: lagCoords.x,
              top: lagCoords.y,
              transform: "translate(-2px, -2px)",
            }}
          >
            {/* Partner SVG pointer */}
            <svg className="h-4 w-4 text-zinc-400 fill-zinc-400" viewBox="0 0 24 24">
              <path d="M4.5 3V19L9.5 14L15.5 20L18.5 17L12.5 11.5L17.5 9.5L4.5 3Z" stroke="black" strokeWidth="1.5" />
            </svg>
            <div className="mt-1 ml-3 flex flex-col gap-1.5 items-start">
              <span className="px-1.5 py-0.5 rounded bg-zinc-700 text-white text-[8px] font-bold font-mono">
                Sarah
              </span>
              <div className="bg-zinc-900 border border-zinc-800 text-[8px] text-zinc-300 px-1.5 py-1 rounded shadow-lg max-w-[120px] font-sans">
                Realtime updates! 🚀
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
