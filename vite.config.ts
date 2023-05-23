/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./setup_test.ts"],
    exclude: ["./node_modules", "./tests", "./tests-examples"],
    // testMatch: ["./tests/**/*.test.tsx"],
    globals: true,
  },
});
