import {function_run_line} from './function_run_line.mjs';
import {data_value} from './data_value.mjs';
import {data_transform} from './data_transform.mjs';
import {function_run_prompt} from './function_run_prompt.mjs';
import {list_last} from './list_last.mjs';
export async function prompt_previous() {
  let prompts = await data_value("prompts");
  let previous = list_last(prompts);return previous
  await function_run_line(previous);
}
