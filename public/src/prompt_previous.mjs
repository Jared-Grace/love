import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { prompt_previous_get } from "../../../love/public/src/prompt_previous_get.mjs";
import { function_run_line } from "../../../love/public/src/function_run_line.mjs";
export async function prompt_previous(index) {
  assert_arguments(arguments, 1);
  let previous = await prompt_previous_get();
  let r = await function_run_line(previous);
  return r;
}
