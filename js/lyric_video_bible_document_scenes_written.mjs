import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_bible_document_read } from "./lyric_video_bible_document_read.mjs";
import { not } from "./not.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { lyric_video_picture_scenes_ask } from "./lyric_video_picture_scenes_ask.mjs";
import { fal_ask } from "./fal_ask.mjs";
import { text_json_list } from "./text_json_list.mjs";
export async function lyric_video_bible_document_scenes_written(
  version,
  book_code,
  chapter_number,
  count,
  model,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "$plain count";
  "$plain model";
  "Have a writing model author the scenes for one passage's pictures, and answer them beside the whole reply they came in.";
  "★ IT WRITES NOTHING DOWN, AND THAT IS WHAT MAKES IT SAFE TO RUN UNASKED. A passage already carrying authored scenes has had somebody read the psalm over them; a command that reached in and replaced those would spend that reading. So this answers what a model wrote and stops, and putting scenes into a document stays a separate step somebody asks for by name.";
  "★ IT ANSWERS THE REPLY WHOLE ALONGSIDE THE SCENES, because the reply carries what was read and written and that is the price of this half of the bill. Thirty-one thousand scenes is the number that decides whether a whole Bible is worth starting, and it cannot be worked out from a list of sentences.";
  "★ THE COUNT IS THE CALLER'S AND NOT WORKED OUT HERE. How many pictures a passage wants is a judgment about how often the ground should change behind a reader, and it trades directly against the drawing bill - a psalm of nineteen lines has been given eight and could be given four. Deciding it here would freeze one guess into every passage.";
  "A PASSAGE WITH NO DOCUMENT IS ANSWERED WITH NOTHING, the same as the reader beneath it does, because most of the Bible is in that state and it is an answer rather than a failure.";
  "THE SUNG LINES GO TO THE WRITER IN ORDER AND WITHOUT THEIR TIMES. The times are what the writer has no use for, and a number beside every line is a number a model may start writing back to you.";
  arguments_assert(arguments, 5);
  let document = await lyric_video_bible_document_read(
    version,
    book_code,
    chapter_number,
  );
  let none = not(document);
  if (none) {
    let nothing = null;
    return nothing;
  }
  let texts = property_list_map_property(document, "lines", "text");
  let lines_text = list_join_newline(texts);
  let ask = lyric_video_picture_scenes_ask(lines_text, count);
  let answer = await fal_ask(model, ask);
  let scenes = text_json_list(answer.output);
  let r = {
    version,
    book_code,
    chapter_number,
    model,
    count,
    lines: texts.length,
    scenes,
    answer,
  };
  return r;
}
