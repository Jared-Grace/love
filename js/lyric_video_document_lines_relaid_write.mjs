import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { less_than } from "./less_than.mjs";
import { subtract } from "./subtract.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_lines_relaid_write(
  found,
  starts,
  texts,
) {
  arguments_assert(arguments, 3);
  ("$plain found");
  ("$plain starts");
  ("$plain texts");
  ("Lays the lines of one timing document out again from a changed list of beginnings and words and writes it back, refusing where the document is holding anything the line builder would not have put there.");
  ("★ THE LINE BUILDER IS ASKED FOR THE WHOLE DOCUMENT RATHER THAN FOR THE ONE LINE THAT CHANGED, BECAUSE A LINE ENDS WHERE THE NEXT ONE BEGINS. Moving one beginning moves the end of the line before it, and adding a beginning moves the end of the line it lands after, so no change here is ever confined to the line it is about. Where that rule lives is the builder, and spelling it a second time is how two places come to disagree about a twentieth of a second.");
  ("★ IT REFUSES WHEN THE DOCUMENT IS NOT ALREADY THE BUILDER'S ARITHMETIC, AND THAT ONE QUESTION IS THE WHOLE GUARD. A document whose every line already ends exactly where the builder would end it has nothing in it beyond its beginnings, so laying it out again can only change what the change implies. A document that does not - somebody held a caption a moment longer, or an older rule put it there - holds a decision in its endings, and laying it out again would rub that decision out quietly while reporting a success. Asking the question of the document as it stands is also what makes the answer independent of what kind of change is being made, so every command above this shares one guard instead of each reasoning about which of its neighbours were allowed to move.");
  ("★ AN ENDING OUT BY A SINGLE HUNDREDTH IS NUDGED AND NAMED RATHER THAN REFUSED, BECAUSE NOBODY DECIDED IT. A line ends a twentieth of a second before the next begins, and that subtraction lands a hair under the hundredth it is then rounded to, so a document written by one turn of the arithmetic can sit a hundredth away from what the same arithmetic says today. Psalm 104 held one such line out of eighteen, and refusing on it would have made every command above this unusable on a document nobody had ever touched by hand. A hundredth is below anything a hand can tap or an eye can see on a screen, so it cannot be carrying a decision; anything larger can, and is refused. Which ones were nudged comes back with the answer, so a document quietly tidied in passing says so.");
  ("THE LINE IS DRAWN AT A HUNDREDTH AND A HALF RATHER THAN AT A HUNDREDTH, BECAUSE THE SUBTRACTION THAT MEASURES THE GAP CANNOT LAND ON A HUNDREDTH EITHER. Psalm 104's one hundredth came out of it as a hundredth and a sliver more, which is larger than a hundredth, so a line drawn exactly there refused the very case it was widened for. Half a hundredth of room admits a gap of one hundredth and still refuses a gap of two, so nothing a person could have decided gets through.");
  ("ONLY THE ENDINGS ARE ASKED ABOUT, BECAUSE THEY ARE THE ONLY THING THE BUILDER DECIDES. A line's words are handed to it untouched, and a line's beginning comes back rounded to a hundredth and otherwise as it was given - so neither can hold anything of its own to lose. An ending is worked out, and that is what makes it the one place a document can be carrying something nobody here knows about.");
  ("What is handed back says how many lines there now are rather than the document, because the caller named the change and the one thing it cannot know is what the layout did with it.");
  let document = found.document;
  let lines_now = document.lines;
  let starts_now = list_map_property(lines_now, "start");
  let texts_now = list_map_property(lines_now, "text");
  let laid = lyric_timing_lines_timed(starts_now, texts_now, document.duration);
  let hundredth_and_a_half = 0.015;
  let decided = [];
  let nudged = [];
  for (let i = 0; less_than(i, lines_now.length); i++) {
    let was = lines_now[i];
    let now = laid[i];
    let behind = subtract(now.end, was.end);
    let ahead = subtract(was.end, now.end);
    let far =
      greater_than(behind, hundredth_and_a_half) ||
      greater_than(ahead, hundredth_and_a_half);
    let same = equal(behind, 0);
    if (far) {
      decided.push(was.text + " ends " + was.end + " not " + now.end);
    }
    if (not(far) && not(same)) {
      nudged.push(was.text + " ends " + was.end + " not " + now.end);
    }
  }
  let held = greater_than(decided.length, 0);
  if (held) {
    let refused = {
      wrote: false,
      why: "this document's endings are not what the line builder lays out from its own beginnings, so laying it out again would rub out whatever decided them",
      decided,
      lines: null,
      nudged: null,
      path: null,
    };
    return refused;
  }
  let lines = lyric_timing_lines_timed(starts, texts, document.duration);
  document.lines = lines;
  lyric_video_document_pictures_times_derive(document, 0);
  await file_overwrite_json(found.path, document);
  let written = {
    wrote: true,
    path: found.path,
    lines: lines.length,
    nudged,
    decided: null,
    why: null,
  };
  return written;
}
