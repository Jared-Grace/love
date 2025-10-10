import { command_line_generic } from "../../../love/public/src/command_line_generic.mjs";
export async function command_line_cmd(command, cmd) {
  let v3 = await command_line_generic(command, {
    cmd,
  });
  return v3;
}
