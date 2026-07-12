import { property_get } from "./property_get.mjs";
import { text_suffix_change } from "./text_suffix_change.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function function_watch_ending_change(
  f_name,
  ending_old,
  ending_new,
) {
  let v2 = await function_name_unalias(f_name);
  let unaliased = property_get(v2, "unaliased");
  let f_name_new = text_suffix_change(unaliased, ending_old, ending_new);
  let v = await function_wrap(unaliased, f_name_new);
  return v;
}
