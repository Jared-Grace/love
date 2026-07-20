import { command_line_stdout } from "./command_line_stdout.mjs";
export async function adb_connect(host_port) {
  let r = await command_line_stdout(`adb connect ${host_port}`);
  return r;
}
