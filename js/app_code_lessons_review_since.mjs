import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { app_code_lessons_prod_last_fn } from "./app_code_lessons_prod_last_fn.mjs";
import { function_imports } from "./function_imports.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_remove } from "./text_remove.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_index_of } from "./list_index_of.mjs";
export async function app_code_lessons_review_since(commit) {
  arguments_assert(arguments, 1);
  ("Everything about the code app's lesson run that somebody would have to look at again before releasing it, measured against the run as it stood at one commit: the lessons that did not exist then, the ones whose own writing has been edited since, the ones standing somewhere else in the order now, and the ones the learner already had that the release cut would now hide back off their screen.");
  ("The commit to measure against is the one that built what the learner is reading, not the last one anybody made. Those are different questions and only the first has an answer worth reviewing: a lesson written and rewritten twice since the last release still needs reading once, and a lesson touched twice since yesterday may already have been read.");
  ("The fourth list is here because nothing else reports it and it is the only one of the four that takes something away. Lessons put in ahead of an old lesson push it down the order, and the cut that decides how much of the run is released stands at a fixed place in that order - so an insert far up the list can carry a lesson the learner has already worked past the cut and off their screen, with no lesson edited and nothing deleted. Read-only: it answers, it changes nothing.");
  ("A lesson counts as edited when any lesson-named function it can reach was edited, not only the file bearing its own name. A screen is built from a family of functions and the ones a lesson shares with its neighbours carry as much of what is read as the one holding the lesson's name. Functions outside that prefix are left out on purpose: a change to a shared container or to the quiz machinery lands on every lesson at once, and a list naming all of them is a list nobody can review.");
  let folder = folder_repo_love();
  let f_name = fn_name("app_code_lessons_fns");
  let list_path = text_combine_multiple(["js/", f_name, ".mjs"]);
  let lesson_prefix = "app_code_lesson_";
  let shown = text_combine_multiple([commit, ":", list_path]);
  let list_text = await git_folder_run(folder, ["show", shown]);
  function lesson_names_of_text(t) {
    let lines = text_lines_working(t);
    let named = [];
    for (let line of lines) {
      if (text_starts_with(line, lesson_prefix)) {
        let replaced = text_remove(line, ",");
        named.push(replaced);
      }
    }
    return named;
  }
  let names_before = lesson_names_of_text(list_text);
  function fn_named(f) {
    let named = f.name;
    return named;
  }
  let list = app_code_lessons_fns();
  let names_after = list_map(list, fn_named);
  let diff_text = await git_folder_run(folder, [
    "diff",
    "--name-only",
    commit,
    "HEAD",
    "--",
    "js",
  ]);
  let changed_paths = text_lines_working(diff_text);
  let imports_remembered = {};
  async function lesson_imports_of(name) {
    "the same lesson helper is reached from several lessons, and asking the tree what a file imports means reading and parsing that file - so the answer is kept the first time it is worked out. Without this the walk parses a few thousand files instead of a few hundred and takes longer than anybody will wait";
    let remembered = imports_remembered[name];
    if (remembered) {
      return remembered;
    }
    let imported = await function_imports(name);
    imports_remembered[name] = imported;
    return imported;
  }
  async function lesson_edited_is(lesson_name) {
    "the walk turns aside at any name outside the lesson prefix, which is what keeps it small: a lesson reaches the whole of the list and text machinery through its containers, and none of that is what this is asking about";
    let seen = [lesson_name];
    let waiting = [lesson_name];
    while (greater_than(list_size(waiting), 0)) {
      let name = waiting.pop();
      let file_path = text_combine_multiple(["js/", name, ".mjs"]);
      if (list_includes(changed_paths, file_path)) {
        return true;
      }
      let imported = await lesson_imports_of(name);
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
    return false;
  }
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
      if (await lesson_edited_is(lesson_name)) {
        lessons_changed.push({
          place: place_number,
          lesson: lesson_name,
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
  };
  return r;
}
