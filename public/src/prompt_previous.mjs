import { marker } from "../../../love/public/src/marker.mjs";
import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { data_prompts } from "../../../love/public/src/data_prompts.mjs";
import { function_aliases_inverted } from "../../../love/public/src/function_aliases_inverted.mjs";
import { function_run_line } from "../../../love/public/src/function_run_line.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_difference } from "../../../love/public/src/list_difference.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function prompt_previous() {
  marker("1");
  let inverted = await function_aliases_inverted();
  let prompts = await data_prompts();
  let b = object_property_get(inverted, prompt_previous.name);
  let other = list_concat([prompt_previous.name], b);
  let difference = list_difference(prompts, other);
  let previous = list_last(difference);
  log_keep(previous);
  let v = await function_run_line(previous);
  return v;
}
