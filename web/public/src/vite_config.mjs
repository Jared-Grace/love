import { defineConfig } from "vite";
export async function vite_config() {
  let c = defineConfig({
    build: {
      lib: {
        name: "ViteLib",
        formats: ["iife"],
        fileName: function lambda(format, entryName) {
          let r = `${entryName}.js`;
          return r;
        },
        outDir: "dist",
      },
    },
  });
  return c;
}
