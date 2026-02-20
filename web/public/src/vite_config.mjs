import { vite_config_entry_add } from "../../../love/public/src/vite_config_entry_add.mjs";
import { app_context_initialize } from "../../../love/public/src/app_context_initialize.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  let fn = app_context_initialize;
  const entry = {};
  vite_config_entry_add(entry, fn);
  let r = defineConfig({
    build: {
      lib: {
        entry: entry,
        name: "TextCompress",
        fileName: "text-compress",
        formats: ["iife"],
      },
    },
  });
  return r;
}
