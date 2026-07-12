import { folder_previous_join } from "./folder_previous_join.mjs";
export function folder_previous_2_join(temp_path) {
  let path = folder_previous_join(temp_path);
  let joined = folder_previous_join(path);
  return joined;
}
