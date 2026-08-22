import { greater_than } from "./greater_than.mjs";
import { app_code_lessons_review_diff_shared_section } from "./app_code_lessons_review_diff_shared_section.mjs";
import { app_code_lessons_review_diff_shared_size } from "./app_code_lessons_review_diff_shared_size.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { app_code_lessons_review_diff_counted } from "./app_code_lessons_review_diff_counted.mjs";
import { app_code_lessons_review_diff_section } from "./app_code_lessons_review_diff_section.mjs";
import { app_code_lessons_review_diff_size } from "./app_code_lessons_review_diff_size.mjs";
import { app_code_lessons_review_since } from "./app_code_lessons_review_since.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_code_lessons_review_diff_write(commit) {
  "For every lesson whose own writing was edited since one commit, how much of it was edited and what the edit was: a size for each one, smallest first, and a written file holding the actual change under a heading naming the lesson and its place.";
  "THE SIZE IS WHAT THE READING IS FOR. A lesson two lines different needs two lines read; a lesson rewritten from the top needs reading as if it were new, and only the sizes tell those apart before any of it has been read. Ordering the file smallest first means the cheap ones are all done before the expensive ones start, so the reading can be stopped anywhere and what is left is known.";
  "ADDED AND TAKEN-AWAY LINES ARE COUNTED APART rather than added together, because a change that only takes lines away is a cut and reads far faster than the same number of lines put in.";
  "THE FILE IS WRITTEN UNDER GITIGNORE, because it is a reading of the repo at one moment and not a part of it - a second run against a different commit answers a different question and should not leave both answers behind.";
  arguments_assert(arguments, 1);
  let folder = folder_repo_love();
  let review = await app_code_lessons_review_since(commit);
  let changed = review.changed;
  let sized = [];
  for (let entry of changed) {
    let words = ["diff", commit, "HEAD", "--"].concat(entry.files);
    let diff_text = await git_folder_run(folder, words);
    let counts = app_code_lessons_review_diff_counted(diff_text);
    sized.push({
      place: entry.place,
      lesson: entry.lesson,
      added: counts.added,
      taken: counts.taken,
      moved: counts.moved,
      files: list_size(entry.files),
      diff_text,
    });
  }
  function lines_touched(entry) {
    let touched = add(entry.added, entry.taken);
    return touched;
  }
  let smallest_first = list_sort_number_mapper(sized, lines_touched);
  let sections = list_map(smallest_first, app_code_lessons_review_diff_section);
  ("THE SHARED HELPERS ARE IN THE SAME FILE, because a reading that stops short of them is not a reading of everything that changed. A helper two lessons share is edited by somebody who was thinking about one of them, and it lands on both screens; left out of the report it is the one kind of change nobody is ever handed.");
  ("They come after the lessons and are sized the same way, so the same rule applies twice over: within each part the cheap reading is done before the expensive one starts.");
  let lessons_now = review.lessons_now;
  let shared_sized = [];
  for (let group of review.shared_helpers_changed) {
    let words = ["diff", commit, "HEAD", "--"].concat(group.helpers);
    let diff_text = await git_folder_run(folder, words);
    let counts = app_code_lessons_review_diff_counted(diff_text);
    shared_sized.push({
      count: group.count,
      whole_run: equal(group.count, lessons_now),
      lessons: group.lessons,
      helpers: list_size(group.helpers),
      had: group.had,
      lessons_had: group.lessons_had,
      added: counts.added,
      taken: counts.taken,
      moved: counts.moved,
      diff_text,
    });
  }
  ("A group no lesson the learner already had stands on is put at the end rather than left out. It is new writing, and it will be read with the new lessons it belongs to - but it is still a change since the commit, and a report that silently drops a whole class of change stops being an answer to what changed.");
  ("The ordering says so instead: everything that touches a screen the learner has already seen comes first, cheapest first, and the new machinery follows it.");
  let shared_had = [];
  let shared_new = [];
  for (let entry of shared_sized) {
    if (greater_than(entry.had, 0)) {
      shared_had.push(entry);
      continue;
    }
    shared_new.push(entry);
  }
  let had_smallest_first = list_sort_number_mapper(shared_had, lines_touched);
  let new_smallest_first = list_sort_number_mapper(shared_new, lines_touched);
  let shared_smallest_first = had_smallest_first.concat(new_smallest_first);
  let shared_sections = list_map(
    shared_smallest_first,
    app_code_lessons_review_diff_shared_section,
  );
  let list = sections.concat(shared_sections);
  let report = text_combine_multiple(list);
  let report_path = text_combine_multiple([
    folder,
    "/gitignore/app_code_lessons_review_diff.txt",
  ]);
  await file_overwrite(report_path, report);
  let sizes = list_map(smallest_first, app_code_lessons_review_diff_size);
  let shared_sizes = list_map(
    shared_smallest_first,
    app_code_lessons_review_diff_shared_size,
  );
  let r = {
    commit,
    report_path,
    changed: list_size(sizes),
    sizes,
    shared_groups: list_size(shared_sizes),
    shared_sizes,
  };
  return r;
}
