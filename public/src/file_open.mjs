import { marker } from "./marker.mjs";
import { command_line } from "./command_line.mjs";
export async function file_open(filePath) {
  let terminal = true;
  if (false) {
  }
  await command_line(`code "${filePath}"`);
}
