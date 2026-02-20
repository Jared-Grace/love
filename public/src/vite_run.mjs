import { file_exists_assert } from "../../../love/public/src/file_exists_assert.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { vite_config_path } from "../../../love/public/src/vite_config_path.mjs";
export async function vite_run() {
  let path = vite_config_path();
  await file_exists_assert(path);
  let stdout = await command_line("vite --config " + path);
  return stdout;
}
