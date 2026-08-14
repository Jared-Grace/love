import { error } from "./error.mjs";
import { app_replace_rule_sets_v_1_names } from "./app_replace_rule_sets_v_1_names.mjs";
import { app_replace_rule_sets } from "./app_replace_rule_sets.mjs";
import { js_flo_body_empty_return_identifiers_curried_right } from "./js_flo_body_empty_return_identifiers_curried_right.mjs";
import { function_transform_fn } from "./function_transform_fn.mjs";
export async function app_replace_rule_sets_overwrite_from_v_1() {
  "How the list of exercises the app shows was first written: read the names out of the first version of it and put them back as the list itself. Kept as the record of that, and refusing to run.";
  "It reads a list that stopped being added to long ago, so running it now would take the app from seventy-two exercises down to the forty it still names, and the thirty-two lost would go quietly - a list is still a list when it is short. The word generate invited exactly that, being the obvious thing to reach for on hearing the list had drifted, which is why the name says overwrite and where from.";
  error(
    "this rebuilds the exercise list from a version that stopped being kept up, and would drop every exercise added since - add the exercise to the list itself instead",
  );
  let names = await app_replace_rule_sets_v_1_names();
  let r = js_flo_body_empty_return_identifiers_curried_right(names);
  await function_transform_fn(app_replace_rule_sets, r);
}
