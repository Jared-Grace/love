import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web } from "./folder_web.mjs";
import { path_join } from "./path_join.mjs";
export function folder_web_join(f_path) {
  "$plain f_path";
  "A path under the folder the stages are kept in, spelled by asking rather than by sticking the word on the front.";
  arguments_assert(arguments, 1);
  let result = folder_web();
  let combined = path_join([result, f_path]);
  return combined;
}
