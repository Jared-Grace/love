import { string_suffix_change } from "./string_suffix_change.mjs";
import { marker } from "./marker.mjs";
import { function_name_unalias } from "./function_name_unalias.mjs";
import { function_wrap } from "./function_wrap.mjs";
export async function function_watch_ending_change(
  f_name,
  ending_old,
  ending_new,
) {
  marker("1");
  let { unaliased } = await function_name_unalias(f_name);
  let f_name_new = string_suffix_change(unaliased, ending_old, ending_new);
  let v = await function_wrap(unaliased, f_name_new);
  return v;
}
