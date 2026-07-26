import { html_style_helpers } from "./html_style_helpers.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { functions_names_code_includes } from "./functions_names_code_includes.mjs";
import { html_style_set } from "./html_style_set.mjs";
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
  let f_name = html_style_set.name;
  let mentioning = await functions_names_code_includes(f_name);
  let asked = list_without_multiple(mentioning, helper_names);
  async function migrated_of(name) {
    let result = await function_html_style_literals_migrate(name, helpers);
    return result;
  }
  let results = await list_map_async(asked, migrated_of);
  let changed = list_filter_property(results, "changed");
  let report = {
    asked: list_size(asked),
    changed: list_map_property(changed, "name"),
  };
  return report;
}
