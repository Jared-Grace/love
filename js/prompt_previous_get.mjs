import { list_concat_property } from "./list_concat_property.mjs";
import { fn_name } from "./fn_name.mjs";
import { log_keep } from "./log_keep.mjs";
import { list_last } from "./list_last.mjs";
import { list_difference } from "./list_difference.mjs";
import { data_prompts } from "./data_prompts.mjs";
import { function_aliases_inverted } from "./function_aliases_inverted.mjs";
export async function prompt_previous_get() {
  "gets the most recent prompt";
  let inverted = await function_aliases_inverted();
  let prompts = await data_prompts();
  let other = list_concat_property(
    [fn_name("prompt_previous")],
    inverted,
    fn_name("prompt_previous"),
  );
  let difference = list_difference(prompts, other);
  let previous = list_last(difference);
  log_keep(fn_name("prompt_previous_get"), previous);
  return previous;
}
