import { arguments_assert } from "./arguments_assert.mjs";
import { functions_app_import_pairs } from "./functions_app_import_pairs.mjs";
import { functions_app_import_advice } from "./functions_app_import_advice.mjs";
export async function functions_app_import_advice_report() {
  arguments_assert(arguments, 0);
  ("What to do about every app-owned name that something outside its app imports today, one line per name, ready to read.");
  ("The command beside this one gives the same answers as things to count and sort, which is what something reading them wants and not what a person wants. This is the same reading written out for whoever is going to act on it, and it is word for word what a gate says when it stops somebody, so nobody has to learn two shapes of the same advice.");
  let pairs = await functions_app_import_pairs();
  let r = await functions_app_import_advice(pairs);
  return r;
}
