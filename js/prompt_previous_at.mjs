import { function_run_line } from "./function_run_line.mjs";
import { list_get_end } from "./list_get_end.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { data_prompts } from "./data_prompts.mjs";
import { subtract } from "./subtract.mjs";
export async function prompt_previous_at(index) {
  arguments_assert(arguments, 1);
  let result = await data_prompts();
  let item = list_get_end(result, subtract(index, 1));
  let r = await function_run_line(item);
  return r;
}
