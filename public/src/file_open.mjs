import { marker } from "./marker.mjs";
import { command_line } from "./command_line.mjs";
export async function file_open(filePath) {
  marker("1");
  await command_line(`code "${filePath}"`);
}
