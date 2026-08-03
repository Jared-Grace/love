import { property_get } from "./property_get.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { permission_grant_refusals } from "./permission_grant_refusals.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_add } from "./list_add.mjs";
import { permission_grant_names_write } from "./permission_grant_names_write.mjs";
import { permission_settings_allow_write_from } from "./permission_settings_allow_write_from.mjs";
export async function permission_grant_add(unaliased) {
  "let Claude run this one function without asking first, refusing outright if it is a function that must never be handed a standing approval";
  "the safety check runs here, before the rule is written, rather than only afterwards in the gate. Both read the same answers, so neither is stricter than the other; what changes is that a grant nobody would approve is now impossible to write rather than merely reported once it exists.";
  "naming a function that already holds a rule changes nothing and says so, so running this twice is the same as running it once";
  "the name has to be the function's own, not an alias for it: a rule is matched as plain text, so an alias grants whatever it is pointed at later rather than what was approved today. The check below refuses an alias along with everything else it refuses.";
  let names = permission_grant_names();
  let already = list_includes(names, unaliased);
  if (already) {
    let known = {
      name: unaliased,
      added: false,
      names: names.length,
    };
    return known;
  }
  let refusals = await permission_grant_refusals(unaliased);
  list_empty_is_assert_json(refusals, {
    hint: "this function must not be given a standing approval, for the reasons listed - narrow the function until they go away, or leave it asking",
    unaliased,
    refusals,
  });
  list_add(names, unaliased);
  let allow = await permission_grant_names_settings_write(names);
  let report = {
    name: unaliased,
    added: true,
    names: names.length,
    allow,
  };
  return report;
}
