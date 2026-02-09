import { text_replace_curry_right } from "../../../love/public/src/text_replace_curry_right.mjs";
import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { tautology } from "../../../love/public/src/tautology.mjs";
import { function_multiple_rename_generic } from "../../../love/public/src/function_multiple_rename_generic.mjs";
export async function function_multiple_rename_replace(from, to) {
  assert_arguments(arguments, 2);
  let mapper = text_replace_curry_right(from, to);
  let r = await function_multiple_rename_generic(tautology, mapper);
  return r;
}
