import { property_get } from "./property_get.mjs";
import { file_open } from "./file_open.mjs";
import { function_current_set } from "./function_current_set.mjs";
export async function function_copy_result_open(r) {
  "Shows a finished copy to the human - the tail every copy-then-open command shares, so the copy itself stays in one place";
  let name = property_get(r, "name");
  let f_path_new = property_get(r, "f_path_new");
  await file_open(f_path_new);
  await function_current_set(name);
  return name;
}
