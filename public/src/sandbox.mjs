import { command_line } from "../../../love/public/src/command_line.mjs";
export async function sandbox() {
  return await command_line("echo %PATH%");
}
