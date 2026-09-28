import { arguments_assert } from "./arguments_assert.mjs";
import { qa_app_commit_gate_run_reuse } from "./qa_app_commit_gate_run_reuse.mjs";
import { property_get } from "./property_get.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { app_shared_name_search } from "./app_shared_name_search.mjs";
import { app_shared_name_latest_text } from "./app_shared_name_latest_text.mjs";
import { qa_app_e2e_happy_run } from "./qa_app_e2e_happy_run.mjs";
export async function html_public_from_latest_check(search) {
  "$plain search";
  "Refuses, by throwing, unless one app is fit to be moved from the stage it waits at into the folder people are sent: every gate that reaches what the app ships is green, and the app can be walked the whole way through as somebody who gets every question right.";
  "★ THE TESTING IS PAID HERE SO THE SENDING NEVER PAYS IT. The human, 2026-09-28: anytime the waiting stage is copied into the folder people are sent, the tests run - so that an urgent sending never waits on them. The waiting stage itself is not what people see and needs no test; the sending afterwards only checks the bytes arrived.";
  "It checks and does not copy, so a caller holding the sending lock can ask it first, outside the lock. The judging can take a quarter of an hour, and inside the lock it would hold back every other sending for that long.";
  "The gates are asked first because they are usually answered from a verdict already reached, and so cost almost nothing; the walk opens a real page each time.";
  arguments_assert(arguments, 1);
  let judged = await qa_app_commit_gate_run_reuse(search);
  let deployable = property_get(judged, "deployable");
  true_is_assert_json(deployable, judged);
  let app_name = await app_shared_name_search(search);
  let stage_name = app_shared_name_latest_text();
  await qa_app_e2e_happy_run(app_name, stage_name);
}
