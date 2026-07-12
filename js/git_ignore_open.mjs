import { file_open } from "./file_open.mjs";
import { git_ignore_name } from "./git_ignore_name.mjs";
export async function git_ignore_open() {
  let g_name = git_ignore_name();
  let r = await file_open(g_name);
  return r;
}
