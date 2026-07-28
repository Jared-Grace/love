import { arguments_assert } from "./arguments_assert.mjs";
import { list_single } from "./list_single.mjs";
import { js_block_body_get } from "./js_block_body_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
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
  let block = list_single(selects);
  let body = js_block_body_get(block);
  let quoted = JSON.stringify(sentence);
  let code = text_combine(quoted, ";");
  let statement = js_parse_statement(code);
  list_insert(body, 0, statement);
}
