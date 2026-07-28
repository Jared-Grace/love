import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_style_helpers } from "./html_style_helpers.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { repo_functions_code } from "./repo_functions_code.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_code_html_style_literals_left } from "./js_code_html_style_literals_left.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { functions_html_style_literals_migrate } from "./functions_html_style_literals_migrate.mjs";
export async function html_style_literal_gate_run() {
  "QA gate: no function sets a style property by name where a named helper already says the same thing.";
  "It is clearable, and it was cleared before it was written: the codemod named in the failure fixes every case it can report, so a red gate here is a command to run rather than a puzzle to solve. It can also go red without anybody writing a literal, when a new helper is added and older code turns out to have been spelling that property by hand all along - which is the more useful of the two, because nothing else would ever have gone looking for those.";
  "The helpers are not held to it. Each one's whole body is the call this objects to, which is what makes it a helper rather than a duplication.";
  let helpers = await html_style_helpers();
  let helper_names = list_map_property(helpers, "name");
  let entries = await repo_functions_code("love");
  function offends_is(entry) {
    let name = property_get(entry, "name");
    let helper_is = list_includes(helper_names, name);
    if (helper_is) {
      return false;
    }
    let code = property_get(entry, "code");
    let left = js_code_html_style_literals_left(code, helpers);
    let offends = greater_than(left, 0);
    return offends;
  }
  let offenders = list_filter(entries, offends_is);
  let names = list_map_property(offenders, "name");
  list_empty_is_assert_json(names, {
    hint: functions_html_style_literals_migrate.name,
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be");
  ("told apart from one that did nothing. Both leave the same empty line, and the");
  ("reader is left inferring a pass from the absence of a complaint.");
  let r = {
    checked: list_size(entries),
    offenders: 0,
  };
  return r;
}
