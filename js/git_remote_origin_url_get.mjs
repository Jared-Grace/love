import { text_trim } from "./text_trim.mjs";
import { command_line_git_folder } from "./command_line_git_folder.mjs";
export async function git_remote_origin_url_get(folder) {
  let stdout = await command_line_git_folder(folder, "remote get-url origin");
  let url = text_trim(stdout);
  return url;
}
