import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_url_stage } from "./app_replace_url_stage.mjs";
import { app_replace_tests_run_e2e } from "./app_replace_tests_run_e2e.mjs";
export async function app_replace_tests_run_e2e_stage(stage_name) {
  "$plain stage_name";
  "Runs the replace app's end to end tests against one named stage of the build on this machine.";
  "The stage is asked for so that whoever is about to send the app to people can have the folder that is going to be sent walked, rather than the folder somebody happens to be working in. The twin naming the working stage is what somebody editing reaches for.";
  arguments_assert(arguments, 1);
  let url = await app_replace_url_stage(stage_name);
  await app_replace_tests_run_e2e(url);
}
