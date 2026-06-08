"use client";

import { useState, useEffect } from "react";
import { ShieldAlert, UserCheck, Key, Lock } from "lucide-react";

interface UserRow {
  email: string;
  username: string;
  status: "active" | "invited" | "pending";
  lastSignIn: string;
}

export function AuthCard() {
  const [users, setUsers] = useState<UserRow[]>([
    { email: "alex160198@gmail.com", username: "alex160198", status: "active", lastSignIn: "2 mins ago" },
    { email: "x234567@gmail.com", username: "mememaster000", status: "active", lastSignIn: "10 mins ago" },
    { email: "sarah_k@dev.io", username: "sarah_k", status: "invited", lastSignIn: "Never" },
  ]);

  // Simulate dynamic status pulses/sign-ins
  useEffect(() => {
    const timer = setInterval(() => {
      setUsers((prev) =>
        prev.map((user, idx) => {
          if (idx === 0) {
            return {
              ...user,
              lastSignIn: "Just now",
            };
          }
          return user;
        })
      );
      // Reset back after 5s
      setTimeout(() => {
        setUsers((prev) =>
          prev.map((user, idx) => {
            if (idx === 0 && user.lastSignIn === "Just now") {
              return { ...user, lastSignIn: "1 min ago" };
            }
            return user;
          })
        );
      }, 5000);
    }, 15000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="auth"
      className="group relative overflow-hidden rounded-xl border border-panel-border bg-card-bg/40 p-6 flex flex-col justify-between hover:border-card-border transition-all duration-300 min-h-[380px]"
    >
      {/* Background glow */}
      <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand/5 blur-[80px] pointer-events-none" />

      {/* Title info */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="p-1.5 rounded-md bg-brand/10 text-brand">
            <Lock className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-bold text-white tracking-tight">Authentication</h3>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed mb-6">
          Add user sign ups and logins, securing your data with <span className="text-white font-semibold">Row Level Security (RLS)</span>.
        </p>
      </div>

      {/* Visual User Authentication List Mockup */}
      <div className="relative flex-1 flex flex-col justify-center gap-3 select-none">
        <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-wider mb-1">
          Database: users_auth
        </div>
        {users.map((user, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg border border-panel-border bg-black/60 p-2.5 hover:border-card-border hover:bg-panel-bg/40 transition-all duration-200"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-bold text-zinc-400 uppercase">
                {user.username.substring(0, 2)}
              </div>
              <div className="flex flex-col">
                <span className="text-[10.5px] font-medium text-zinc-300 truncate max-w-[130px] sm:max-w-none">
                  {user.email}
                </span>
                <span className="text-[9px] text-zinc-500 font-mono">
                  {user.username}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-right">
              <span className="text-[9px] font-mono text-zinc-500 hidden sm:inline">
                {user.lastSignIn}
              </span>
              <span
                className={`inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-semibold ${
                  user.status === "active"
                    ? "bg-brand/10 text-brand"
                    : user.status === "invited"
                    ? "bg-amber-500/10 text-amber-400"
                    : "bg-zinc-500/10 text-zinc-400"
                }`}
              >
                {user.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
