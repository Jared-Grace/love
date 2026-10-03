import { arguments_assert } from "./arguments_assert.mjs";
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
export async function lyric_video_document_line_start_set(
  name,
  index_said,
  start_said,
) {
  arguments_assert(arguments, 3);
  ("$plain name");
  ("$plain index_said");
  ("$plain start_said");
  ("Moves one line of a timing document to the moment it is actually sung, and lays the document out again around it.");
  ("★ IT EXISTS BECAUSE THE MACHINE THAT PLACES THESE LINES CAN LAND ONE SEVERAL SECONDS LATE AND SAY NOTHING. Where the recording sings a verse the document does not hold, the placing has more singing to cover than words to cover it with, and it stretches - so the lines after the unwritten part arrive late, and each caption stands on the screen through the next verse's words. Measured 2026-10-03, three of the four psalms complained about were this: Psalm 147's closing three lines were between two and five seconds late, Psalm 104's middle three between six and seven, and Psalm 133's last three by ten, forty-six and seventy-eight.");
  ("★ THE MOMENT IS HANDED TO IT RATHER THAN TAKEN FROM THE HEARING, BECAUSE CHOOSING BETWEEN TWO READINGS OF A SUNG LINE IS LISTENING. The blind hearing and the placing disagree all over the psalter, and which of them is right on any one line is a question only an ear settles; a command that preferred the hearing wherever they differed would quietly undo good placings along with bad. What a person can do without listening is read a line's own words off the transcript where they are a word for word match, and that is a reading of the words rather than a judgement about the sound.");
  ("★ THE LINES STAY IN THE ORDER OF THE PASSAGE, SO A MOMENT THAT WOULD PUT ONE OUT OF ORDER IS REFUSED RATHER THAN SORTED. The order is the scripture's, not the recording's; reordering to fit a moment would rewrite the passage to agree with a mistyped number. Where a recording really does sing the verses out of order, that is a repeat and a second showing of a line, which is written down by the command next door.");
  ("★ THE WRITER'S REFUSAL IS CARRIED UP RATHER THAN LEFT IN THE BOX IT ARRIVED IN. Laying the document out again is refused where its endings hold something a person decided by hand, and that refusal comes back inside the writer's own answer. An answer that named the moment it had moved and said nothing at all about whether anything was saved read exactly like a success, so a document that refused every time looked mended - and the word a refusal here is told apart by is the same word, so it has to be on both ways out or on neither.");
  let index = number_from_text(index_said);
  let start = number_from_text(start_said);
  let found = await lyric_video_document_name_found(name);
  let unknown = equal(found, null);
  if (unknown) {
    let nothing = {
      wrote: false,
      why: "no timing document answers to that name",
      lines: null,
      out_of_order: null,
      now: null,
      text: null,
      was: null,
      written: null,
    };
    return nothing;
  }
  let lines = found.document.lines;
  let line = lines[index];
  let absent = equal(line, undefined);
  if (absent) {
    let missing = {
      wrote: false,
      why: "that document has no line at that number",
      lines: lines.length,
      out_of_order: null,
      now: null,
      text: null,
      was: null,
      written: null,
    };
    return missing;
  }
  let starts = list_map_property(lines, "start");
  let texts = list_map_property(lines, "text");
  starts[index] = start;
  let out_of_order = [];
  let last = null;
  for (let i = 0; less_than(i, starts.length); i++) {
    let one = starts[i];
    let timed = equal_not(one, null);
    if (timed) {
      let known = equal_not(last, null);
      let backwards = known && less_than_equal(one, last);
      if (backwards) {
        out_of_order.push(texts[i] + " would begin " + one + " after " + last);
      }
      last = one;
    }
  }
  let disordered = greater_than(out_of_order.length, 0);
  if (disordered) {
    let refused = {
      wrote: false,
      why: "that moment would put the lines of the passage out of order",
      out_of_order,
      lines: null,
      now: null,
      text: null,
      was: null,
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
    written,
    text: texts[index],
    was: line.start,
    now: start,
    lines: null,
    out_of_order: null,
  };
  return r;
}
