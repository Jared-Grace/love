import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_mark_open } from "./app_code_note_name_mark_open.mjs";
import { app_code_note_name_mark_close } from "./app_code_note_name_mark_close.mjs";
import { js_comments_get } from "./js_comments_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { less_than } from "./less_than.mjs";
import { text_index_of_from_try } from "./text_index_of_from_try.mjs";
import { add } from "./add.mjs";
import { text_identifier_whole_is } from "./text_identifier_whole_is.mjs";
import { text_identifier_char_is } from "./text_identifier_char_is.mjs";
export function app_code_note_marks(code) {
  arguments_assert(arguments, 1);
  ("every marked name a program's notes hold, in the order they stand, each as the name and the two places in the whole program where its mark opens and closes");
  ("THE ONE SCAN, because two different questions are asked of the same marks and neither may find them for itself. Which names a program teaches is one; where on the screen to fade a bracket and colour what it holds is the other. Scanned twice, a change to the mark has to be made twice, and the day it is made once the colour lands somewhere the reader sees no bracket.");
  ("Places are counted in the whole program rather than inside the note, because that is what every other reader of this program speaks in - the parser gives a name's place in the program, and the painter writes the program out from end to end.");
  ("Only the notes are looked in, never the whole program, because the mark is a round bracket and a program is full of round brackets that mean calling something. Asking the parser where the notes are is what keeps a call from being read as a mark.");
  ("A NOTE IS NOT SAFE GROUND EITHER, BECAUSE THIS COURSE TEACHES PUTTING THE TWO SLASHES IN FRONT OF A LINE OF CODE. A skipped line is a note holding a whole call, brackets and all, so the lesson about skipping a line drew 40 + 20 in a cup's red. Two things are asked of a bracket before it counts as a mark, and they are the two a reader uses without thinking: a call's bracket is stuck to the end of the name being called, where a mark's stands free after a space; and a mark holds a name, where a call holds whatever is being handed over.");
  ("Neither test alone would do. The first alone would take the brackets in add (4 + 6) first for a mark, and the second alone would take the c in a skipped console.log(c) for the cup the lesson is teaching about.");
  ("A bracket that opens and never closes ends the search of that note rather than throwing. What is being painted is a lesson's own writing, and the worst an unclosed bracket can do here is leave a note drawn plainly - which is what it looked like before any of this existed.");
  let open = app_code_note_name_mark_open();
  let close = app_code_note_name_mark_close();
  let comments = js_comments_get(code);
  let marks = [];
  for (let comment of comments) {
    let start = property_get(comment, "start");
    let end = property_get(comment, "end");
    let note = text_slice(code, start, end);
    let from = 0;
    while (less_than(from, end)) {
      let open_at = text_index_of_from_try(note, open, from);
      if (less_than(open_at, 0)) {
        break;
      }
      let name_at = add(open_at, 1);
      let close_at = text_index_of_from_try(note, close, name_at);
      if (less_than(close_at, 0)) {
        break;
      }
      let name = text_slice(note, name_at, close_at);
      let named = text_identifier_whole_is(name);
      let glued = false;
      if (less_than(0, open_at)) {
        let before_at = subtract(open_at, 1);
        let before = text_slice(note, before_at, open_at);
        let name_char = text_identifier_char_is(before);
        let close_char = equal(before, close);
        glued = name_char || close_char;
      }
      if (named && not(glued)) {
        let mark_from = add(start, open_at);
        let right = add(close_at, 1);
        let mark_to = add(start, right);
        marks.push([name, mark_from, mark_to]);
      }
      from = add(close_at, 1);
    }
  }
  return marks;
}
