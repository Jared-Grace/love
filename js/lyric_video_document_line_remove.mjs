import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { lyric_video_document_name_found } from "./lyric_video_document_name_found.mjs";
import { equal } from "./equal.mjs";
import { lyric_video_document_lines_relaid_write } from "./lyric_video_document_lines_relaid_write.mjs";
import { property_get } from "./property_get.mjs";
export async function lyric_video_document_line_remove(name, index_said) {
  arguments_assert(arguments, 2);
  ("$plain name");
  ("$plain index_said");
  ("Takes one line out of a lyric video's timing document and lays the rest out again, so the line before it stays on the screen until the next one begins.");
  ("★ IT EXISTS FOR WORDS THE RECORDING SINGS THAT THE SCREEN SHOULD NOT CLAIM. A repeat sung softly in the background, half pronounced, reads as a mistake when it is captioned as clearly as the verse; a person who listened decided it should not be shown, and this writes that decision down. It is the undoing of the command that adds a repeat, and like that one it is handed the line rather than looking for it, because which showing to drop is the listener's call.");
  ("THE WRITER'S REFUSAL IS CARRIED UP, for the same reason the command that adds a repeat carries it: an answer that said which line went and nothing about whether the document was saved would read as a success when it was not.");
  let index = number_from_text(index_said);
  let found = await lyric_video_document_name_found(name);
  let unknown = equal(found, null);
  if (unknown) {
    let nothing = {
      wrote: false,
      why: "no timing document answers to that name",
      text: null,
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
      text: null,
      written: null,
    };
    return missing;
  }
  function lambda(one_line, i) {
    let b = equal(i, index);
    let n = not(b);
    return n;
  }
  let kept = lines.filter(lambda);
  function lambda2(one_line) {
    let r2 = one_line.start;
    return r2;
  }
  let starts = kept.map(lambda2);
  function lambda3(one_line) {
    let r3 = one_line.text;
    return r3;
  }
  let texts = kept.map(lambda3);
  let written = await lyric_video_document_lines_relaid_write(
    found,
    starts,
    texts,
  );
  let r = {
    wrote: property_get(written, "wrote"),
    why: property_get(written, "why"),
    text: line.text,
    written,
  };
  return r;
}
