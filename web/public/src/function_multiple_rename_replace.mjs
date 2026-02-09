import { text_replace } from "../../../love/public/src/text_replace.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { tautology } from "../../../love/public/src/tautology.mjs";
import { function_multiple_rename_generic } from "../../../love/public/src/function_multiple_rename_generic.mjs";
export async function function_multiple_rename_replace(filter, from, to) {
  assert_arguments(arguments, 3);
  function lambda(f_name_before) {
    let f_name_wrapped = text_replace(f_name_before, from, to);
    return f_name_wrapped;
  }
  let r = await function_multiple_rename_generic(tautology, lambda);
  return r;
}
