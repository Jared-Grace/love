import { data_prompts_offset } from "./data_prompts_offset.mjs";
import { data_prompts_count } from "./data_prompts_count.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function data_prompts() {
  arguments_assert(arguments, 0);
  let offset = await data_prompts_offset();
  let result = await data_prompts_count(offset);
  return result;
}
