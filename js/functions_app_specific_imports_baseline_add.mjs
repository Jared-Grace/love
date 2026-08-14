import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_add } from "./baseline_known_add.mjs";
import { functions_app_specific_imports } from "./functions_app_specific_imports.mjs";
import { functions_app_specific_imports_baseline_path } from "./functions_app_specific_imports_baseline_path.mjs";
export async function functions_app_specific_imports_baseline_add(names_comma) {
  arguments_assert(arguments, 1);
  "Record NAMED pairs of a function belonging to no app reaching into one, and leave every other such pair still failing.";
  "Its whole-file twin takes everything the repo carries right now, which is the wrong shape for this gate in particular: what it holds is a mixture. A gate registry has to name the app gates it registers, and that pair will never clear however long anybody looks at it. A shared function reaching into one app is a leak and has to be repaired. Absorbing the whole set treats both alike, and afterwards nothing distinguishes the leak that was blessed by accident from the registration that had to be.";
  "A pair is written the way the gate prints it, the importer and the name it reached for with an arrow between them - `importer -> imported`. Several are one comma-joined word, which is how every command here takes a list, and no pair holds a comma so nothing has to be escaped.";
  let names = text_split_comma(names_comma);
  let path = functions_app_specific_imports_baseline_path();
  let offending = await functions_app_specific_imports();
  let r = await baseline_known_add(names, path, offending);
  return r;
}
