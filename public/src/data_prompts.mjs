import { data_prompts_count_display } from "../../../love/public/src/data_prompts_count_display.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function data_prompts() {
  assert_arguments(arguments, 0);
  let offset = 25;
  let result = await data_prompts_count_display(offset);
  return result;
}
