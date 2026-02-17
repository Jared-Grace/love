import { data_prompts_count } from "../../../love/public/src/data_prompts_count.mjs";
import { function_aliases_for } from "../../../love/public/src/function_aliases_for.mjs";
import { prompt_previous_at } from "../../../love/public/src/prompt_previous_at.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { list_map_index_countdown } from "../../../love/public/src/list_map_index_countdown.mjs";
export async function data_prompts_count_display(offset) {
  let fn = prompt_previous_at;
  let value = await function_aliases_for(fn);
  let first = list_first(value);
  let sliced = await data_prompts_count(offset);
  function lambda_inner(item, index) {
    let together = text_combine_multiple([first, " ", index, " : ", item]);
    return together;
  }
  let mapped = list_map_index_countdown(sliced, lambda_inner);
  return mapped;
}
