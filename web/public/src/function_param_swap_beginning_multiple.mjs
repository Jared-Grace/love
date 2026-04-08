import { each_async } from "../../../love/public/src/each_async.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { function_param_swap_beginning } from "../../../love/public/src/function_param_swap_beginning.mjs";
export async function function_param_swap_beginning_multiple(f_names_comma) {
  let split = text_split_comma(f_names_comma);
  await each_async(split, function_param_swap_beginning);
}
