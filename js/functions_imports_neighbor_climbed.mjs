import { arguments_assert } from "./arguments_assert.mjs";
import { functions_code_offenders_generic } from "./functions_code_offenders_generic.mjs";
import { js_code_imports_neighbor_climbed } from "./js_code_imports_neighbor_climbed.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { folder_repo_love_js_spelled } from "./folder_repo_love_js_spelled.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function functions_imports_neighbor_climbed() {
  arguments_assert(arguments, 0);
  ("Every function of this repo's own whose import lines reach a neighbour by climbing out of the repo and walking back in by the folder's name, each named beside the paths it spells that way.");
  ("The canonicalizing pass already writes these lines the short way, so what is left is files the pass has not been run over since they arrived - and they arrived from a repo standing beside this one, where the long spelling was correct. Nothing goes red on them: they resolve, because the folder is still called what they say it is.");
  ("Only this repo's own files are asked. The sweep behind this one gathers every function in every repository side by side, and in a file that really does live somewhere else the long spelling is the right one and the only one - so asking those would report as broken exactly the lines that are correct.");
  ("Asking every function whether the pass would change it answers this and more, and was measured taking over an hour and a half. This reads each file once and looks at its import lines, so it can be asked whenever the question comes up rather than started and left.");
  let found = await functions_code_offenders_generic(
    js_code_imports_neighbor_climbed,
    "climbed",
  );
  let paths = await functions_names_to_paths();
  let repo_js_path = folder_repo_love_js_spelled();
  function here_is(offender) {
    let f_name = property_get(offender, "f_name");
    let f_path = property_get(paths, f_name);
    let here = text_includes(f_path, repo_js_path);
    return here;
  }
  let r = list_filter(found, here_is);
  return r;
}
