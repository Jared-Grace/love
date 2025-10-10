import { not } from "../../../love/public/src/not.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { function_name_to_parts } from "../../../love/public/src/function_name_to_parts.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function functions_rename_replace(from) {
  marker("1");
  let f_names = await functions_names();
  async function lambda(f_name) {
    let parts = function_name_to_parts(f_name);
    let includes = list_includes(parts, from);
    let n = not(includes);
    if (n) {
      return;
    }
    let v = await function_rename_replace(f_name_before, from, to);
  }
  await each_async(f_names, lambda);
}
