import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { permission_grant_refusals } from "./permission_grant_refusals.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { function_grant_declined_is } from "./function_grant_declined_is.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { permission_grant_names_settings_write } from "./permission_grant_names_settings_write.mjs";
import { permission_grants_baseline_bless } from "./permission_grants_baseline_bless.mjs";
export async function permission_grant_add_declined(unaliased) {
  "let Claude run this one function without asking first, and record in the same breath that the safety check refuses it - the way in for a grant that was weighed and wanted anyway";
  (fn_name("permission_grants_baseline_bless"),
    " is the way out once a failing rule already exists, and it reads the flagged list, which only ever holds rules that are written. ",
    fn_name("permission_grant_add"),
    " refuses to write one that fails. So a function granted after the check went in could never reach the blessing at all: the documented way out was open only to rules old enough to predate the check, and every new judgment call had nowhere to go. This is the door in.");
  ("a function that asked in its own words never to be granted is refused here too, and that refusal is the one thing this command cannot talk past. Everything else the check reports is read off a name or a call graph and can be wrong about what the name means; that one is the author speaking about their own function, so a command able to override it would empty every such refusal in the repo at once.");
  ("a grant that passes the check outright is refused as well. It belongs in ",
    fn_name("permission_grant_add"),
    ", and a baseline entry recording a refusal that is not there would go stale the moment it was written.");
  ("the rule is written before the baseline entry because the blessing reads the flagged list, and a function is only flagged once it holds a rule. Between the two writes the gate would read red, which is why they are one command and not two.");
  ("do NOT grant. It writes allow rules, and it writes the record of which refused grants were allowed to stand - the two things that have to be seen one typed name at a time.");
  let refusals = await permission_grant_refusals(unaliased);
  list_empty_not_is_assert_json(refusals, {
    hint: text_combine_multiple([
      "this function passes the safety check, so it wants ",
      fn_name("permission_grant_add"),
      " and nothing here to record",
    ]),
    unaliased,
  });
  let declined = await function_grant_declined_is(unaliased);
  false_is_assert_json(declined, {
    hint: "this function has asked in its own words never to be handed a standing approval, and that is the one refusal no command overrides - read what it says and leave it asking",
    unaliased,
  });
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
  list_add(names, unaliased);
  let allow = await permission_grant_names_settings_write(names);
  let blessed = await permission_grants_baseline_bless(unaliased);
  let report = {
    name: unaliased,
    added: true,
    names: names.length,
    allow,
    blessed,
  };
  return report;
}
