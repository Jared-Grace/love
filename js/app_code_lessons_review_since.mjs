import { property_get } from "./property_get.mjs";
import { app_code_lessons_review_since_names_after } from "./app_code_lessons_review_since_names_after.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_size } from "./list_size.mjs";
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
  let r2 = await app_code_lessons_review_since_names_after(
    commit,
    list_path,
    folder,
  );
  let names_after = property_get(r2, "names_after");
  let cut_fn = property_get(r2, "cut_fn");
  let cut_place = property_get(r2, "cut_place");
  let lessons_added = property_get(r2, "lessons_added");
  let lessons_changed = property_get(r2, "lessons_changed");
  let lessons_moved = property_get(r2, "lessons_moved");
  let lessons_removed = property_get(r2, "lessons_removed");
  let lessons_hidden = property_get(r2, "lessons_hidden");
  let helpers_shared_edited = property_get(r2, "helpers_shared_edited");
  let names_before = property_get(r2, "names_before");
  let r = {
    commit,
    lessons_before: list_size(names_before),
    lessons_now: list_size(names_after),
    cut: cut_fn.name,
    cut_place,
    added: lessons_added,
    changed: lessons_changed,
    moved: lessons_moved,
    removed: lessons_removed,
    hidden_by_cut: lessons_hidden,
    shared_helpers_changed: helpers_shared_edited,
  };
  return r;
}
