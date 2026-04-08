import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
export function user_data_open() {
  let f_path = user_data_path();
  return f_path;
}
