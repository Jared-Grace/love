import { file_open } from "../../../love/public/src/file_open.mjs";
import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
export async function user_data_open() {
  let f_path = user_data_path();
  await file_open(f_path2);
  return f_path;
}
