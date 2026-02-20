import { app_index_main } from "../../../love/public/src/app_index_main.mjs";
import { vite_config_entry_add } from "../../../love/public/src/vite_config_entry_add.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  const entry = {};
  vite_config_entry_add(entry, app_context_initialize);
  vite_config_entry_add(entry, app_index_main);
  let c = defineConfig({
    build: {
      lib: {
        name: "Test",
        formats: ["iife"],
        fileName: function lambda(format, entryName) {
          let r = `${entryName}.js`;
          return r;
        },
      },
    },
  });
  return c;
}
