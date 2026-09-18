import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_parenthesis_left } from "./js_code_parenthesis_left.mjs";
export function app_code_note_name_mark_open() {
  arguments_assert(arguments, 0);
  ("the character that opens the mark put around a name where it stands inside a note in a lesson's program");
  ("THE MARK IS SPELLED IN ONE PLACE AND NOWHERE ELSE. Two sides of the screen have to agree about it: the lesson that writes a note puts the mark around the name, and the painter that draws the note finds the mark again in a finished program so it can fade it and colour what it holds. Spelled twice, a change of mind changes one of them, and the painter then fades a character the writer no longer writes.");
  ("A round bracket because the lines of English above these boxes already name a piece of code that way, so the note is not teaching a second mark.");
  let c = js_code_parenthesis_left();
  return c;
}
