import { function_wrap_suffix_add_generic } from "../../../love/public/src/function_wrap_suffix_add_generic.mjs";
import { text_combine } from "./text_combine.mjs";
export async function function_wrap_append(f_name, ending) {
  let fn = text_combine;
  let r = await function_wrap_suffix_add_generic(f_name, fn, ending);
  return r;
}
