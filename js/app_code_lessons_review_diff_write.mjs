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
  let report = text_combine_multiple(sections);
  let report_path = text_combine_multiple([
    folder,
    "/gitignore/app_code_lessons_review_diff.txt",
  ]);
  await file_overwrite(report_path, report);
  let sizes = list_map(smallest_first, app_code_lessons_review_diff_size);
  let r = {
    commit,
    report_path,
    changed: list_size(sizes),
    sizes,
  };
  return r;
}
