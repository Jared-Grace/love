import { command_line_generic } from "./command_line_generic.mjs";
export async function command_line_folder(cmd, folder) {
  let r = await command_line_generic(cmd, {
    cwd: folder,
  });
  return r;
}
