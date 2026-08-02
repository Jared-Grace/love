import { js_selects_block_body } from "./js_selects_block_body.mjs";
import { js_prose_statement } from "./js_prose_statement.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_insert } from "./list_insert.mjs";
export function js_block_prose_add(ast, selects, sentence) {
  arguments_assert(arguments, 3);
  ("Writes a line of the function's own account of itself at the top of a chosen");
  ("block. An explanation here is a real statement rather than a stripped comment,");
  ("so it was always writable in principle and never once by name - which left");
  ("every newly authored function to be finished by hand just to say what it is");
  ("for.");
  ("It goes first because that is where an account belongs: a reader meets it");
  ("before the work it accounts for.");
  ("One sentence with no comma and no full stop, because the splitter that hands a");
  ("joined list over would read either one as the end of this argument and the");
  ("start of another.");
  let body = js_selects_block_body(selects);
  let statement = js_prose_statement(sentence);
  list_insert(body, 0, statement);
}
