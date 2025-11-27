import { command_line } from "../../../love/public/src/command_line.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function restart() {
  marker("1");
  let stdout = await command_line("shutdown -t 0 -r");
}
