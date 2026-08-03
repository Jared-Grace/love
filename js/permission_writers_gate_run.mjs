import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { functions_permission_seams } from "./functions_permission_seams.mjs";
import { functions_callers_closure } from "./functions_callers_closure.mjs";
import { permission_writers_grantable } from "./permission_writers_grantable.mjs";
import { permission_grant_refusals_names } from "./permission_grant_refusals_names.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_writers_gate_run() {
  "gate: a function that can reach Claude's own permission rules must be refused a standing approval, unless it is one of the few recorded as safe to grant";
  "the safety check works out what it can from the parameter list, and refuses a rule writer only when it also declares arguments - the reasoning being that a function taking nothing can only write what committed source already says. That is true of a generator and false of anything reading from a file, and the prose of the check said so: an argument-free writer sourced from outside would pass, none existed yet, and if one were written the check would let it through.";
  "one was written. The restorer of departed grants takes no arguments and reads which approvals to put back off the settings file, and it was reported clean to grant for as long as it existed. Nothing found that but a person reading it, which is the reading this gate is here to stop paying for.";
  "the answer is not a stricter parameter rule, which would refuse the two generators that legitimately hold rules today. It is that reaching a rule writer demands a decision either way: a refusal the check can see, or a name on the short list of exceptions, argued for in the commit that adds it.";
  let seams = functions_permission_seams();
  let seams_comma = list_join_comma(seams);
  let writers = await functions_callers_closure(seams_comma);
  let grantable = permission_writers_grantable();
  let refusals_by_name = await permission_grant_refusals_names(writers);
  let open = [];
  for (let f_name of writers) {
    let allowed = list_includes(grantable, f_name);
    if (allowed) {
      continue;
    }
    let refusals = property_get(refusals_by_name, f_name);
    let clean = list_empty_is(refusals);
    if (clean) {
      list_add(open, f_name);
    }
  }
  list_empty_is_assert_json(open, {
    hint: text_combine_multiple([
      "these functions can reach Claude's own permission rules and nothing refuses them a standing approval - say so in the function's own prose with the words ",
      fn_name("permission_grant_declined_phrase"),
      " reads, or, if it really is safe to grant, add it to ",
      fn_name("permission_writers_grantable"),
      " so the exception stands in a commit",
    ]),
    open,
  });
  let stale = [];
  for (let blessed of grantable) {
    let reaches = list_includes(writers, blessed);
    if (reaches) {
      continue;
    }
    list_add(stale, blessed);
  }
  list_empty_is_assert_json(stale, {
    hint: text_combine_multiple([
      "these names are recorded as rule writers safe to grant but no longer reach a rule writer at all - take them out of ",
      fn_name("permission_writers_grantable"),
      ", since an exception that covers nothing hides the next one that would",
    ]),
    stale,
  });
  let r = {
    writers: writers.length,
    grantable: grantable.length,
    open: 0,
  };
  return r;
}
