import { command_line_git_prefix } from "../../../love/public/src/command_line_git_prefix.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function command_line_git_folder_text(folder, command_git) {
  let r = text_combine_multiple([
    command_line_git_prefix(),
    "-C ",
    folder,
    " ",
    command_git,
  ]);
  return r;
}
