import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_helpers } from "./html_style_helpers.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { fn_name } from "./fn_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { function_html_style_literals_migrate } from "./function_html_style_literals_migrate.mjs";
import { functions_rewritten_report } from "./functions_rewritten_report.mjs";
export async function functions_html_style_literals_migrate() {
  "Rewrite every style property set by name across the codebase into the named helper for it.";
  "The helpers are left out of the sweep, and that exclusion is the one thing here that must not be got wrong. A helper's whole body is the call this rewrites, so rewriting it would turn the helper into a call to itself - the padding helper would set padding by calling the padding helper - and the first component styled would recurse until the program ran out of room. It is excluded by name because a name is what the transform can be certain about.";
  "Offering the set to the rewrite and saying what came of it is a helper, shared with the sweep that swaps one word for another inside every written-out string. The shape belongs to the offering rather than to either rewrite, which is why the two of them had written the same ending out twice.";
  arguments_assert(arguments, 0);
  let helpers = await html_style_helpers();
  let helper_names = list_map_property(helpers, "name");
  let f_name = fn_name("html_style_set");
  let mentioning = await repo_functions_names_code_includes("love", f_name);
  let asked = list_without_multiple(mentioning, helper_names);
  async function migrated_of(name) {
    let result = await function_html_style_literals_migrate(name, helpers);
    return result;
  }
  let report = await functions_rewritten_report(asked, migrated_of);
  return report;
}
