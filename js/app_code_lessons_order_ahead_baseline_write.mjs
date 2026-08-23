import { app_code_lessons_order_ahead_baseline_path } from "./app_code_lessons_order_ahead_baseline_path.mjs";
import { app_code_lessons_order_ahead_walked } from "./app_code_lessons_order_ahead_walked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
import { property_get } from "./property_get.mjs";
export async function app_code_lessons_order_ahead_baseline_write() {
  arguments_assert(arguments, 0);
  ("Rewrite the record of lessons standing ahead of their own difficulty from the order the course is in right now.");
  ("For seeding it once and for shrinking it after a lesson has been moved back to where it belongs - never for blessing a new one, which is the single thing the gate exists to refuse.");
  let told = app_code_lessons_order_ahead_walked();
  let known = property_get(told, "offenders");
  let path = app_code_lessons_order_ahead_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these lessons stand ahead of their own difficulty now and did not before - move the lesson later in the course rather than recording it as known",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
