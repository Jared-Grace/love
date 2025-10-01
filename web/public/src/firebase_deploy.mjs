import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_deploy() {
  marker("1");
  let v = await command_line_generic("dir", {});
  let stdout = await command_line("firebase deploy");
  return stdout;
}
