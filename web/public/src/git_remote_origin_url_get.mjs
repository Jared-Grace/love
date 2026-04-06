import { property_get } from "../../../love/public/src/property_get.mjs";
import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { command_line_git_folder } from "../../../love/public/src/command_line_git_folder.mjs";
export async function git_remote_origin_url_get(folder) {
  let r = await command_line_git_folder(folder, "remote get-url origin");
  let stdout = property_get(r, "stdout");
  let url = text_trim(stdout);
  return url;
}
