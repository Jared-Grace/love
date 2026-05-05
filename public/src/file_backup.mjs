import { path_ending_add } from "../../../love/public/src/path_ending_add.mjs";
import { file_copy } from "../../../love/public/src/file_copy.mjs";
import { list_join_dot } from "../../../love/public/src/list_join_dot.mjs";
import { date_now_file } from "../../../love/public/src/date_now_file.mjs";
export async function file_backup(file_path) {
  let now_file = date_now_file();
  let ending = list_join_dot(["", "backup", now_file]);
  let combined = path_ending_add(file_path, ending);
  await file_copy(file_path, combined);
}
