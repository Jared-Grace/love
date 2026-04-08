import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_param_swap_beginning } from "../../../love/public/src/function_param_swap_beginning.mjs";
export async function function_param_swap_beginning_multiple(f_name) {
  let split = text_split_comma(t);
  let r = await function_param_swap_beginning(f_name);
  return r;
}
