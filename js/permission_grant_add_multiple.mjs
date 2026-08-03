import { list_empty_is } from "./list_empty_is.mjs";
import { not } from "./not.mjs";
import { permission_grant_names_settings_write } from "./permission_grant_names_settings_write.mjs";
import { permission_grant_refusals_names } from "./permission_grant_refusals_names.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export async function permission_grant_add_multiple(names_comma) {
  "let Claude run this whole set of functions without asking first, so a batch of grants costs the human one approval naming every function rather than one approval each";
  "the refusal check still runs per name, and it runs before anything is written, so one name that must never hold a standing approval stops the whole batch rather than being written and reported afterwards";
  "the list is read once and written once on purpose. The single-name adder reads the granted names from a generated module, which the loader hands back from memory unchanged however many times the file underneath it is rewritten - so calling it in a loop had every pass start from the same stale list and overwrite the pass before it, leaving only the last name of the batch. Reading once also spends the expensive settings render once instead of once per name.";
  let asked = text_split_comma(names_comma);
  let names = permission_grant_names();
  let missing = list_without_multiple(asked, names);
  ("Every verdict is asked for in one sweep because the answers that do not depend on which function is being asked about cost a walk of the whole repo and the single-name check makes them fresh every time it is called");
  let refusals_by_name = await permission_grant_refusals_names(missing);
  ("Every name is judged before any one of them is allowed to stop the batch, so a single run names every function that cannot hold a grant. Stopping at the first sent the caller round again to learn the second, and a batch of twenty-nine took five runs to find its five refusals - each run walking the whole repo again to answer a question it had already answered.");
  let refused = [];
  for (let unaliased of missing) {
    let refusals = property_get(refusals_by_name, unaliased);
    let none = list_empty_is(refusals);
    if (not(none)) {
      let entry = {
        unaliased,
        refusals,
      };
      list_add(refused, entry);
    }
  }
  list_empty_is_assert_json(refused, {
    hint: "these functions must not be given a standing approval, for the reasons listed against each - drop them from the batch, narrow each one until its reasons go away, or leave it asking",
  });
  for (let unaliased of missing) {
    let already = list_includes(names, unaliased);
    if (already) {
      continue;
    }
    list_add(names, unaliased);
  }
  let allow = await permission_grant_names_settings_write(names);
  let report = {
    asked: asked.length,
    names: names.length,
    allow,
  };
  return report;
}
