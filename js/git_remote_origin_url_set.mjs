import { text_combine } from "./text_combine.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function git_remote_origin_url_set(folder, value) {
  let combined = text_combine("remote set-url origin ", value);
  await command_line_git_folder(folder, combined);
}
