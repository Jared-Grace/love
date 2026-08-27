import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { usfm_markers_dropped } from "./usfm_markers_dropped.mjs";
import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { usfm_markers_heading } from "./usfm_markers_heading.mjs";
import { text_last } from "./text_last.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { usfm_markers_paragraph } from "./usfm_markers_paragraph.mjs";
import { ternary } from "./ternary.mjs";
export function usfm_marker_layout(marker) {
  arguments_assert(arguments, 1);
  ("$plain marker");
  ("What one usfm line mark asks of the page - whether its line is a break, a heading, the start of a paragraph or another line of the same one, and how far in it stands.");
  ("The step is read off the digit the mark carries rather than looked up, because that is what the digit is there for: poetry is marked q1 and q2 and list items li1 and li2, and the number says the depth in both. A table of every mark and its depth would say the same thing at greater length and go out of date the first time a printing used a deeper one.");
  ("Two spaces to the step, which is what a couplet wants and no more. Hebrew poetry is a first line and its answer, so the answer only has to be seen to be an answer; stepping it further turns a psalm into an outline.");
  ("The marks carrying a translator's apparatus are dropped rather than laid out - the parallel passage note, the chapter label, the book's own title and running heads. They are notes to somebody studying or instructions to a typesetter, not words of the book, and a person pasting a passage somewhere did not ask for them.");
  ("The psalm ascription is not named here at all, so it falls through and is laid out as ordinary text. A hundred and seventeen psalms write it as verse one, so it is scripture in those and reads as the opening of the psalm in the rest; calling it a heading would have hidden a verse.");
  ("Anything unnamed is a line of text at the margin. A mark this does not know is far likelier to be a kind of paragraph than a kind of note, and guessing that way keeps words rather than losing them.");
  let unmarked = text_empty_is(marker);
  if (unmarked) {
    let plain = {
      kind: "line",
      indent: 0,
    };
    return plain;
  }
  let dropped_markers = usfm_markers_dropped();
  let dropped = list_includes(dropped_markers, marker);
  if (dropped) {
    let drop = {
      kind: "drop",
      indent: 0,
    };
    return drop;
  }
  let broken = equal(marker, "b");
  if (broken) {
    let gap = {
      kind: "break",
      indent: 0,
    };
    return gap;
  }
  let heading_markers = usfm_markers_heading();
  let heading = list_includes(heading_markers, marker);
  if (heading) {
    let head = {
      kind: "heading",
      indent: 0,
    };
    return head;
  }
  let digits = ["1", "2", "3", "4", "5"];
  let last = text_last(marker);
  let stepped = list_includes(digits, last);
  let depth = 0;
  if (stepped) {
    depth = list_index_of(digits, last);
  }
  let indent = multiply(2, depth);
  let paragraph_markers = usfm_markers_paragraph();
  let paragraph = list_includes(paragraph_markers, marker);
  let kind = ternary(paragraph, "paragraph", "line");
  let layout = {
    kind,
    indent,
  };
  return layout;
}
