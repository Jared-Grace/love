import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_document_line_fault(
  path_document,
  index,
  why,
  line,
) {
  arguments_assert(arguments, 4);
  ("$plain path_document");
  ("$plain index");
  ("$plain why");
  ("$plain line");
  ("One fault found in the moments of one line of a timed document: which document and which line it is, what is wrong with it in words, the two moments themselves, and the words of the line.");
  ("★ THE THREE FAULTS A LINE CAN HOLD ARE ALL REPORTED IN THE SAME SHAPE, AND ONLY THE WORDS DIFFER. They were three separate spellings of the same six fields, so a field added for one of them reached whichever of the three the person adding it happened to be looking at, and a reader of the report could not tell whether a missing field meant the fault had nothing to say there or that the spelling had simply been missed.");
  ("The words are carried rather than a name standing for them, because the only reader is a person looking at a failed gate and a sentence needs nothing looked up.");
  let start = line.start;
  let end = line.end;
  let fault = {
    path_document,
    index,
    why,
    start,
    end,
    text: line.text,
  };
  return fault;
}
