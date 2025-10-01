import { user_repo_get } from "../../../love/public/src/user_repo_get.mjs";
import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_deploy() {
  marker("1");
  let repo_name = await user_repo_get();
  let v = await command_line_generic("dir", {});
  let stdout = await command_line("firebase deploy");
  return stdout;
}
