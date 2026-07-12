import { vite_config_define } from "./vite_config_define.mjs";
export async function vite_config() {
  let c = vite_config_define({});
  return c;
}
