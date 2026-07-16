import { app_replace_url_dev } from "./app_replace_url_dev.mjs";
import { app_replace_tests_proof } from "./app_replace_tests_proof.mjs";
export async function app_replace_tests_proof_dev() {
  "run the proof interaction test on the dev build";
  let url = await app_replace_url_dev();
  await app_replace_tests_proof(url);
}
