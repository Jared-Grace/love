import { arguments_assert } from "./arguments_assert.mjs";
import { git_log_mark } from "./git_log_mark.mjs";
import { text_size } from "./text_size.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function git_log_marked_paths_firsts_generic(printed, stamp_read) {
  "Reads what git prints when asked for a marked stamp per commit and the files each one touched, and hands back, for every file named anywhere in it, the stamp of the first commit that named it.";
  "Git answers newest first, so the first mention of a path is the newest one and every later mention is older - which is why a path already answered for is passed over rather than written again.";
  "The stamp is handed to the caller's own reading before it is stored, and only ever on a line that carried the mark. So a caller wanting a number gets its conversion asked exactly where a number was printed, and a path named before any commit line keeps the nothing it was given rather than having a conversion run over it.";
  "★ TWO READERS OF THIS SAME STREAM WERE WRITTEN OUT SEPARATELY AND ONE OF THEM HELD THE WRONG MARK FOR AS LONG AS NOBODY COMPARED THEM. Nothing goes red: a file dropped out of the answer reads as a file no commit touched, which is exactly what such an answer is asked for. The bound is what differs between callers - a stretch of time, or a handful of paths - and the reading of what comes back never was.";
  "How far past the mark the stamp begins is asked of the mark itself rather than written down as a one. A mark of two characters would otherwise leave its second one glued to the front of every stamp, and the reading would be wrong in a way the asking still looked right about - which is the same split the mark was made a function to close, left half open by a number typed beside it.";
  arguments_assert(arguments, 2);
  let lines = printed.split("\n");
  let mark = git_log_mark();
  let marked_size = text_size(mark);
  let firsts = {};
  let stamp = null;
  for (let line of lines) {
    let marked = text_starts_with(line, mark);
    if (marked) {
      let after = text_skip(line, marked_size);
      stamp = stamp_read(after);
      continue;
    }
    let named = line in firsts;
    let blank = text_empty_is(line);
    if (named || blank) {
      continue;
    }
    firsts[line] = stamp;
  }
  return firsts;
}
