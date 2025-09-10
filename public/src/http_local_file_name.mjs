import { http_local } from "./http_local.mjs";
import { path_join } from "./path_join.mjs";
export function http_local_file_name(url) {
  let joined = path_join(["D:\\user\\storage\\function", http_local.name]);
}
