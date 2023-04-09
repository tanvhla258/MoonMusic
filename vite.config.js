import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv-webpack";

export default defineConfig({
  plugins: [react()],
  // server: {
  //   port: 3000,
  // },
  // build: {
  //   outDir: "build",
  // },
  // optimizeDeps: {
  //   include: ["react", "react-dom"],
  // },
});
