import { function_rename_suffix_add_generic } from "../../../love/public/src/function_rename_suffix_add_generic.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_rename_suffix_remove(f_name_before, suffix) {
  marker("1");
  function lambda(f_name_before, suffix) {}
  let v = await function_rename_suffix_add_generic(
    suffix,
    lambda,
    f_name_before,
  );
  return v;
}
