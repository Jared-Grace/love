import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_styles } from "./app_code_note_styles.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
import { text_empty } from "./text_empty.mjs";
import { range_from } from "./range_from.mjs";
import { add } from "./add.mjs";
import { text_slice } from "./text_slice.mjs";
import { json_equal } from "./json_equal.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_note_runs(code) {
  arguments_assert(arguments, 1);
  ("a program cut into the longest pieces that are all drawn the same way, each piece as the text of it, the colour it is drawn in, how strongly, and the colour of the patch behind it");
  ("THE CUTTING IS DONE HERE AND THE DRAWING NEXT DOOR, because one of the two is arithmetic over text and the other is a run of spans put into a page, and neither is easier to read while the other is in front of it. This half can be asked a question and its answer read; the half that draws can only be looked at.");
  ("Neighbours drawn alike are joined rather than left as one piece each, because a character in a span of its own is a chance for a browser to break a line inside a word, and code that wraps mid-word is code the reader has to reassemble.");
  let styles = app_code_note_styles(code);
  let size = text_size(code);
  let last_of_code = subtract(size, 1);
  let runs = [];
  let saying = text_empty();
  let style = null;
  for (let index of range_from(0, last_of_code)) {
    let after = add(index, 1);
    let character = text_slice(code, index, after);
    let next = styles[index];
    if (json_equal(next, style)) {
      saying = list_join_empty([saying, character]);
      continue;
    }
    if (style) {
      runs.push([saying, style[0], style[1], style[2]]);
    }
    saying = character;
    style = next;
  }
  if (style) {
    runs.push([saying, style[0], style[1], style[2]]);
  }
  return runs;
}
