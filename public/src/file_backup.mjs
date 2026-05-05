import { file_copy } from "../../../love/public/src/file_copy.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { list_join_dot } from "../../../love/public/src/list_join_dot.mjs";
import { date_now_file } from "../../../love/public/src/date_now_file.mjs";
import { path_extension } from "../../../love/public/src/path_extension.mjs";
import { path_without_extension } from "../../../love/public/src/path_without_extension.mjs";
export async function file_backup(file_path) {
  let p = path_without_extension(file_path);
  let extension = path_extension(file_path);
  let now_file = date_now_file();
  let joined = list_join_dot([p, "backup", now_file]);
  let combined = text_combine(joined, extension);
  await file_copy(file_path, combined);
}
