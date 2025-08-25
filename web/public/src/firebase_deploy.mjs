import { command_line } from "./command_line.mjs";
import { marker } from "./marker.mjs";
export async function firebase_deploy() {
  marker("1");
  let stdout = await command_line("firebase deploy");
}
