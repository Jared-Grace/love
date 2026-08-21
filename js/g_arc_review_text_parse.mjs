import { text_split_newline } from "./text_split_newline.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { g_arc_review_line_apply } from "./g_arc_review_line_apply.mjs";
export function g_arc_review_text_parse(review_text) {
  "The arc a review page holds, read back out of the page - the inverse of laying an arc out to be read.";
  "WHY THERE IS AN INVERSE. An answer that comes back as readable text rather than in the JSON shape has lost nothing but its format, and a format is mechanical: if a person handed this over written out plainly, nobody would throw the work away and ask for it again, they would ask for the shape to change and keep the content. So the readable layout is a form an arc may be WRITTEN in as well as read in.";
  "It is also what makes a review page EDITABLE. A reviewer reads the page, fixes a line on it, and the page they fixed is the arc - rather than the fix having to be copied by hand into a second file that is the real one.";
  "Reading back CANNOT INVENT, which is why this is safe where retyping would not be. A reference is carried across as the writer wrote it, and a passage is resolved from it against the passages that were offered, so a reference that names nothing offered still has nowhere to land.";
  let arc = {
    occupation: "",
    trouble: "",
    summary: "",
    conversations: [],
  };
  let state = {
    conversation: null,
    turn: null,
    opener: "",
  };
  let lines = text_split_newline(review_text);
  for (let line of lines) {
    let blank = text_empty_is(line);
    if (blank) {
      continue;
    }
    g_arc_review_line_apply(arc, state, line);
  }
  return arc;
}
