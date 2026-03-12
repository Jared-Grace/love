import { command_line_folder } from "../../../love/public/src/command_line_folder.mjs";
export async function command_line_folder_curried_right(folder) {
  let r2 = async function command_line_folder_curried_right_result(cmd) {
    let r = await command_line_folder(cmd, folder);
    return r;
  };
  return r2;
}
