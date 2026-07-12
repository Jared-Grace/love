import { file_open } from "./file_open.mjs";
import { user_data_path } from "./user_data_path.mjs";
export async function user_data_open() {
  let f_path = user_data_path();
  await file_open(f_path);
}
