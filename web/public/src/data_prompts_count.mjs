import { list_map } from "../../../love/public/src/list_map.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { data_value } from "../../../love/public/src/data_value.mjs";
import { data_prompts_path } from "../../../love/public/src/data_prompts_path.mjs";
export async function data_prompts_count(offset) {
  let d_path = data_prompts_path();
  let prompts = await data_value("prompts", d_path);
  let result = list_slice_end(prompts, offset);
  function lambda(item) {}
  let mapped = list_map(list, lambda);
  return result;
}
