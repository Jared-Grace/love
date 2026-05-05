import { list_join_dot } from "../../../love/public/src/list_join_dot.mjs";
import { date_now_file } from "../../../love/public/src/date_now_file.mjs";
export function file_backup_path() {
  let now_file = date_now_file();
  let ending = list_join_dot(["", "backup", now_file]);
  return ending;
}
