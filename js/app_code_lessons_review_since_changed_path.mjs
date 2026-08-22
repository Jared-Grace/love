import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_map } from "./list_map.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { app_code_lessons_review_since_lesson_reached_paths } from "./app_code_lessons_review_since_lesson_reached_paths.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export async function app_code_lessons_review_since_changed_path(
  folder,
  commit,
  lesson_prefix,
) {
  arguments_assert(arguments, 3);
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
  ("Which lessons reach a file is what tells a lesson's own writing apart from the machinery every lesson is built on, and it is counted rather than read off a list of words. A list of words goes stale the moment somebody adds a helper, and goes stale silently, which is the one way a reading like this fails without saying so.");
  ("A file only one lesson reaches is that lesson's writing. A file several lessons reach is shared, and it is reported once with how many lessons stand on it rather than turned into a complaint against each of them - the first run of this put all ninety-seven old lessons on the review list because the quiz machinery had been edited, which is a list nobody could have read.");
  let lessons_of_path = {};
  for (let lesson_name of names_after) {
    let reached_paths =
      await app_code_lessons_review_since_lesson_reached_paths(
        lesson_name,
        imports_remembered,
        lesson_prefix,
      );
    for (let reached_path of reached_paths) {
      let holders = lessons_of_path[reached_path];
      if (not(holders)) {
        holders = [];
        lessons_of_path[reached_path] = holders;
      }
      holders.push(lesson_name);
    }
  }
  let files_of_lesson = {};
  let helpers_shared_edited = [];
  for (let changed_path of changed_paths) {
    let holders = lessons_of_path[changed_path];
    if (not(holders)) {
      continue;
    }
    let left = list_size(holders);
    if (equal(left, 1)) {
      let owner = holders[0];
      let owned = files_of_lesson[owner];
      if (not(owned)) {
        owned = [];
        files_of_lesson[owner] = owned;
      }
      owned.push(changed_path);
    } else {
      helpers_shared_edited.push({
        helper: changed_path,
        lessons: list_size(holders),
      });
    }
  }
  let r = {
    names_after,
    files_of_lesson,
    helpers_shared_edited,
  };
  return r;
}
