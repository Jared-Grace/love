import { app_code_lessons_review_since_lessons_of_path } from "./app_code_lessons_review_since_lessons_of_path.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { property_get } from "./property_get.mjs";
import { object_values } from "./object_values.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_fns } from "./app_code_lessons_fns.mjs";
import { list_map } from "./list_map.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_lines_working } from "./text_lines_working.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export async function app_code_lessons_review_since_changed_path(
  folder,
  commit,
) {
  arguments_assert(arguments, 2);
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
  let lessons_of_path =
    await app_code_lessons_review_since_lessons_of_path(names_after);
  ("Shared helpers are grouped by WHICH lessons stand on them rather than listed one file at a time, because the reading a person does is per group and not per file. Four helpers all reached by the same four lessons are one thing to go and look at, and named as four rows they read as four.");
  ("Grouping by the set also says what the count alone could not: a group of a hundred and thirty-three is the app itself and needs no lesson named, while a group of four names its four and can be gone through. Both fall out of the same grouping, so neither needs a number typed in to tell them apart.");
  let files_of_lesson = {};
  let helpers_of_holders = {};
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
      continue;
    }
    let holders_key = list_join_comma(holders);
    let group = helpers_of_holders[holders_key];
    if (not(group)) {
      group = {
        count: left,
        lessons: holders,
        helpers: [],
      };
      helpers_of_holders[holders_key] = group;
    }
    group.helpers.push(changed_path);
  }
  function group_count(group) {
    let counted = property_get(group, "count");
    return counted;
  }
  let grouped = object_values(helpers_of_holders);
  let helpers_shared_edited = list_sort_number_mapper(grouped, group_count);
  let r = {
    names_after,
    files_of_lesson,
    helpers_shared_edited,
  };
  return r;
}
