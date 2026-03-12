import { command_line_folder } from "../../../love/public/src/command_line_folder.mjs";
export async function command_line_folder_curried_right(folder) {
  return async function command_line_folder_curried_right_result(cmd) {
    return await command_line_folder(cmd, folder);
  };
}
