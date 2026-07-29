import { fn_name } from "./fn_name.mjs";
import { repo_functions_names_code_includes } from "./repo_functions_names_code_includes.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { html_style_helpers } from "./html_style_helpers.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { function_html_style_literals_migrate } from "./function_html_style_literals_migrate.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_size } from "./list_size.mjs";
export async function functions_html_style_literals_migrate() {
  "Rewrite every style property set by name across the codebase into the named helper for it.";
  "The helpers are left out of the sweep, and that exclusion is the one thing here that must not be got wrong. A helper's whole body is the call this rewrites, so rewriting it would turn the helper into a call to itself - the padding helper would set padding by calling the padding helper - and the first component styled would recurse until the program ran out of room. It is excluded by name because a name is what the transform can be certain about.";
  let helpers = await html_style_helpers();
  let helper_names = list_map_property(helpers, "name");
  let f_name = fn_name("html_style_set");
  let mentioning = await repo_functions_names_code_includes("love", f_name);
  let asked = list_without_multiple(mentioning, helper_names);
  async function migrated_of(name) {
    let result = await function_html_style_literals_migrate(name, helpers);
    return result;
  }
  let results = await list_map_async(asked, migrated_of);
  ("both filters name the value they want. Asking for the property alone silently compares it against nothing at all, so every entry fails the test and the report reads as an empty list - which is how the first real run of this claimed nothing had changed while it was rewriting twenty files");
  let changed = list_filter_property(results, "changed", true);
  let refused = list_filter_property_not(results, "error_message", "");
  let report = {
    asked: list_size(asked),
    changed: list_map_property(changed, "name"),
    refused: list_map_property(refused, "name"),
    reasons: list_map_property(refused, "error_message"),
  };
  return report;
}
