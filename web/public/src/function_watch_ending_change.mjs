import { string_suffix_without } from "./string_suffix_without.mjs";
import { marker } from "./marker.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function function_watch_ending_change(
  f_name,
  ending_old,
  ending_new,
) {
  marker("1");
  let { unaliased } = await function_name_unalias(f_name);
  let f_name_wrapped = function_name_combine(unaliased, ending_old);
  let without = string_suffix_without(unaliased, ending_old);
  let f_name_new = without + ending_new;
  let v = await function_wrap(unaliased, f_name_new);
  return v;
}
