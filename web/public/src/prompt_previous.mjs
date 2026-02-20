import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { prompt_previous_get } from "../../../love/public/src/prompt_previous_get.mjs";
import { function_run_line } from "../../../love/public/src/function_run_line.mjs";
export async function prompt_previous() {
  arguments_assert(arguments, 0);
  let previous = await prompt_previous_get();
  let r = await function_run_line(previous);
  return r;
}
