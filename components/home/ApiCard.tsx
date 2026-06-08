"use client";

import { useState } from "react";
import { Link2, Code } from "lucide-react";

interface ApiRoute {
  path: string;
  response: unknown;
}

const API_ROUTES: ApiRoute[] = [
  {
    path: "/v1/countries",
    response: [
      { id: 1, name: "New Zealand", code: "NZ" },
      { id: 2, name: "Sweden", code: "SE" },
    ],
  },
  {
    path: "/v1/cities",
    response: [
      { id: 101, name: "Auckland", country_id: 1 },
      { id: 102, name: "Stockholm", country_id: 2 },
    ],
  },
  {
    path: "/v1/continents",
    response: [
      { id: 1, name: "Oceania" },
      { id: 2, name: "Europe" },
    ],
  },
];

export function ApiCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div id="api" className="api-card">
      <div className="api-card__glow" />

      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="api-card__icon-badge">
            <Link2 className="h-4 w-4" />
          </span>
          <h3 className="text-lg font-bold text-foreground tracking-tight">
            Data APIs
          </h3>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed mb-6">
          Instant, auto-generated, and ready-to-use{" "}
          <span className="text-foreground font-semibold">RESTful APIs</span>.
        </p>
      </div>

      {/* Route selector + JSON console */}
      <div className="flex-1 flex flex-col gap-3 justify-center select-none">
        <div className="flex flex-col gap-1.5">
          {API_ROUTES.map((route, idx) => (
            <button
              key={route.path}
              onClick={() => setActiveIndex(idx)}
              className={`api-route-btn ${
                activeIndex === idx
                  ? "api-route-btn--active"
                  : "api-route-btn--inactive"
              }`}
            >
              <span>GET {route.path}</span>
              <span className="api-route-btn__status">200 OK</span>
            </button>
          ))}
        </div>

        <div className="api-console">
          <div className="api-console__header">
            <span>JSON Output</span>
            <Code className="h-3 w-3" />
          </div>
          <pre className="api-console__pre">
            {JSON.stringify(API_ROUTES[activeIndex].response, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}