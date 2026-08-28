import { multiply } from "./multiply.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { bible_usfm_markers_dropped } from "./bible_usfm_markers_dropped.mjs";
import { list_includes } from "./list_includes.mjs";
import { bible_usfm_markers_heading } from "./bible_usfm_markers_heading.mjs";
import { or } from "./or.mjs";
import { equal } from "./equal.mjs";
import { text_last } from "./text_last.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { bible_usfm_markers_paragraph } from "./bible_usfm_markers_paragraph.mjs";
import { ternary } from "./ternary.mjs";
export function bible_usfm_marker_layout(marker_text) {
  arguments_assert(arguments, 1);
  ("$plain marker");
  ("What one usfm line mark asks of the page - whether its line is thrown away, is a break, starts a paragraph or is another line of the paragraph already running, and how far in it stands.");
  ("The step is read off the digit the mark carries rather than looked up, because that is what the digit is there for: poetry is marked q1 and q2 and list items li1 and li2, and the number says the depth in both. A table of every mark and its depth would say the same thing at greater length and go out of date the first time a printing used a deeper one.");
  ("Two spaces to the step, which is what a couplet wants and no more. Hebrew poetry is a first line and its answer, so the answer only has to be seen to be an answer; stepping it further turns a psalm into an outline.");
  ("Nothing a person did not say survives this. Two sorts of line are thrown away and they are thrown away for one reason: the file's own bookkeeping and the printer's running heads were never anybody's words, and neither were the section titles the translators wrote over each passage. A heading is the dangerous one of the two, because it is the only thing here that is prose in the same language set in the same type - it does not announce itself as apparatus, and left in, a modern editor's summary stands inside the psalm reading as a line of it.");
  ("The psalm ascription is named in neither list, so it falls through and is laid out as ordinary text. It is in the hebrew, and a hundred and seventeen psalms number it as verse one, so it is scripture there and the opening of the psalm everywhere else. It is the one line that looks like a heading and must not be treated as one.");
  ("Anything unnamed is a line of text at the margin. A mark this does not know is far likelier to be a kind of paragraph than a kind of note, and guessing that way keeps words rather than losing them.");
  let unmarked = text_empty_is(marker_text);
  if (unmarked) {
    let plain = {
      kind: "line",
      indent: 0,
    };
    return plain;
  }
  let dropped_markers = bible_usfm_markers_dropped();
  let dropped = list_includes(dropped_markers, marker_text);
  let heading_markers = bible_usfm_markers_heading();
  let heading = list_includes(heading_markers, marker_text);
  let unsaid = or(dropped, heading);
  if (unsaid) {
    let drop = {
      kind: "drop",
      indent: 0,
    };
    return drop;
  }
  let broken = equal(marker_text, "b");
  if (broken) {
    let gap = {
      kind: "break",
      indent: 0,
    };
    return gap;
  }
  let depth_digits = ["1", "2", "3", "4", "5"];
  let last = text_last(marker_text);
  let stepped = list_includes(depth_digits, last);
  let depth = 0;
  if (stepped) {
    depth = list_index_of(depth_digits, last);
  }
  let indent = multiply(2, depth);
  let paragraph_markers = bible_usfm_markers_paragraph();
  let paragraph = list_includes(paragraph_markers, marker_text);
  let kind = ternary(paragraph, "paragraph", "line");
  let layout = {
    kind,
    indent,
  };
  return layout;
}
