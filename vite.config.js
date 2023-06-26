/* eslint-disable no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

//  https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import axios from "axios";

// export default defineConfig({
//   base: "/my-portfolio/", // Set the base path for your portfolio
//   plugins: [react()],
//   build: {
//     // outDir: "dist",
//     chunkSizeWarningLimit: 1000,
//     sourcemap: true, // Generate sourcemaps for better debugging (optional)
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           reactVendor: ["react", "react-dom"],
//           utility: ["lodash", "axios"],
//         },
//         // lodash: ["lodash"], // Disable manual chunks for better default behavior
//       },
//     },
//   },
// });
