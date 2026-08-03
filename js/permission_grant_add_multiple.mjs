import { permission_grant_refusals_names } from "./permission_grant_refusals_names.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { permission_grant_names_write } from "./permission_grant_names_write.mjs";
import { permission_settings_allow_write_from } from "./permission_settings_allow_write_from.mjs";
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
  async function each_asked(unaliased) {
    let already = list_includes(names, unaliased);
    if (already) {
      return;
    }
    let refusals = property_get(refusals_by_name, unaliased);
    list_empty_is_assert_json(refusals, {
      hint: "this function must not be given a standing approval, for the reasons listed - drop it from the batch, narrow the function until they go away, or leave it asking",
      unaliased,
      refusals,
    });
    list_add(names, unaliased);
  }
  await each_async(asked, each_asked);
  let allow = await permission_grant_names_settings_write(names);
  let report = {
    asked: asked.length,
    names: names.length,
    allow,
  };
  return report;
}
