import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { apps_all_main_fns_stale } from "./apps_all_main_fns_stale.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export async function apps_all_main_fns_gate_run() {
  "Gate: the written list of every app must still say what the repo actually holds - no app here missing from it, and no name on it that is not an app any more.";
  "held against nothing rather than against a list of the ones already wrong, because the list is GENERATED. Anything it gets wrong is one command away from right, so there is never a reason to carry a failure forward.";
  "this exists because a missing app is silent. The page that gathers every app reads this list, so an app left off it is not broken, not slow and not wrong - it is simply not offered, and no reader of that page can see that anything is absent. Measured 2026-08-23, the music app had been missing from it.";
  "the derived list is counted before the differences are read, because two empty differences are also what a sweep that found no apps at all hands back.";
  let report = await apps_all_main_fns_stale();
  let derived = property_get(report, "derived");
  list_empty_not_is_assert_json(derived, {
    hint: "no app was found at all, which is not a pass - it is a sweep that looked at nothing. Either the public folders it reads have moved, or no entry point is being recognised",
  });
  let missing = property_get(report, "missing");
  let extra = property_get(report, "extra");
  let both = list_concat(missing, extra);
  let fix = fn_name("apps_all_main_fns_generate");
  let hint = text_combine_multiple([
    "the written list of every app no longer matches the apps that are here - write it out again with ",
    fix,
  ]);
  list_empty_is_assert_json(both, {
    hint,
    missing,
    extra,
  });
  let r = {
    apps: derived.length,
  };
  return r;
}
