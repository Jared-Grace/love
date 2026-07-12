import { file_read } from "./file_read.mjs";
import { git_ignore_name } from "./git_ignore_name.mjs";
export async function git_ignore_read() {
  let g_name = git_ignore_name();
  let r = await file_read(g_name);
  return r;
}
