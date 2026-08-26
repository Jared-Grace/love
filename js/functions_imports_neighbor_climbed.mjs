import { arguments_assert } from "./arguments_assert.mjs";
import { functions_code_offenders_generic } from "./functions_code_offenders_generic.mjs";
import { js_code_imports_neighbor_climbed } from "./js_code_imports_neighbor_climbed.mjs";
export async function functions_imports_neighbor_climbed() {
  arguments_assert(arguments, 0);
  ("Every function here whose import lines reach a neighbour by climbing out of the repo and walking back in by the repo folder's name, each named beside the paths it spells that way.");
  ("The canonicalizing pass already writes these lines the short way, so what this finds is the files the pass has not been run over since they arrived - and they arrived from a repo standing beside this one, where the long spelling was correct. Nothing here goes red on them: they resolve, because the folder is still called what they say it is.");
  ("Asking every function whether the pass would change it answers the same question and more, and was measured taking over an hour and a half. This reads each file once and looks at its import lines, so it can be asked whenever the question comes up rather than started and left.");
  let r = await functions_code_offenders_generic(
    js_code_imports_neighbor_climbed,
    "climbed",
  );
  return r;
}
