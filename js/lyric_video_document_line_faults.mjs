import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
import { not } from "./not.mjs";
import { lyric_video_document_line_fault } from "./lyric_video_document_line_fault.mjs";
import { less_than } from "./less_than.mjs";
import { list_filter } from "./list_filter.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export function lyric_video_document_line_faults(
  path_document,
  lines,
  line,
  index,
) {
  arguments_assert(arguments, 4);
  ("$plain path_document");
  ("$plain lines");
  ("$plain line");
  ("$plain index");
  ("Every fault in the moments of one line of a timed document: a line given only one of its two moments, a line that ends before it begins, and a line that begins before one written above it.");
  ("★ A LINE WITH NEITHER MOMENT IS NOT A FAULT AND A LINE WITH ONE OF THEM IS. A document is timed a stretch at a time, so a line nobody has reached yet is the ordinary state of the work and reporting it would bury the real faults under the whole of what is left to do. One moment without the other is different in kind: somebody was there and stopped in the middle, and no later pass will come back to it because the line no longer looks untouched.");
  ("The lines above are handed in whole rather than only their moments, because whether this line goes back is a question about where it stands among them and a list of moments alone cannot say which of them are above it.");
  ("Only the lines that were given a moment are compared against, so an untimed line lying between two timed ones does not break the run and hide a real fault below it.");
  function line_faults_start(line_above) {
    let start_above = line_above.start;
    return start_above;
  }
  let start = line.start;
  let end = line.end;
  let started = number_is(start);
  let ended = number_is(end);
  let untimed = not(started) && not(ended);
  if (untimed) {
    let faults_none = [];
    return faults_none;
  }
  let half_timed = not(started && ended);
  if (half_timed) {
    let only_one = lyric_video_document_line_fault(
      path_document,
      index,
      "one moment and not the other",
      line,
    );
    let r = [only_one];
    return r;
  }
  let backwards = less_than(end, start);
  let fault = lyric_video_document_line_fault(
    path_document,
    index,
    "ends before it begins",
    line,
  );
  let faults_backwards = backwards ? [fault] : [];
  let above = lines.slice(0, index);
  let starts_above_all = above.map(line_faults_start);
  let starts_above = list_filter(starts_above_all, number_is);
  function line_faults_later(start_above) {
    let later = greater_than(start_above, start);
    return later;
  }
  let out_of_order = starts_above.filter(line_faults_later);
  let goes_back = list_empty_not_is(out_of_order);
  let fault2 = lyric_video_document_line_fault(
    path_document,
    index,
    "begins before a line above it",
    line,
  );
  let faults_back = goes_back ? [fault2] : [];
  let faults = faults_backwards.concat(faults_back);
  return faults;
}
