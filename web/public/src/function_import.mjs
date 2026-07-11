import { function_import_unalias } from "../../../love/public/src/function_import_unalias.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { path_resolve } from "../../../love/public/src/path_resolve.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function function_import(f_name) {
  text_combine("if you need to unalias use ", function_import_unalias.name);
  let v = await function_name_to_path_search(f_name);
  let f = property_get(v, "f_path");
  let f_path = await path_resolve(f);
  const imported = await import(text_combine("file://", f_path));
  const imported_fn = imported[f_name];
  if (typeof imported_fn !== "function") {
    throw new Error(
      text_combine_multiple([
        '❌ The module "',
        f_name,
        '" does not export a default function.',
      ]),
    );
  }
  return imported_fn;
}
