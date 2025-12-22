import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { path_resolve } from "../../../love/public/src/path_resolve.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
export async function function_import(f_name) {
  let v = await function_name_unalias(f_name);
  let unaliased = object_property_get(v, "unaliased");
  let v2 = await function_name_to_path_search(unaliased);
  log({
    unaliased,
  });
  let f = object_property_get(v2, "f_path");
  let f_path = await path_resolve(f);
  const imported = await import(`file://${f_path}`);
  const imported_fn = imported[unaliased];
  if (typeof imported_fn !== "function") {
    throw new Error(
      `❌ The module "${unaliased}" does not export a default function.`,
    );
  }
  return imported_fn;
}
