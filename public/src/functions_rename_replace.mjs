import { text_replace_curried_right } from "../../../love/public/src/text_replace_curried_right.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { tautology } from "../../../love/public/src/tautology.mjs";
import { functions_rename_generic } from "../../../love/public/src/functions_rename_generic.mjs";
export async function functions_rename_replace(from, to) {
  arguments_assert(arguments, 2);
  let mapper = text_replace_curried_right(from, to);
  let r = await functions_rename_generic(tautology, mapper);
  return r;
}
