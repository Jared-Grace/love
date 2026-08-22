import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { app_code_lessons_review_since } from "./app_code_lessons_review_since.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_remove_if_starts_with } from "./text_remove_if_starts_with.mjs";
import { text_trim } from "./text_trim.mjs";
import { not } from "./not.mjs";
import { list_sort_number_mapper } from "./list_sort_number_mapper.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
export async function app_code_lessons_review_diff_write(commit) {
  arguments_assert(arguments, 1);
  ("For every lesson whose own writing was edited since one commit, how much of it was edited and what the edit was: a size for each one, smallest first, and a written file holding the actual change under a heading naming the lesson and its place.");
  ("The size is what the reading is for. A lesson two lines different needs two lines read; a lesson rewritten from the top needs reading as if it were new, and only the sizes tell those apart before any of it has been read. Ordering the file smallest first means the cheap ones are all done before the expensive ones start, so the reading can be stopped anywhere and what is left is known.");
  ("Added and taken-away lines are counted apart rather than added together, because a change that only takes lines away is a cut and reads far faster than the same number of lines put in.");
  ("The file is written under gitignore, because it is a reading of the repo at one moment and not a part of it - a second run against a different commit answers a different question and should not leave both answers behind.");
  let folder = folder_repo_love();
  let review = await app_code_lessons_review_since(commit);
  let changed = review.changed;
  let sized = [];
  for (let entry of changed) {
    let words = ["diff", commit, "HEAD", "--"].concat(entry.files);
    let diff_text = await git_folder_run(folder, words);
    let lines = text_split_newline(diff_text);
    let lines_added = [];
    let lines_taken = [];
    for (let line of lines) {
      if (text_starts_with(line, "+++")) {
        continue;
      }
      if (text_starts_with(line, "---")) {
        continue;
      }
      if (text_starts_with(line, "+")) {
        lines_added.push(text_trim(text_remove_if_starts_with(line, "+")));
      }
      if (text_starts_with(line, "-")) {
        lines_taken.push(text_trim(text_remove_if_starts_with(line, "-")));
      }
    }
    "A line that leaves one file and arrives in another is a move, and a move is not something to review - the lifts this repo does constantly would otherwise read as the largest rewrites on the list. So a line taken away and put back verbatim somewhere in the same change is counted apart, and the two numbers left are the writing that is really new and the writing that is really gone.";
    "The keys are written with a bar in front of them so that a line of code spelling a word every object already answers to cannot be mistaken for a count.";
    let taken_counts = {};
    for (let line_taken of lines_taken) {
      let key = text_combine_multiple(["|", line_taken]);
      let counted = taken_counts[key];
      if (not(counted)) {
        counted = 0;
      }
      taken_counts[key] = counted + 1;
    }
    let added = 0;
    let moved = 0;
    for (let line_added of lines_added) {
      let key = text_combine_multiple(["|", line_added]);
      let counted = taken_counts[key];
      if (counted) {
        taken_counts[key] = counted - 1;
        moved = moved + 1;
      } else {
        added = added + 1;
      }
    }
    let taken = list_size(lines_taken) - moved;
    sized.push({
      place: entry.place,
      lesson: entry.lesson,
      added,
      taken,
      moved,
      files: list_size(entry.files),
      diff_text,
    });
  }
  function lines_touched(entry) {
    let touched = entry.added + entry.taken;
    return touched;
  }
  let smallest_first = list_sort_number_mapper(sized, lines_touched);
  function section_of(entry) {
    let v = String(entry.place);
    let v2 = String(entry.added);
    let v3 = String(entry.taken);
    let heading = text_combine_multiple([
      "======== ",
      v,
      "  ",
      entry.lesson,
      "  +",
      v2,
      " -",
      v3,
      "  moved ",
      String(entry.moved),
      "\n\n",
    ]);
    let section = text_combine_multiple([heading, entry.diff_text, "\n"]);
    return section;
  }
  let sections = list_map(smallest_first, section_of);
  let report = text_combine_multiple(sections);
  let report_path = text_combine_multiple([
    folder,
    "/gitignore/app_code_lessons_review_diff.txt",
  ]);
  await file_overwrite(report_path, report);
  function size_of(entry) {
    let size = {
      place: entry.place,
      lesson: entry.lesson,
      added: entry.added,
      taken: entry.taken,
      moved: entry.moved,
      files: entry.files,
    };
    return size;
  }
  let sizes = list_map(smallest_first, size_of);
  let r = {
    commit,
    report_path,
    changed: list_size(sizes),
    sizes,
  };
  return r;
}
