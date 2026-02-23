import { command_line } from "../../../love/public/src/command_line.mjs";
export async function sandbox() {
  let r = await command_line("echo %PATH%");
  let stdout = await command_line("npx webpack");
  return r;
}
