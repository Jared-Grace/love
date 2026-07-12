import { command_line_git_folder } from "./command_line_git_folder.mjs";
import { text_combine } from "./text_combine.mjs";
export async function git_add_folder(folder, added) {
  await command_line_git_folder(folder, text_combine("add ", added));
}
