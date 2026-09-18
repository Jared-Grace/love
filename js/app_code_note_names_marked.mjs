import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_mark_open } from "./app_code_note_name_mark_open.mjs";
import { app_code_note_name_mark_close } from "./app_code_note_name_mark_close.mjs";
import { js_comments_get } from "./js_comments_get.mjs";
import { property_get } from "./property_get.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_index_of_from_try } from "./text_index_of_from_try.mjs";
import { add } from "./add.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function app_code_note_names_marked(code) {
  arguments_assert(arguments, 1);
  ("every name a program's own notes mark, in the order the notes first mark them");
  ("THE NOTES DECIDE WHICH NAMES ARE COLOURED, NOT THE CODE. A program says console.log and let alike, and neither is a cup the lesson is teaching about; what the author chose to mark in a note is exactly the set of names the screen is asking the reader to follow. So the mark is both the thing a reader sees and the thing that picks the colours, and an author cannot mark one and colour another.");
  ("Order of first marking rather than order of declaring, so a name keeps its colour when a lesson rewrites the program around it, and so nothing has to be written down per lesson. First marked is first in the list and takes the first colour.");
  ("Only the notes are searched, never the whole program, because the marks are round brackets and a program is full of round brackets that mean calling something. Asking the parser where the notes are is what keeps a call from being read as a mark.");
  let open = app_code_note_name_mark_open();
  let close = app_code_note_name_mark_close();
  let comments = js_comments_get(code);
  let names = [];
  for (let comment of comments) {
    let start = property_get(comment, "start");
    let end = property_get(comment, "end");
    let note = text_slice(code, start, end);
    let from = 0;
    while (true) {
      let open_at = text_index_of_from_try(note, open, from);
      if (less(open_at, 0)) {
        break;
      }
      let name_at = add(open_at, 1);
      let close_at = text_index_of_from_try(note, close, name_at);
      if (less(close_at, 0)) {
        break;
      }
      let name = text_slice(note, name_at, close_at);
      if (list_includes_not(names, name)) {
        names.push(name);
      }
      from = add(close_at, 1);
    }
  }
  return names;
}
