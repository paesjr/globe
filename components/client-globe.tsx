"use client";

import dynamic from "next/dynamic";

const GlobeDemo = dynamic(
  () => import("./ui/globe").then((mod) => mod.GlobeDemo),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-xl">Loading globe...</p>
      </div>
    ),
  }
);

export function ClientGlobe() {
  return <GlobeDemo />;
}
