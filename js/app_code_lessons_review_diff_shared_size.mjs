import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lessons_review_diff_shared_size(entry) {
  "How much one group of shared helpers changed, without the change itself - how many lessons stand on it, which ones, how many files, and the three counts.";
  "THE WRITTEN CHANGE IS LEFT BEHIND ON PURPOSE, the same way the lesson sizes leave it behind: these are handed to a reader deciding what to open.";
  arguments_assert(arguments, 1);
  let size = {
    count: entry.count,
    whole_run: entry.whole_run,
    lessons: entry.lessons,
    helpers: entry.helpers,
    added: entry.added,
    taken: entry.taken,
    moved: entry.moved,
  };
  return size;
}
