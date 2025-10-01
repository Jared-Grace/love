import { marker } from "../../../love/public/src/marker.mjs";
import { function_acronym_to_name } from "../../../love/public/src/function_acronym_to_name.mjs";
import { function_alias_add_generic } from "../../../love/public/src/function_alias_add_generic.mjs";
export async function function_name_unalias(f_name) {
  marker("1");
  var { exists, unaliased: unaliased_actual } =
    await function_alias_add_generic(f_name);
  let { expanded, expandeds } = await function_acronym_to_name(f_name);
  const unaliased = exists
    ? unaliased_actual
    : expanded !== null
      ? expanded
      : f_name;
  let v = {
    unaliased,
    expandeds,
  };
  return v;
}
