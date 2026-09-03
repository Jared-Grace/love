import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { assert_json } from "./assert_json.mjs";
import { text_replace_path_start } from "./text_replace_path_start.mjs";
import { equal } from "./equal.mjs";
import { file_overwrite_uncached } from "./file_overwrite_uncached.mjs";
export async function file_path_start_repoint(f_path, before, after) {
  "$plain f_path";
  "$plain before";
  "$plain after";
  "One file, written out again with every place that names one folder at the start of a path naming a different folder instead. Answers whether it had anything to change.";
  "THE PER-FILE HALF OF A FOLDER RENAME, which until now only existed as a sweep over the whole repo. The sweep is the right shape when every file it can reach wants the same answer, and the wrong shape the moment one of them does not - and one of them never does, because a rename touches records and prose as readily as it touches references.";
  "It is what puts a swept file back. A record of the past names paths that are gone, and rewriting it does not fix the record, it makes it lie; the repo refuses to throw uncommitted work away, and rightly, so the only undo left is to write the text back - which by hand is one line at a time and here is one call. Measured 2026-09-03: a rename of the served folder rewrote a retired watcher's log, six thousand eight hundred lines of it, and this is how the log came back.";
  "It takes the whole path on this machine rather than a path from the repo's root, so that it reaches a file the sweep is not allowed to look at. That is the whole reason to have it: the files that need it most are the ones the sweep should never have visited.";
  arguments_assert(arguments, 3);
  let text = await file_read_try(f_path);
  assert_json(text, {
    hint: "there is nothing readable at this path to write out again - would you like to name a file that is there?",
    f_path,
  });
  let written = text_replace_path_start(text, before, after);
  let same = equal(written, text);
  if (same) {
    return false;
  }
  await file_overwrite_uncached(f_path, written);
  return true;
}
