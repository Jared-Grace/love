import { data_prompts_count } from "../../../love/public/src/data_prompts_count.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
export async function data_prompts() {
  assert_arguments(arguments, 0);
  let offset = 25;
  let result = await data_prompts_count(offset);
  return result;
}
