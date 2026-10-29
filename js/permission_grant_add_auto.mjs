import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { permission_auto_pin_path } from "./permission_auto_pin_path.mjs";
import { file_exists } from "./file_exists.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { json_from } from "./json_from.mjs";
import { file_read } from "./file_read.mjs";
import { property_get } from "./property_get.mjs";
import { permission_auto_checker_fingerprint } from "./permission_auto_checker_fingerprint.mjs";
import { equal_assert_json } from "./equal_assert_json.mjs";
import { permission_auto_refusals } from "./permission_auto_refusals.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { permission_grant_add } from "./permission_grant_add.mjs";
export async function permission_grant_add_auto(unaliased) {
  "Lets Claude grant itself one function, when the auto check finds nothing that needs a person and that check is exactly the one a person last approved.";
  "★ THE CHECK IS COMPARED WITH THE PIN BEFORE IT IS BELIEVED. Claude can edit the check without asking, so a check that had just been weakened would otherwise vouch for whatever it was weakened to let through. The pin is a fingerprint of the check's whole source, written by a person into a folder Claude cannot write unseen; any difference stops every self-grant until a person pins again.";
  "★ THE AUTO CHECK IS STRICTER THAN THE GRANT CHECK. A person granting by name reads the name, so a fixed deletion may pass; nobody reads this one, so anything reaching outside the repo where git cannot hand it back, and anything that writes permission rules, keeps asking.";
  "The rule is written by the ordinary single grant, so there is one way a rule gets written and its own check runs again on the way.";
  arguments_assert(arguments, 1);
  let path = permission_auto_pin_path();
  let pinned_is = await file_exists(path);
  true_is_assert_json(pinned_is, {
    hint: text_combine_multiple([
      "no person has pinned the auto check yet - the human runs: node scripts/r.mjs ",
      fn_name("permission_auto_pin_write"),
    ]),
    path,
  });
  let json = await file_read(path);
  let pin = json_from(json);
  let pinned = property_get(pin, "fingerprint");
  let fingerprint = await permission_auto_checker_fingerprint();
  equal_assert_json(fingerprint, pinned, {
    hint: text_combine_multiple([
      "the auto check's code changed since a person pinned it, so it is not trusted to grant - the human reviews the change and runs: node scripts/r.mjs ",
      fn_name("permission_auto_pin_write"),
    ]),
  });
  let refusals = await permission_auto_refusals(unaliased);
  list_empty_is_assert_json(refusals, {
    hint: "this function needs a person to see it, for the reasons listed - leave it asking, or the human grants it by name",
    unaliased,
    refusals,
  });
  let added = await permission_grant_add(unaliased);
  return added;
}
