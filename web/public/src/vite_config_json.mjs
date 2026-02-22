import { json_format_to } from "../../../love/public/src/json_format_to.mjs";
import { vite_config_build } from "../../../love/public/src/vite_config_build.mjs";
export async function vite_config_json() {
  let r = await vite_config_build();
  let json = json_format_to(r);
  return json;
}
