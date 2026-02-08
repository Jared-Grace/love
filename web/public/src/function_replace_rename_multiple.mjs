import { text_includes_not } from "../../../love/public/src/text_includes_not.mjs";
import { functions_names } from "../../../love/public/src/functions_names.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
export async function function_replace_rename_multiple(from, to) {
  let f_names = await functions_names();
  async function lambda(f_name) {
    let n = text_includes_not(f_name, from);
    if (n) {
      return;
    }
    let v = await function_rename_replace(f_name, from, to);
  }
  await each_async(f_names, lambda);
}
