import { data_prompts_offset } from "./data_prompts_offset.mjs";
import { data_prompts_count_display } from "./data_prompts_count_display.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function data_prompts_display() {
  arguments_assert(arguments, 0);
  let offset = data_prompts_offset();
  let result = await data_prompts_count_display(offset);
  return result;
}
