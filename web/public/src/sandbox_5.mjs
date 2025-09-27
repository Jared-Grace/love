import { command_line } from "./command_line.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
export async function sandbox_5() {
  marker("1");
  log("hi ish");
  let stdout = await command_line(command);
}
