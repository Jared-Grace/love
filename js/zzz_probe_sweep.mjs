import { text_split_comma_dot_trim } from "./text_split_comma_dot_trim.mjs";
import { function_dependency_path } from "./function_dependency_path.mjs";
import { list_map_async_record_try } from "./list_map_async_record_try.mjs";
export async function zzz_probe_sweep(names_comma, f_name_to) {
  let names = text_split_comma_dot_trim(names_comma);
  async function answer_one(name_one) {
    let answer_found = await function_dependency_path(name_one, f_name_to);
    return answer_found;
  }
  let found = await list_map_async_record_try(names, answer_one);
  return found;
}
