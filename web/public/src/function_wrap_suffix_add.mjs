import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { function_name_combine } from "../../../love/public/src/function_name_combine.mjs";
import { function_wrap } from "../../../love/public/src/function_wrap.mjs";
export async function function_wrap_suffix_add(f_name, suffix) {
  assert_arguments(arguments, 2);
  marker("1");
  let v2 = await function_name_unalias(f_name);
  let unaliased = object_property_get(v2, "unaliased");
  let f_name_wrapped = function_name_combine(unaliased, suffix);
  let v = await function_wrap(unaliased, f_name_wrapped);
  return v;
}
