import { each_async } from "../../../love/public/src/each_async.mjs";
import { function_rename_replace } from "../../../love/public/src/function_rename_replace.mjs";
import { text_includes_not } from "../../../love/public/src/text_includes_not.mjs";
export async function function_replace_rename_multiple_generic(
  from,
  to,
  f_names,
) {
  async function lambda(f_name) {
    let n = text_includes_not(f_name, from);
    if (n) {
      return;
    }
    let v = await function_rename_replace(f_name, from, to);
  }
  await each_async(f_names, lambda);
}
