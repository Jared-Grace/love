import { arguments_assert } from "./arguments_assert.mjs";
import { function_app_import_verdict } from "./function_app_import_verdict.mjs";
import { functions_app_specific_imports } from "./functions_app_specific_imports.mjs";
import { functions_cross_app_imports } from "./functions_cross_app_imports.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_last } from "./list_last.mjs";
import { text_split_space } from "./text_split_space.mjs";
export async function functions_app_import_verdicts() {
  arguments_assert(arguments, 0);
  ("What to do about every app-owned name that something outside its app imports today, one answer per name, each carrying the app it claims, who calls it, and which way out that points to.");
  ("It finds its own set from the two readings that report the fault, so it cannot drift from what is really there and needs no list handed to it. The records themselves are a worklist with no advice on it, and this is the advice.");
  ("One answer per imported name rather than per pair. Two functions reaching for the same name are the same question asked twice, and the answer is about the name.");
  ("The imported name is the last word of a reported line, which is safe to read that way because no function name holds a space.");
  let pairs = await functions_app_specific_imports();
  let crossing = await functions_cross_app_imports();
  list_add_multiple(pairs, crossing);
  let names = [];
  for (let pair of pairs) {
    let words = text_split_space(pair);
    let imported = list_last(words);
    let known = list_includes(names, imported);
    if (known) {
      continue;
    }
    list_add(names, imported);
  }
  names.sort();
  let verdicts = [];
  for (let name of names) {
    let verdict = await function_app_import_verdict(name);
    list_add(verdicts, verdict);
  }
  return verdicts;
}
