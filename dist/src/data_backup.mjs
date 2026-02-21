import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_copy } from "../../../love/public/src/file_copy.mjs";
import { date_now_file } from "../../../love/public/src/date_now_file.mjs";
import { data_path_generic } from "../../../love/public/src/data_path_generic.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
export async function data_backup() {
  let f_path_from = data_path();
  let inner = date_now_file();
  let f_path_to = data_path_generic("." + inner, "data");
  let joined = path_join(["backups", f_path_to]);
  await file_copy(f_path_from, joined);
}
