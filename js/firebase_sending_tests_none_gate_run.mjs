import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { function_names_reaching_any_walked } from "./function_names_reaching_any_walked.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function firebase_sending_tests_none_gate_run() {
  "Fails when any way of sending the published folder can reach a test run.";
  "★ THE HUMAN'S RULE, ASKED FOR MORE THAN ONCE: SENDING DOES NOT TEST. The published folder means ready to go out, so the question of whether something is sound is asked when it is copied in, and never again when the folder is sent. Sending only checks that the bytes match what was copied and waits for any copying still going on. A test run inside the sending holds the lock for a quarter of an hour, makes every other sending queue behind it, and refuses one app for a fault in another.";
  "A rule remembered is a rule the next change breaks, and this one was broken while it was written down: the note said the check belongs where the app is copied in, and the path that copies and sends in one go still ran the whole check inside the sending lock. So it is read off the imports here instead.";
  "Imports and not calls, because an import is what has to be loaded for the code to run at all, so a test reached on a branch that seldom runs still counts.";
  "How many functions the walk opened travels out beside the verdict. Both lists here are written out by hand, so a sending door renamed or a test renamed leaves this gate green while watching nothing at all - and five names that reach nothing and five names that reach two thousand functions and hold no test between them answer exactly the same word otherwise.";
  arguments_assert(arguments, 0);
  let sending = [
    fn_name("firebase_deploy"),
    fn_name("firebase_deploy_locked_generic"),
    fn_name("firebase_deploy_promote_generic"),
    fn_name("firebase_apps_frozen_unchanged_assert_deploy"),
    fn_name("qa_promoted_publish"),
  ];
  let tests = [
    fn_name("qa_gate_run_unlocked"),
    fn_name("qa_app_commit_gate_run_at"),
    fn_name("qa_app_e2e_happy_run"),
  ];
  let walked = await function_names_reaching_any_walked(sending, tests);
  let offenders = property_get(walked, "offenders");
  list_empty_is_assert_json(offenders, {
    hint: "sending reaches a test run; move the test to where the app is copied into the published folder",
  });
  let reached = property_get(walked, "reached");
  let r = {
    reached,
  };
  return r;
}
