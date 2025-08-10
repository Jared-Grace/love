import {object_invert} from './object_invert.mjs';
import {function_aliases} from './function_aliases.mjs';
import {function_run_line} from './function_run_line.mjs';
import {data_value} from './data_value.mjs';
import {data_transform} from './data_transform.mjs';
import {function_run_prompt} from './function_run_prompt.mjs';
import {list_last} from './list_last.mjs';
import {list_filter} from './list_filter.mjs';
import {list_difference} from './list_difference.mjs';
export async function prompt_previous() {
  let aliases = await function_aliases();
  inverted = object_invert(aliases);
  let prompts = await data_value("prompts");
  list_difference(prompts, [prompt_previous.name]);
  let previous = list_last(prompts);
  return previous;
  await function_run_line(previous);
}
