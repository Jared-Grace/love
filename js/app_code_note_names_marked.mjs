import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_marks } from "./app_code_note_marks.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
export function app_code_note_names_marked(code) {
  arguments_assert(arguments, 1);
  ("every name a program's own notes mark, once each, in the order the notes first mark them");
  ("THE NOTES DECIDE WHICH NAMES ARE COLOURED, NOT THE CODE. A program says console and log as readily as it says a cup's name, and neither of those is a thing the lesson is teaching about; what the author chose to mark in a note is exactly the set of names the screen is asking the reader to follow. So the mark is both the thing a reader sees and the thing that picks the colours, and an author cannot mark one name and colour another.");
  ("Order of first marking rather than order of declaring, so a name keeps its colour when a lesson rewrites the program around it, and so nothing has to be written down per lesson. First marked is first in the list and takes the first colour.");
  ("The marks are found next door rather than here, because the painter needs the same marks with their places on them, and one scan answering both is the only arrangement in which the two cannot disagree.");
  let marks = app_code_note_marks(code);
  let names = [];
  for (let mark of marks) {
    let name = mark[0];
    if (list_includes_not(names, name)) {
      names.push(name);
    }
  }
  return names;
}
