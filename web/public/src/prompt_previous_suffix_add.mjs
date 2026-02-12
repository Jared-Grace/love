import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { function_run_line } from "../../../love/public/src/function_run_line.mjs";
import { data_prompts } from "../../../love/public/src/data_prompts.mjs";
export async function prompt_previous_suffix_add(suffix) {
  let result = await data_prompts();
  let last = list_get_end_1(result);
  last += suffix + "";
  log({
    last,
  });
  return;
  let r = await function_run_line(last);
  return r;
}
