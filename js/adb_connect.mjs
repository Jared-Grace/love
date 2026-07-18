import { command_line } from "./command_line.mjs";
export async function adb_connect(host_port) {
  let r = await command_line(`adb connect ${host_port}`);
  return r;
}
