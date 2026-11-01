import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_description_baseline_path } from "./app_shared_description_baseline_path.mjs";
import { baseline_known_read } from "./baseline_known_read.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_map } from "./list_map.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { baseline_known_write } from "./baseline_known_write.mjs";
export async function app_shared_description_baseline_rename(
  a_name_before,
  a_name_after,
) {
  "$plain a_name_before";
  "$plain a_name_after";
  arguments_assert(arguments, 2);
  ("Moves an app's place in the record of apps saying nothing about themselves to its new name. The record is a list of bare app names, which no function rename reaches - so a renamed app left behind in it reads as one app that stopped being silent and another that newly is, and the gate refuses both.");
  ("Nothing moves when the app was never in the record: an app that already says something about itself keeps saying it under its new name.");
  let path = app_shared_description_baseline_path();
  let known = await baseline_known_read(path);
  let listed = list_includes(known, a_name_before);
  if (not(listed)) {
    return false;
  }
  function name_lambda(name) {
    if (equal(name, a_name_before)) {
      return a_name_after;
    }
    return name;
  }
  let moved = list_map(known, name_lambda);
  let sorted = list_sort_text(moved);
  await baseline_known_write(sorted, path);
  return true;
}
