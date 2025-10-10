import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_rename_suffix_add_generic } from "../../../love/public/src/function_rename_suffix_add_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_prefix_add(f_name_before, prefix) {
  marker("1");
  ("this swaps the order of the arguments; at this time this design appeared to de-duplicate code");
  let v2 = function lambda(f_name_before, other) {
    let combined = function_name_combine(other, f_name_before);
    return combined;
  };
  let v = await function_rename_suffix_add_generic(prefix, v2, f_name_before);
  return v;
}
