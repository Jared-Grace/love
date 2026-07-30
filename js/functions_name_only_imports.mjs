import { functions_code_offenders_generic } from "./functions_code_offenders_generic.mjs";
import { js_code_name_only_imports } from "./js_code_name_only_imports.mjs";
export async function functions_name_only_imports() {
  "Every function that imports a name only to read the word it is called, with the names it does that to";
  "Each one is a road nothing travels: the import is real, so everything the named function reaches counts as reachable from here, while the code never calls it. One line of prose written this way put an entire download chain inside a game screen's reach and turned a gate red for everybody";
  let offenders = await functions_code_offenders_generic(
    js_code_name_only_imports,
    "names",
  );
  return offenders;
}
