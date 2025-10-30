export const BASE_URL =
  import.meta.env.VITE_BASE_URL || "http://localhost:5001";

const config = {
  apiUrl: `${BASE_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

// Validate in development
if (import.meta.env.DEV && !import.meta.env.VITE_BASE_URL) {
  console.warn(
    "⚠️ VITE_BASE_URL is not set, using default: http://localhost:5001"
  );
}

export default config;
