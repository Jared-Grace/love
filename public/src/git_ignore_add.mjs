import { file_transform } from "../../../love/public/src/file_transform.mjs";
import { text_between_newline_curried_right } from "../../../love/public/src/text_between_newline_curried_right.mjs";
import { git_ignore_name } from "../../../love/public/src/git_ignore_name.mjs";
export async function git_ignore_add(f_path) {
  let g_name = git_ignore_name();
  let lambda = text_between_newline_curried_right(f_path);
  await file_transform(g_name, lambda);
  return g_name;
}
