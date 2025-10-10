import { path_join } from "../../../love/public/src/path_join.mjs";
export function local_function_path(fn, file_name) {
  let joined2 = path_join(["D:\\user\\storage\\function", fn.name, file_name]);
  return joined2;
}
