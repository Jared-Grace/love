import { text_trim_right } from "../../../love/public/src/text_trim_right.mjs";
import { vite_config_lib_entry } from "../../../love/public/src/vite_config_lib_entry.mjs";
import { process_env } from "../../../love/public/src/process_env.mjs";
import { vite_config_file_name_get } from "../../../love/public/src/vite_config_file_name_get.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { defineConfig } from "vite";
export async function vite_config() {
  let env_var_name = vite_config_lib_entry();
  let entry = process_env(env_var_name);
  function lambda(s2) {}
  let trimmed = text_trim_right(lambda, s);
  let c = defineConfig({
    publicDir: false,
    build: {
      lib: {
        entry,
        name: "ViteLib",
        formats: ["iife"],
        fileName: vite_config_file_name_get,
        outDir: folder_public(),
      },
    },
  });
  return c;
}
