import { command_line_stdout } from "./command_line_stdout.mjs";
export async function adb_pair(host_port, code) {
  let r = await command_line_stdout(`adb pair ${host_port} ${code}`);
  return r;
}
