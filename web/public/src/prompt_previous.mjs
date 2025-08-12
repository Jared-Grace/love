import { log_keep } from "./log_keep.mjs";
import { data_prompts } from "./data_prompts.mjs";
import { function_aliases_inverted } from "./function_aliases_inverted.mjs";
import { object_invert } from "./object_invert.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { function_run_line } from "./function_run_line.mjs";
import { data_value } from "./data_value.mjs";
import { data_transform } from "./data_transform.mjs";
import { function_run_prompt } from "./function_run_prompt.mjs";
import { list_last } from "./list_last.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_concat } from "./list_concat.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { log } from "./log.mjs";
export async function prompt_previous() {
  let inverted = await function_aliases_inverted();
  let prompts = await data_prompts();
  let b = object_property_get(inverted, prompt_previous.name);
  let other = list_concat([prompt_previous.name], b);
  let difference = list_difference(prompts, other);
  let previous = list_last(difference);
  log_keep(previous);
  return await function_run_line(previous);
}
