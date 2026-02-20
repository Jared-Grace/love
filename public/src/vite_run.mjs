import { function_unalias_exists } from "../../../love/public/src/function_unalias_exists.mjs";
import { vite_config_path } from "../../../love/public/src/vite_config_path.mjs";
export async function vite_run() {
  let path = vite_config_path();
  let u = await function_unalias_exists(f_name);
}
