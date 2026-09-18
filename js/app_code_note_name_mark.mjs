import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_note_name_mark_open } from "./app_code_note_name_mark_open.mjs";
import { app_code_note_name_mark_close } from "./app_code_note_name_mark_close.mjs";
import { list_join_empty } from "./list_join_empty.mjs";
export function app_code_note_name_mark(name) {
  arguments_assert(arguments, 1);
  ("a name written the way a note in a lesson's program writes it: marked, so a reader can tell the letter is the name of a cup and not an English word");
  ("THIS IS WHAT A LESSON CALLS, AND THE ONLY THING IT CALLS. A lesson author never spells the mark, so changing the mark changes every note in the course at once, and the painter that finds the mark again is looking for the same two characters by construction.");
  ("The first name this course hands out is a, which is also an English word, so a note ending on it reads as a sentence that stopped before its last word. That is the whole reason the mark exists, and it is the reason it is put on every name rather than on that one - a mark that appears only where a name happens to collide with English teaches the reader nothing about what it means.");
  let open = app_code_note_name_mark_open();
  let close = app_code_note_name_mark_close();
  let marked = list_join_empty([open, name, close]);
  return marked;
}
