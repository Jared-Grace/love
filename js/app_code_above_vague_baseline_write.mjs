import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_above_vague } from "./app_code_lessons_above_vague.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_above_vague_baseline_path } from "./app_code_above_vague_baseline_path.mjs";
import { baseline_known_growth_assert } from "./baseline_known_growth_assert.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_code_above_vague_baseline_write() {
  arguments_assert(arguments, 0);
  ("Rewrite the record of lesson lines pointing at code with a word from what the lessons draw right now. For seeding it once and for shrinking it after a line has been made to show its code - never for blessing a new one, which is the single thing the gate exists to refuse.");
  let told = app_code_lessons_above_vague();
  let known = property_get(told, "offenders");
  let path = app_code_above_vague_baseline_path();
  await baseline_known_growth_assert(
    known,
    path,
    "these lesson lines point at code with a word and did not before - show the code instead: if (a) { ... }, else { ... }, or the whole statement",
  );
  let r = await baseline_known_write(known, path);
  return r;
}
