import { arguments_assert } from "./arguments_assert.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_code_lessons_review_since_lesson_imports_of } from "./app_code_lessons_review_since_lesson_imports_of.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_includes } from "./list_includes.mjs";
export async function app_code_lessons_review_since_lesson_reached_paths(
  lesson_name,
  imports_remembered,
) {
  arguments_assert(arguments, 2);
  ("every file the lesson stands on, however it is named. The walk used to turn aside at any name outside the lesson prefix, on the reasoning that a lesson reaches the whole of the list and text machinery through its containers and none of that is what the reading is asking about.");
  ("That reasoning was answering the wrong question. What the reading needs is how many lessons stand on a changed file, and the counting says by itself whether a file is machinery: a file the whole run reaches is reported once as the whole run, prefix or no prefix. The prefix was doing that job by guessing from a name instead, and it guessed wrong in one direction that matters - a helper written for a single lesson and not named after it was invisible, so an edit to it was reported nowhere at all.");
  ("A word typed into a reading is the thing that goes stale silently, which is why it is gone rather than widened. Nobody has to remember to add a second prefix here when the next family of helpers is named something else.");
  let seen = {};
  seen[lesson_name] = true;
  let waiting = [lesson_name];
  let paths = [];
  while (greater_than(list_size(waiting), 0)) {
    let name = waiting.pop();
    let reached_path = text_combine_multiple(["js/", name, ".mjs"]);
    paths.push(reached_path);
    let imported = await app_code_lessons_review_since_lesson_imports_of(
      name,
      imports_remembered,
    );
    for (let imported_name of imported) {
      if (seen[imported_name]) {
        continue;
      }
      seen[imported_name] = true;
      waiting.push(imported_name);
    }
  }
  return paths;
}
