import { file_open } from "../../../love/public/src/file_open.mjs";
import { git_ignore_name } from "../../../love/public/src/git_ignore_name.mjs";
export async function git_ignore_open() {
  let g_name = git_ignore_name();
  let r = await file_open(g_name);
  return r;
}
