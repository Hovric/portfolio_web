import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  compiler: {
    // styled-components v6 needs this for correct SSR in App Router.
    styledComponents: true,
  },
  // Ensure jsdom's runtime CSS asset (loaded via fs.readFileSync by Sanity
  // Studio's dependency chain) is included in the Netlify server function
  // trace for the /studio route. Without this, pnpm-style or minimal traces
  // produce: ENOENT ... jsdom/lib/jsdom/browser/default-stylesheet.css
  outputFileTracingIncludes: {
    "/studio": ["./node_modules/jsdom/lib/jsdom/browser/*.css"],
    "/studio/**/*": ["./node_modules/jsdom/lib/jsdom/browser/*.css"],
  },
};

export default nextConfig;
