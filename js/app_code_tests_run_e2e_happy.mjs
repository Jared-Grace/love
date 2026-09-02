import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_url_dev_local } from "./app_shared_url_dev_local.mjs";
import { app_code } from "./app_code.mjs";
import { app_code_happy_url_walked } from "./app_code_happy_url_walked.mjs";
export async function app_code_tests_run_e2e_happy() {
  "click all the way through the code course as somebody who gets every question right, walking the dev build on this machine";
  "It is pointed at the dev build on purpose. Walking what is deployed would be a check on a copy made days ago; walking dev is a check on what is about to become that copy - and on what is on the disk this second, which is what somebody who has just edited a lesson wants to know.";
  "Its twin in the gates walks the same course at a frozen copy of one commit instead, and the two differ in nothing but the address. This one answers about the folder, that one answers about a commit, and neither can stand in for the other.";
  arguments_assert(arguments, 0);
  let url = await app_shared_url_dev_local(app_code);
  let walked = await app_code_happy_url_walked(url);
  return walked;
}
