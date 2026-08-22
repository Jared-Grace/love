import { folder_attempts_numbered } from "./folder_attempts_numbered.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { equal } from "./equal.mjs";
import { add_1 } from "./add_1.mjs";
export async function folder_attempt_next(folder, extension) {
  "$plain extension";
  "The number the next attempt saved in one folder should be called.";
  "IT IS ONE MORE THAN THE NEWEST ALREADY THERE, so a folder nobody has written to starts at one and nothing already saved is ever written over. What was saved over is not recoverable, and the whole reason attempts are numbered is that a wording is settled by trying it several ways and looking at them together.";
  "AN EMPTY FOLDER COUNTS AS NOUGHT rather than as nothing, because every caller goes on to do arithmetic with the answer, and nought is what makes the first attempt one.";
  let numbers = await folder_attempts_numbered(folder, extension);
  let last = list_max_or_null(numbers);
  if (equal(last, null)) {
    let r = 1;
    return r;
  }
  let next = add_1(last);
  return next;
}
