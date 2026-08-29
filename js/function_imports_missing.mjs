import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_set } from "./functions_names_set.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_imports_missing_specify_set } from "./js_imports_missing_specify_set.mjs";
export async function function_imports_missing(f_name) {
  "$plain f_name";
  arguments_assert(arguments, 1);
  ("one function asked whether its own file names everything it reaches for: the repo functions its body reads and its import lines never bring in - a ReferenceError standing in the file, waiting for the line to run.");
  ("The whole-repo reading beside this one asks the same question of every function there is, and takes three quarters of a minute to answer. That is a price worth paying once before a commit and far too much to pay when a single file has just been saved, so the same question is asked here of the one file that changed.");
  ("It gathers the repo's names for itself, which is the one thing the whole-repo reading deliberately does not do per file. Gathered nine thousand times over that walk it cost thirteen seconds; gathered once for one file it costs a moment, and it is what lets this be asked from anywhere holding nothing but a name.");
  let known = await functions_names_set();
  let parsed = await function_parse_declaration(f_name);
  let ast = property_get(parsed, "ast");
  let missing = js_imports_missing_specify_set(ast, known);
  return missing;
}
