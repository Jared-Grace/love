import { each_async } from "../../../love/public/src/each_async.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_param_swap_beginning } from "../../../love/public/src/function_param_swap_beginning.mjs";
export async function function_param_swap_beginning_multiple(f_name) {
  let split = text_split_comma(f_name);
  async function lambda(item) {}
  await each_async(list, lambda);
  let r = await function_param_swap_beginning(f_name);
  return r;
}
