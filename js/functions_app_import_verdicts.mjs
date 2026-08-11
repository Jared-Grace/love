import { functions_app_import_pairs } from "./functions_app_import_pairs.mjs";
import { functions_app_import_verdicts_pairs } from "./functions_app_import_verdicts_pairs.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function functions_app_import_verdicts() {
  arguments_assert(arguments, 0);
  ("What to do about every app-owned name that something outside its app imports today, one answer per name, each carrying the app it claims, who calls it, and which way out that points to.");
  ("It finds its own set from the two readings that report the fault, so it cannot drift from what is really there and needs no list handed to it. The records themselves are a worklist with no advice on it, and this is the advice.");
  ("Finding the set is what is left here, because the reading itself is asked of whichever lines it is given, and the gates that report these faults ask the same thing of the few lines that newly appeared.");
  let pairs = await functions_app_import_pairs();
  let verdicts = await functions_app_import_verdicts_pairs(pairs);
  return verdicts;
}
