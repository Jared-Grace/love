import { assert } from "../../../love/public/src/assert.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { file_exists } from "../../../love/public/src/file_exists.mjs";
import { vite_config_path } from "../../../love/public/src/vite_config_path.mjs";
export async function vite_run() {
  let path = vite_config_path();
  let stdout = await command_line("vite --config " + path);
  let exists = await file_exists(path);
  assert(b);
  return stdout;
}
