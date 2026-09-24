import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_names_reaching_any } from "./function_names_reaching_any.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function firebase_sending_tests_none_gate_run() {
  "Fails when any way of sending the published folder can reach a test run.";
  "★ THE HUMAN'S RULE, ASKED FOR MORE THAN ONCE: SENDING DOES NOT TEST. The published folder means ready to go out, so the question of whether something is sound is asked when it is copied in, and never again when the folder is sent. Sending only checks that the bytes match what was copied and waits for any copying still going on. A test run inside the sending holds the lock for a quarter of an hour, makes every other sending queue behind it, and refuses one app for a fault in another.";
  "A rule remembered is a rule the next change breaks, and this one was broken while it was written down: the note said the check belongs where the app is copied in, and the path that copies and sends in one go still ran the whole check inside the sending lock. So it is read off the imports here instead.";
  "Imports and not calls, because an import is what has to be loaded for the code to run at all, so a test reached on a branch that seldom runs still counts.";
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
  let offenders = await function_names_reaching_any(sending, tests);
  list_empty_is_assert_json(offenders, {
    hint: "sending reaches a test run; move the test to where the app is copied into the published folder",
  });
}
