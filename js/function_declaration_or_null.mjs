import { arguments_assert } from "./arguments_assert.mjs";
import { function_exists } from "./function_exists.mjs";
import { function_parse_strict_declaration } from "./function_parse_strict_declaration.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export async function function_declaration_or_null(f_name) {
  "$plain f_name";
  "The written-out function the repo holds under this name, read as a tree, or nothing when the repo answers to no such name.";
  "Every question asked of a repo function by name has to start here, and two of them were starting here in the same four lines each. Asking whether the name is answered to before reading it is what turns an unknown name into an answer rather than a throw, and a caller that wants to ask about several names in a row needs that.";
  "Nothing rather than false, because a name nobody answers to is a refusal and not a no. A caller comparing two functions has to be able to tell the two apart.";
  arguments_assert(arguments, 1);
  let r = await function_exists(f_name);
  let exists = property_get(r, "exists");
  if (not(exists)) {
    return null;
  }
  let parsed = await function_parse_strict_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  return declaration;
}
