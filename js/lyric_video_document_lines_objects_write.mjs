import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { text_is } from "./text_is.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function lyric_video_document_lines_objects_write(path) {
  arguments_assert(arguments, 1);
  ("$plain path");
  ("Writes a lyric video document whose lines are bare pieces of text back out with each line held as a thing of its own carrying that text, and leaves a document already written that way untouched.");
  ("★ THE TWO SHAPES READ THE SAME TO A PERSON AND NOT AT ALL TO THE CODE. Every reader of these documents asks a line for its text, so the four psalms still holding bare pieces of text answer with nothing, and nothing has no text of its own — the copy that gives a part its pictures stopped on exactly that. One shape is one reader rather than a question asked at every call.");
  ("A LINE HELD AS A THING OF ITS OWN IS THE SHAPE KEPT, because that is what a line gains a start and an end on once the passage is sung, and the other direction would have to throw those away.");
  let document = await file_read_json(path);
  let lines = [];
  let changed = false;
  for (let line of document.lines) {
    if (text_is(line)) {
      let made = {
        text: line,
      };
      lines.push(made);
      changed = true;
      continue;
    }
    lines.push(line);
  }
  if (equal(changed, false)) {
    let already = {
      written: false,
      lines: lines.length,
    };
    return already;
  }
  document.lines = lines;
  await file_overwrite_json(path, document);
  let r = {
    written: true,
    lines: lines.length,
  };
  return r;
}
