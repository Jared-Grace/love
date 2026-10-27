import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { lyric_video_document_name_found } from "./lyric_video_document_name_found.mjs";
import { equal } from "./equal.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { less_than } from "./less_than.mjs";
import { equal_not } from "./equal_not.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { lyric_video_document_lines_relaid_write } from "./lyric_video_document_lines_relaid_write.mjs";
import { property_get } from "./property_get.mjs";
export async function lyric_video_document_line_starts_set(name, starts_said) {
  arguments_assert(arguments, 2);
  ("$plain name");
  ("$plain starts_said");
  ("Moves every line of a timing document at once, to the moments handed to it in passage order, and lays the document out again around them.");
  ("★ IT EXISTS BECAUSE RETIMING A WHOLE SONG ONE LINE AT A TIME IS A LOOP OF THE COMMAND NEXT DOOR. A forty-line psalm took forty calls, each laying the document out again, and each one could be refused halfway for an order that only held once its neighbours had moved too. Handing every moment over together checks the order once, against the finished list.");
  ("★ THE COUNT MUST MATCH THE LINES. A list one short would shift every later moment onto the wrong words and still read as a success, so a list of any other length is refused rather than lined up from the front.");
  function lambda(item) {
    let number = number_from_text(item);
    return number;
  }
  let starts = text_split_comma(starts_said).map(lambda);
  let found = await lyric_video_document_name_found(name);
  let unknown = equal(found, null);
  if (unknown) {
    let nothing = {
      wrote: false,
      why: "no timing document answers to that name",
      lines: null,
      given: starts.length,
      out_of_order: null,
      written: null,
    };
    return nothing;
  }
  let lines = found.document.lines;
  let counted = equal(starts.length, lines.length);
  if (not(counted)) {
    let mismatched = {
      wrote: false,
      why: "the moments handed over do not number the same as the lines",
      lines: lines.length,
      given: starts.length,
      out_of_order: null,
      written: null,
    };
    return mismatched;
  }
  let texts = list_map_property(lines, "text");
  let out_of_order = [];
  let last = null;
  for (let i = 0; less_than(i, starts.length); i++) {
    let one = starts[i];
    let known = equal_not(last, null);
    let backwards = known && less_than_equal(one, last);
    if (backwards) {
      out_of_order.push(texts[i] + " would begin " + one + " after " + last);
    }
    last = one;
  }
  let disordered = greater_than(out_of_order.length, 0);
  if (disordered) {
    let refused = {
      wrote: false,
      why: "those moments would put the lines of the passage out of order",
      lines: lines.length,
      given: starts.length,
      out_of_order,
      written: null,
    };
    return refused;
  }
  let written = await lyric_video_document_lines_relaid_write(
    found,
    starts,
    texts,
  );
  let r = {
    wrote: property_get(written, "wrote"),
    why: property_get(written, "why"),
    lines: lines.length,
    given: starts.length,
    out_of_order: null,
    written,
  };
  return r;
}
