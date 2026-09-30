import { arguments_assert } from "./arguments_assert.mjs";
import { app_replace_url_live } from "./app_replace_url_live.mjs";
import { app_replace_tests_run_e2e } from "./app_replace_tests_run_e2e.mjs";
export async function app_replace_tests_run_e2e_live() {
  "Runs the replace app's end to end tests against the site people are sent to, after it has been sent.";
  "The stage twin walks the folder before it goes; this walks what actually arrived, which is the only answer about what a learner opens.";
  arguments_assert(arguments, 0);
  let url = await app_replace_url_live();
  await app_replace_tests_run_e2e(url);
}
