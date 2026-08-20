import { app_code_quiz_lenient_names } from "./app_code_quiz_lenient_names.mjs";
import { app_code_quiz_leniency_baseline_path } from "./app_code_quiz_leniency_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_code_quiz_leniency_baseline_write() {
  "Rewrite the record of lessons passable by reading the right answer off the code, from what the course carries right now.";
  "For seeding it once and for shrinking it after a screen has been given the wrong answers it was missing - never for blessing a new one, which is the single thing the gate exists to refuse.";
  let known = await app_code_quiz_lenient_names();
  let path = app_code_quiz_leniency_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "this lesson can now be passed without reading what it teaches and could not before - give its quiz the wrong answers it is missing rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
