import { list_map_index } from "../../../love/public/src/list_map_index.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { data_value } from "../../../love/public/src/data_value.mjs";
import { data_prompts_path } from "../../../love/public/src/data_prompts_path.mjs";
export async function data_prompts_count(offset) {
  let d_path = data_prompts_path();
  let prompts = await data_value("prompts", d_path);
  let result = list_slice_end(prompts, offset);
  function lambda(item, index) {
    let r = index + " " + item;
    return r;
  }
  let mapped = list_map_index(list, lambda);
  return result;
}
