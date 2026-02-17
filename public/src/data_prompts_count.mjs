import { property_get } from "../../../love/public/src/property_get.mjs";
import { prompt_previous } from "../../../love/public/src/prompt_previous.mjs";
import { list_map_index_countdown } from "../../../love/public/src/list_map_index_countdown.mjs";
import { function_aliases_inverted } from "../../../love/public/src/function_aliases_inverted.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_between_space } from "../../../love/public/src/text_between_space.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { data_value } from "../../../love/public/src/data_value.mjs";
import { data_prompts_path } from "../../../love/public/src/data_prompts_path.mjs";
export async function data_prompts_count(offset) {
  let fn = prompt_previous;
  let inverted = await function_aliases_inverted();
  let value = property_get(object, property_name);
  let d_path = data_prompts_path();
  let prompts = await data_value("prompts", d_path);
  let sliced = list_slice_end(prompts, offset);
  function lambda_inner(item, index) {
    let together = text_combine(index, " " + " ");
    let r = text_between_space(together, item);
    return r;
  }
  let mapped = list_map_index_countdown(sliced, lambda_inner);
  return mapped;
}
