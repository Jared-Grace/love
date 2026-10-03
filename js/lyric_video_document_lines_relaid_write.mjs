import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lyric_timing_lines_timed } from "./lyric_timing_lines_timed.mjs";
import { json_equal_not } from "./json_equal_not.mjs";
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
  ("Lays the lines of one timing document out again from a changed list of beginnings and words and writes it back, refusing where the document is not already laid out the way the line builder lays one out.");
  ("★ THE LINE BUILDER IS ASKED FOR THE WHOLE DOCUMENT RATHER THAN FOR THE ONE LINE THAT CHANGED, BECAUSE A LINE ENDS WHERE THE NEXT ONE BEGINS. Moving one beginning moves the end of the line before it, and adding a beginning moves the end of the line it lands after, so no change here is ever confined to the line it is about. Where that rule lives is the builder, and spelling it a second time is how two places come to disagree about a twentieth of a second.");
  ("★ IT REFUSES WHEN THE DOCUMENT IS NOT ALREADY THE BUILDER'S ARITHMETIC, AND THAT ONE QUESTION IS THE WHOLE GUARD. A document whose every line already ends exactly where the builder would end it has nothing in it beyond its beginnings, so laying it out again can only change what the change implies. A document that does not - somebody held a caption a moment longer, or an older rule put it there - holds a decision in its endings, and laying it out again would rub that decision out quietly while reporting a success. Asking the question of the document as it stands is also what makes the answer independent of what kind of change is being made, so the two commands above this share one guard instead of each reasoning about which of their neighbours were allowed to move.");
  ("What is handed back says how many lines there now are rather than the document, because the caller named the change and the one thing it cannot know is what the layout did with it.");
  let document = found.document;
  let starts_now = list_map_property(document.lines, "start");
  let texts_now = list_map_property(document.lines, "text");
  let laid = lyric_timing_lines_timed(starts_now, texts_now, document.duration);
  let restated = json_equal_not(laid, document.lines);
  if (restated) {
    let refused = {
      wrote: false,
      why: "this document's lines are not what the line builder lays out from their own beginnings, so laying it out again would rub out whatever decided their endings",
      laid,
      lines: document.lines,
    };
    return refused;
  }
  let lines = lyric_timing_lines_timed(starts, texts, document.duration);
  document.lines = lines;
  await file_overwrite_json(found.path, document);
  let written = {
    wrote: true,
    path: found.path,
    lines: lines.length,
  };
  return written;
}
