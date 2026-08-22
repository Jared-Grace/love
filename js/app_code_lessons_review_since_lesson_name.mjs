import { app_code_lessons_review_since_helpers_had } from "./app_code_lessons_review_since_helpers_had.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lessons_prod_last_fn } from "./app_code_lessons_prod_last_fn.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { list_includes } from "./list_includes.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
export function app_code_lessons_review_since_lesson_name(
  r2,
  names_before,
  files_of_lesson,
) {
  arguments_assert(arguments, 3);
  let names_after = property_get(r2, "names_after");
  let cut_fn = app_code_lessons_prod_last_fn();
  let cut_place = list_index_of(names_after, cut_fn.name) + 1;
  let lessons_added = [];
  let lessons_changed = [];
  let lessons_moved = [];
  let lessons_hidden = [];
  let place_number = 0;
  for (let lesson_name of names_after) {
    place_number = place_number + 1;
    if (list_includes(names_before, lesson_name)) {
      let place_before = list_index_of(names_before, lesson_name) + 1;
      if (not_equal(place_before, place_number)) {
        lessons_moved.push({
          lesson: lesson_name,
          was: place_before,
          now: place_number,
        });
      }
      if (greater_than(place_number, cut_place)) {
        lessons_hidden.push({
          lesson: lesson_name,
          was: place_before,
          now: place_number,
        });
      }
      let files_edited = files_of_lesson[lesson_name];
      if (files_edited) {
        ("the files come back with the lesson so a reader can go straight to the change rather than looking the family up again - and so that asking how big each change is costs no second walk");
        lessons_changed.push({
          place: place_number,
          lesson: lesson_name,
          files: files_edited,
        });
      }
    } else {
      lessons_added.push({
        place: place_number,
        lesson: lesson_name,
      });
    }
  }
  ("A lesson taken out of the run is found by reading the other list, because the walk above only ever visits lessons that still exist. Nothing else in this reading would mention it: it has no place now, so it cannot be moved or hidden, and it has no file left to have been edited.");
  ("It matters more than its rarity suggests. A learner who worked a lesson and can no longer find it has lost a thing they were told they had finished, and that is the one change here that a release cannot undo later.");
  let lessons_removed = [];
  let place_was = 0;
  for (let lesson_name of names_before) {
    place_was = place_was + 1;
    if (list_includes(names_after, lesson_name)) {
      continue;
    }
    lessons_removed.push({
      lesson: lesson_name,
      was: place_was,
    });
  }
  let helpers_shared_edited = property_get(r2, "helpers_shared_edited");
  let helpers_annotated = app_code_lessons_review_since_helpers_had(
    helpers_shared_edited,
    names_before,
  );
  let r = {
    names_after,
    helpers_shared_edited: helpers_annotated,
    cut_fn,
    cut_place,
    lessons_added,
    lessons_changed,
    lessons_moved,
    lessons_hidden,
    lessons_removed,
  };
  return r;
}
