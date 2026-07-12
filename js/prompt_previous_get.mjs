import { log_keep } from "./log_keep.mjs";
import { list_last } from "./list_last.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_concat } from "./list_concat.mjs";
import { prompt_previous } from "./prompt_previous.mjs";
import { property_get } from "./property_get.mjs";
import { data_prompts } from "./data_prompts.mjs";
import { function_aliases_inverted } from "./function_aliases_inverted.mjs";
export async function prompt_previous_get() {
  "gets the most recent prompt";
  let inverted = await function_aliases_inverted();
  let prompts = await data_prompts();
  let b = property_get(inverted, prompt_previous.name);
  let other = list_concat([prompt_previous.name], b);
  let difference = list_difference(prompts, other);
  let previous = list_last(difference);
  log_keep(prompt_previous_get.name, previous);
  return previous;
}
