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
  let r = {
    names_after,
    cut_fn,
    cut_place,
    lessons_added,
    lessons_changed,
    lessons_moved,
    lessons_hidden,
  };
  return r;
}
