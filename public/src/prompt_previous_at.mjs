import { log } from "../../../love/public/src/log.mjs";
import { function_run_line } from "../../../love/public/src/function_run_line.mjs";
import { list_get_end } from "../../../love/public/src/list_get_end.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { data_prompts } from "../../../love/public/src/data_prompts.mjs";
export async function prompt_previous_at(index) {
  assert_arguments(arguments, 1);
  let result = await data_prompts();
  let item = list_get_end(result, index);
  log({
    item,
  });
  let r = await function_run_line(item);
  return r;
}
