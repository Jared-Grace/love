import { command_line_generic } from "./command_line_generic.mjs";
export async function command_line_cmd(command, cmd) {
  let r = await command_line_generic(command, {
    cmd,
  });
  return r;
}
