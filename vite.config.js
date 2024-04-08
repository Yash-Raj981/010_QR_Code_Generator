import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/010_QR_Code_Generator/",
    plugins: [react()],
});
