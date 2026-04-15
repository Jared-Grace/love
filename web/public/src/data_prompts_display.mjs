import { data_prompts_count_display } from "../../../love/public/src/data_prompts_count_display.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export async function data_prompts_display() {
  arguments_assert(arguments, 0);
  let offset = data_prompts_count();
  let result = await data_prompts_count_display(offset);
  return result;
}
function data_prompts_count() {
  return 50;
}

