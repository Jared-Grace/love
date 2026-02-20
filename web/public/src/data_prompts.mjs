import { data_prompts_count } from "../../../love/public/src/data_prompts_count.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
export async function data_prompts() {
  arguments_assert(arguments, 0);
  let offset = 25;
  let result = await data_prompts_count(offset);
  return result;
}
