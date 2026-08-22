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
  lesson_prefix,
) {
  arguments_assert(arguments, 3);
  ("the walk turns aside at any name outside the lesson prefix, which is what keeps it small: a lesson reaches the whole of the list and text machinery through its containers, and none of that is what this is asking about");
  let seen = [lesson_name];
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
      if (text_starts_with(imported_name, lesson_prefix)) {
        if (list_includes(seen, imported_name)) {
          continue;
        }
        seen.push(imported_name);
        waiting.push(imported_name);
      }
    }
  }
  return paths;
}
