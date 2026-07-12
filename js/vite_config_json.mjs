import { json_format_to } from "./json_format_to.mjs";
import { vite_config_build } from "./vite_config_build.mjs";
export async function vite_config_json() {
  let r = await vite_config_build();
  let json = json_format_to(r);
  return json;
}
