import { list_join_dot } from "./list_join_dot.mjs";
import { date_now_file } from "./date_now_file.mjs";
export function file_backup_path_ending() {
  let now_file = date_now_file();
  let ending = list_join_dot(["", "backup", now_file]);
  return ending;
}
