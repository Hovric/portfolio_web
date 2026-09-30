"use client";

import nextDynamic from "next/dynamic";
import config from "../../../../sanity.config";

// Sanity Studio touches browser-only APIs and calls React's `createContext`
// at module evaluation. Under Next 16's `react-server` export condition the
// server bundle resolves `react` to the RSC shim (no `createContext`), which
// crashes page-data collection with
// `TypeError: (0, _.createContext) is not a function`.
// Loading the Studio client-only (no SSR) keeps those modules out of the
// server bundle entirely.
const NextStudio = nextDynamic(
  () =>
    import("next-sanity/studio").then((mod) => ({ default: mod.NextStudio })),
  { ssr: false },
);

export default function StudioClient() {
  return <NextStudio config={config} />;
}
