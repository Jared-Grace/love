import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_url_stage_local } from "./app_shared_url_stage_local.mjs";
import { app_code } from "./app_code.mjs";
import { app_code_happy_url_walked } from "./app_code_happy_url_walked.mjs";
export async function app_code_tests_run_e2e_happy(stage_name) {
  "$plain stage_name";
  "click all the way through the code course as somebody who gets every question right, walking one named stage of the build on this machine";
  "The stage is asked for rather than fixed here. Somebody who has just edited a lesson wants the folder they are working in walked, and that is what it was pointed at until 2026-09-03; whoever is about to send the app to people wants the folder that is going to be sent walked instead, and until the stage arrived here there was no way to say so. Those two hold the same pages right up until something goes wrong between building one and building the other, which is exactly the case a walk is run to catch.";
  "Walking what is already deployed would be a different thing again - a check on a copy made days ago rather than on either of the ones in hand.";
  "Its twin in the gates walks the same course at a frozen copy of one commit instead, and the two differ in nothing but the address. This one answers about a folder, that one answers about a commit, and neither can stand in for the other.";
  arguments_assert(arguments, 1);
  let url = await app_shared_url_stage_local(app_code, stage_name);
  let walked = await app_code_happy_url_walked(url);
  return walked;
}
