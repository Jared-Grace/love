import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { bible_usfm_line_lone_marker_is } from "./bible_usfm_line_lone_marker_is.mjs";
export function bible_usfm_lines_lone_markers_joined(chapter_lines) {
  arguments_assert(arguments, 1);
  ("$plain chapter_lines");
  ("The lines of one chapter of usfm with every mark that stands on a line of its own moved down onto the verse line beneath it, so that each verse arrives carrying the mark that says how it is set.");
  ("This is one printing being read into the shape another printing already writes. The Berean writes the step and the verse together on one line; the World English Bible and the unfoldingWord texts write the step on its own line and the verse on the next. Everything downstream reads the mark that opens a line, so the second shape lost the step and left the verse looking like a line that says nothing about itself - a psalm came out flat, with the couplets unstepped and the verse numbers still standing in it because the verse mark was the opening mark and so had already been eaten.");
  ("Joining rather than remembering is what keeps this cheap. What comes out is lines of usfm, the same kind of thing that went in, so the reader beneath is unchanged and knows nothing about either printing; and a file already written the first way passes through untouched, because it has no marks standing alone to move.");
  ("A held mark whose next line is not a verse is put back exactly where it was. That mark meant something to somebody - it is only unreadable when it is alone, and it is not this one's business to decide what happens to it.");
  let out = [];
  let held = "";
  for (let usfm_line of chapter_lines) {
    let b = text_empty_is(held);
    let holding = not(b);
    let folded = false;
    if (holding) {
      let opens_verse = text_starts_with(usfm_line, "\\v ");
      if (opens_verse) {
        let joined = text_combine_multiple([held, " ", usfm_line]);
        list_add(out, joined);
        folded = true;
      } else {
        list_add(out, held);
      }
      held = "";
    }
    if (not(folded)) {
      let lone = bible_usfm_line_lone_marker_is(usfm_line);
      if (lone) {
        held = usfm_line;
      } else {
        list_add(out, usfm_line);
      }
    }
  }
  let b2 = text_empty_is(held);
  let holding_last = not(b2);
  if (holding_last) {
    list_add(out, held);
  }
  return out;
}
