import { marker } from "./marker.mjs";
import { command_line } from "./command_line.mjs";
import { file_read } from "./file_read.mjs";
import { log } from "./log.mjs";
export async function file_open(filePath) {
  let terminal = true;
  if (terminal) {
    log(await file_read(filePath));
  } else {
    await command_line(`code "${filePath}"`);
  }
}
