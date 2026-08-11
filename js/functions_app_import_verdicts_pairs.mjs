import { arguments_assert } from "./arguments_assert.mjs";
import { functions_app_import_names } from "./functions_app_import_names.mjs";
import { function_app_import_verdict } from "./function_app_import_verdict.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_app_import_verdicts_pairs(pairs) {
  arguments_assert(arguments, 1);
  ("What to do about every app-owned name named in a run of reported lines, one answer per name.");
  ("The reading is the same whichever record the lines came out of, so it is done here and the caller only says which lines it is asking about - the whole of both records when a person asks, and just the newly appeared ones when a gate does.");
  let names = functions_app_import_names(pairs);
  let verdicts = [];
  for (let name of names) {
    let verdict = await function_app_import_verdict(name);
    list_add(verdicts, verdict);
  }
  return verdicts;
}
