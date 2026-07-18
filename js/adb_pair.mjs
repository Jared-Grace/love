import { command_line } from "./command_line.mjs";
export async function adb_pair(host_port, code) {
  let r = await command_line(`adb pair ${host_port} ${code}`);
  return r;
}
