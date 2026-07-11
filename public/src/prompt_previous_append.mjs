import { function_run_line } from "../../../love/public/src/function_run_line.mjs";
import { list_get_end_ } from "../../../love/public/src/list_get_end_1.mjs";
import { data_prompts } from "../../../love/public/src/data_prompts.mjs";
export async function prompt_previous_append(ending) {
  let result = await data_prompts();
  let e = list_get_end_(result);
  e += ending;
  let r = await function_run_line(e);
  return r;
}
