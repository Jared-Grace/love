import { command_line } from "../../../love/public/src/command_line.mjs";
export async function restart() {
  let stdout = await command_line("shutdown -t 0 -r");
}
