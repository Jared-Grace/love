import { vite_config } from "../../../love/public/src/vite_config.mjs";
export async function vite_config_json() {
  let r = await vite_config();jt
  return r;
}
