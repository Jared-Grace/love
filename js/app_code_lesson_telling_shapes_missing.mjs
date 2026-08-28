import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { app_code_lesson_family_roots } from "./app_code_lesson_family_roots.mjs";
import { app_code_lesson_telling_shapes_missing_one } from "./app_code_lesson_telling_shapes_missing_one.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
export async function app_code_lesson_telling_shapes_missing() {
  arguments_assert(arguments, 0);
  ("every lesson of the code app whose question bank writes a line in a shape its own telling never shows.");
  ("Shape is several marks, not one, and a lesson misses the check if any of them goes unshown. Whether the line is bracketed or flat. Whether it writes one operator over and over or mixes two of them. Which end a true or a false sits at, because a value on the left reads as a different question from the same value on the right. What kinds of thing stand either side of the operators - a number, a value, a name.");
  ("Empty is the answer today and the answer this is meant to keep. It is the finer of two checks over the same two halves of a lesson: the other asks whether the operator was ever shown at all, this one asks whether the line was ever shown written the way the question writes it.");
  ("The lessons are found by what they do rather than by a list kept here, so a lesson written tomorrow is judged the day it is written and no list can go stale behind it.");
  let names = await repo_love_functions_names();
  let roots = await app_code_lesson_family_roots(names);
  let found = [];
  for (let root of roots) {
    let report = await app_code_lesson_telling_shapes_missing_one(
      root,
      roots,
      names,
    );
    let some = null_not_is(report);
    if (some) {
      list_add(found, report);
    }
  }
  return found;
}
