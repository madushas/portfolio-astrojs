export const apiVersion = import.meta.env.PUBLIC_SANITY_API_VERSION || "2024-06-17";

// Use fallback values for build-time when env vars are not set
// In production, ensure these are set via your hosting platform
export const dataset = import.meta.env.PUBLIC_SANITY_DATASET || "production";
export const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID || "";

export const useCdn = false;

// Helper to check if Sanity is configured
export const isSanityConfigured = () => Boolean(projectId);
