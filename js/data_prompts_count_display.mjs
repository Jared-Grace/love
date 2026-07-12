import { data_prompts_count } from "./data_prompts_count.mjs";
import { function_aliases_for } from "./function_aliases_for.mjs";
import { prompt_previous_at } from "./prompt_previous_at.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_index_countdown } from "./list_map_index_countdown.mjs";
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
