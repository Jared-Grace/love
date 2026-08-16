import { permission_grant_names_fresh } from "./permission_grant_names_fresh.mjs";
import { not } from "./not.mjs";
import { permission_grant_names_settings_write } from "./permission_grant_names_settings_write.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { permission_grant_refusals } from "./permission_grant_refusals.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_add } from "./list_add.mjs";
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
  ("the list is read a second time here, off the file rather than out of memory, because the check above spends a walk of the whole repo and another Claude granting during that walk has rewritten the file since. The batch adder says the rest of why.");
  let names_now = await permission_grant_names_fresh();
  ("asked again against the list as it is now, because the peer whose write this is merging into may have been granting this very name - and a name spelled twice renders the same rule twice");
  let arrived = list_includes(names_now, unaliased);
  if (not(arrived)) {
    list_add(names_now, unaliased);
  }
  let allow = await permission_grant_names_settings_write(names_now);
  let report = {
    name: unaliased,
    added: true,
    names: names_now.length,
    allow,
  };
  return report;
}
