import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lessons_review_diff_size(entry) {
  "How much of one lesson changed, without the change itself - the lesson, its place, and the three counts.";
  "THE WRITTEN CHANGE IS LEFT BEHIND ON PURPOSE. The sizes are handed back to a reader deciding what to open, and a whole diff for every lesson would be the file they were trying to avoid reading.";
  arguments_assert(arguments, 1);
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
