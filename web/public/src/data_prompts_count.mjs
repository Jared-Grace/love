import { function_aliases_for } from "../../../love/public/src/function_aliases_for.mjs";
import { prompt_previous_at } from "../../../love/public/src/prompt_previous_at.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map_index_countdown } from "../../../love/public/src/list_map_index_countdown.mjs";
import { list_slice_end } from "../../../love/public/src/list_slice_end.mjs";
import { data_value } from "../../../love/public/src/data_value.mjs";
import { data_prompts_path } from "../../../love/public/src/data_prompts_path.mjs";
export async function data_prompts_count(offset) {
  let fn = prompt_previous_at;
  let value = await function_aliases_for(fn);
  log({
    value,
  });
  let first = list_first(value);
  let d_path = data_prompts_path();
  let prompts = await data_value("prompts", d_path);
  let sliced = list_slice_end(prompts, offset);
  function lambda_inner(item, index) {
    let together = text_combine_multiple([first, " ", index, " : ", item]);
    return together;
  }
  let mapped = list_map_index_countdown(sliced, lambda_inner);
  return mapped;
}
