import { arguments_assert } from "./arguments_assert.mjs";
import { function_wrap } from "./function_wrap.mjs";
import { function_open } from "./function_open.mjs";
export async function function_wrap_open(f_name, f_name_wrapped) {
  arguments_assert(arguments, 2);
  let output = await function_wrap(f_name, f_name_wrapped);
  await function_open(f_name_wrapped);
  return output;
}
