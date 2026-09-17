import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lessons_released_fns } from "./app_code_lessons_released_fns.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_code_lessons_review_since_helpers_had } from "./app_code_lessons_review_since_helpers_had.mjs";
import { list_size } from "./list_size.mjs";
export function app_code_lessons_review_since_lesson_name(
  r2,
  names_before,
  files_of_lesson,
  released_before,
) {
  arguments_assert(arguments, 4);
  let names_after = property_get(r2, "names_after");
  let released_fns = app_code_lessons_released_fns();
  let released_names = list_map_property(released_fns, "name");
  let lessons_added = [];
  let lessons_changed = [];
  let lessons_moved = [];
  let lessons_hidden = [];
  ("Nothing unreleased is put on the review list, because the release does not hand it to anybody. A lesson left off the released list is not on the learner's screen, so reading it now buys a release nothing, and the list it lengthens is the one thing standing between the work and the release.");
  ("The count of what was passed over travels out beside the lists. A shorter list read as the whole truth is how a reader comes to believe a run of a hundred and thirty-three lessons was reviewed when a hundred and one of them were.");
  let unreleased = 0;
  let place_number = 0;
  for (let lesson_name of names_after) {
    place_number = place_number + 1;
    let released_now = list_includes(released_names, lesson_name);
    let had_before = list_includes(names_before, lesson_name);
    if (not(released_now)) {
      let was_released = list_includes(released_before, lesson_name);
      if (was_released) {
        ("a lesson that was released at the commit and is not released now - it is reported here rather than passed over, because this is the one list that takes something away from somebody");
        let place_before = list_index_of(names_before, lesson_name) + 1;
        lessons_hidden.push({
          lesson: lesson_name,
          was: place_before,
          now: place_number,
        });
      }
      let edited = files_of_lesson[lesson_name];
      let new_or_edited = not(had_before) || edited;
      if (new_or_edited) {
        unreleased = unreleased + 1;
      }
      continue;
    }
    if (had_before) {
      let place_before = list_index_of(names_before, lesson_name) + 1;
      if (not_equal(place_before, place_number)) {
        lessons_moved.push({
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
      continue;
    }
    lessons_added.push({
      place: place_number,
      lesson: lesson_name,
    });
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
  let released = list_size(released_names);
  let r = {
    names_after,
    helpers_shared_edited: helpers_annotated,
    released,
    unreleased,
    lessons_added,
    lessons_changed,
    lessons_moved,
    lessons_hidden,
    lessons_removed,
  };
  return r;
}
