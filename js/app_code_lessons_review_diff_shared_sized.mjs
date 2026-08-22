import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lessons_review_diff_counted } from "./app_code_lessons_review_diff_counted.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
export async function app_code_lessons_review_diff_shared_sized(
  folder,
  commit,
  groups,
  lessons_now,
) {
  "Each group of shared helpers edited since a commit, with the change itself and how many lines of it there are.";
  "THE SHARED HELPERS ARE MEASURED THE SAME WAY THE LESSONS ARE, because a reading that stops short of them is not a reading of everything that changed. A helper two lessons share is edited by somebody who was thinking about one of them, and it lands on both screens; left out of the report it is the one kind of change nobody is ever handed.";
  "A GROUP EVERY LESSON STANDS ON IS MARKED HERE rather than left to be worked out from the count, because the count only means the whole run once somebody knows how many lessons there are now - and that number is already in hand at this point and is not later.";
  arguments_assert(arguments, 4);
  let shared_sized = [];
  for (let group of groups) {
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
  return shared_sized;
}
