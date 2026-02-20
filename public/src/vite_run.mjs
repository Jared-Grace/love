import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { vite_config_path } from "../../../love/public/src/vite_config_path.mjs";
export async function vite_run() {
  let path = vite_config_path();
  let exists = await file_exists(path);
  return exists;
}
