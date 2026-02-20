import { file_exists_assert } from "../../../love/public/src/file_exists_assert.mjs";
import { vite_config_path } from "../../../love/public/src/vite_config_path.mjs";
export async function vite_run_command() {
  let path = vite_config_path();
  const command = "vite build --config " + path;
  await file_exists_assert(path);
  return command;
}
