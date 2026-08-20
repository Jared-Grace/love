import { folder_backups_join } from "./folder_backups_join.mjs";
import { file_copy } from "./file_copy.mjs";
import { date_now_file } from "./date_now_file.mjs";
import { data_path_generic } from "./data_path_generic.mjs";
import { data_path } from "./data_path.mjs";
import { text_combine } from "./text_combine.mjs";
export async function data_backup() {
  let f_path_from = data_path();
  let inner = date_now_file();
  let suffix = text_combine(".", inner);
  let f_path_to = data_path_generic(suffix, "data");
  let joined = folder_backups_join(f_path_to);
  await file_copy(f_path_from, joined);
}
