import { app_code_wrong_say_silent_walked } from "./app_code_wrong_say_silent_walked.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_wrong_say_silent_baseline_path } from "./app_code_wrong_say_silent_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_code_wrong_say_silent_baseline_write() {
  "Rewrite the record of code lessons saying nothing when a wrong output is picked, from what the lessons do right now. For seeding it once and for shrinking it after a lesson has been given a reminder - never for blessing a new silent lesson, which is the single thing the gate exists to refuse.";
  let told = app_code_wrong_say_silent_walked();
  let known = property_get(told, "offenders");
  let path = app_code_wrong_say_silent_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these code lessons say nothing when a wrong output is picked and did not before - give them a reminder rather than recording them as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
