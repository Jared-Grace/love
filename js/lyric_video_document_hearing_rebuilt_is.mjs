import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function lyric_video_document_hearing_rebuilt_is(document, hearing) {
  arguments_assert(arguments, 2);
  ("$plain document");
  ("$plain hearing");
  ("Whether every moment in a timing document is exactly what building it afresh from that song's kept hearing would produce.");
  ("★ IT IS A PROOF OF AUTHORSHIP AND NOT A LIKENESS SCORE, WHICH IS WHY IT ANSWERS YES ONLY ON AN EXACT MATCH. The step from a hearing's moments to a document's lines is one function with no choices in it, so if the document is that function's output the machine wrote it, and if a single hundredth of a second differs somebody moved it - and moving a number is the whole of what a person's timing is. A test that tolerated near misses would hand out the permission to overwrite on the strength of somebody having only changed a little.");
  ("Both moments of every line are asked about, and how many lines there are first, because a document can be rebuilt correctly at the beginnings and still hold an ending nothing here would have written.");
  function text_of(line) {
    let text = line.text;
    return text;
  }
  let texts = list_map(document.lines, text_of);
  let rebuilt = lyric_timing_lines_timed(
    hearing.starts,
    texts,
    document.duration,
  );
  let same = equal(rebuilt.length, document.lines.length);
  for (let at = 0; less_than(at, rebuilt.length); at = at + 1) {
    let was = document.lines[at];
    let now = rebuilt[at];
    let began = equal(was.start, now.start);
    let ended = equal(was.end, now.end);
    let both = began && ended;
    same = same && both;
  }
  return same;
}
