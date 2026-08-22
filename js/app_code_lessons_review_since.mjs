import { property_get } from "./property_get.mjs";
import { app_code_lessons_review_since_changed_path } from "./app_code_lessons_review_since_changed_path.mjs";
import { app_code_lessons_review_since_lesson_names_of_text } from "./app_code_lessons_review_since_lesson_names_of_text.mjs";
import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { app_code_lessons_prod_last_fn } from "./app_code_lessons_prod_last_fn.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
export async function app_code_lessons_review_since(commit) {
  arguments_assert(arguments, 1);
  ("Everything about the code app's lesson run that somebody would have to look at again before releasing it, measured against the run as it stood at one commit: the lessons that did not exist then, the ones whose own writing has been edited since, the ones standing somewhere else in the order now, and the ones the learner already had that the release cut would now hide back off their screen.");
  ("The commit to measure against is the one that built what the learner is reading, not the last one anybody made. Those are different questions and only the first has an answer worth reviewing: a lesson written and rewritten twice since the last release still needs reading once, and a lesson touched twice since yesterday may already have been read.");
  ("The fourth list is here because nothing else reports it and it is the only one of the four that takes something away. Lessons put in ahead of an old lesson push it down the order, and the cut that decides how much of the run is released stands at a fixed place in that order - so an insert far up the list can carry a lesson the learner has already worked past the cut and off their screen, with no lesson edited and nothing deleted. Read-only: it answers, it changes nothing.");
  ("A lesson counts as edited when a lesson-named function that only it reaches was edited - its own writing, whatever file that writing sits in, rather than only the file bearing its name. A screen is built from a family of functions and a lesson's family is spread across all of them.");
  ("What a lesson shares with a neighbour is reported apart from that, as the changed helper and the count of lessons standing on it. The cost of drawing the line there is that a helper two lessons share is named in the shared list and neither lesson is put on the review list for it - so read the shared list from its smallest counts upward, where the numbers are small enough to name what they touch.");
  let folder = folder_repo_love();
  let f_name = fn_name("app_code_lessons_fns");
  let list_path = text_combine_multiple(["js/", f_name, ".mjs"]);
  let lesson_prefix = "app_code_lesson_";
  let shown = text_combine_multiple([commit, ":", list_path]);
  let list_text = await git_folder_run(folder, ["show", shown]);
  let names_before = app_code_lessons_review_since_lesson_names_of_text(
    list_text,
    lesson_prefix,
  );
  let r2 = await app_code_lessons_review_since_changed_path(
    folder,
    commit,
    lesson_prefix,
  );
  let helpers_shared_edited = property_get(r2, "helpers_shared_edited");
  let files_of_lesson = property_get(r2, "files_of_lesson");
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
    commit,
    lessons_before: list_size(names_before),
    lessons_now: list_size(names_after),
    cut: cut_fn.name,
    cut_place,
    added: lessons_added,
    changed: lessons_changed,
    moved: lessons_moved,
    hidden_by_cut: lessons_hidden,
    shared_helpers_changed: helpers_shared_edited,
  };
  return r;
}
