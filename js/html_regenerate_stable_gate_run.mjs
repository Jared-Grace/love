import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_regenerate_stable_check } from "./html_regenerate_stable_check.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
export async function html_regenerate_stable_gate_run() {
  "Fails when writing a page out again would not settle - when the page that comes back would come back different again next time.";
  "Held against nothing rather than against a list of the ones that already fail, because every page passed the day this was written and a page that stops settling is a new fault rather than an old one being uncovered.";
  "The pages that settled are counted before the ones that failed are read, because an empty list of failures is also what a sweep that looked at nothing hands back.";
  let report = await html_regenerate_stable_check();
  let settled = property_get(report, "settled");
  list_empty_not_is_assert_json(settled, {
    hint: "no page settled, which is not a pass - it is a sweep that found nothing to look at. Either the folders it reads have moved, or every page is now refused before it is checked",
  });
  let offenders = property_get(report, "offenders");
  list_empty_is_assert_json(offenders, {
    hint: text_combine_multiple([
      "regenerating one of these pages would change it, and regenerating the result would change it again - so the page never settles and each pass drifts further from what the app wrote. Look at what ",
      fn_name("html_code"),
      " puts around a body that ",
      fn_name("html_code_body_own"),
      " does not take back off, or at a title that ",
      fn_name("html_code_app_name"),
      " does not turn back into a name",
    ]),
    offenders,
  });
  let checked = list_size(settled);
  let counted = {
    checked,
  };
  return counted;
}
