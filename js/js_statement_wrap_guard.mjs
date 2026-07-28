import { arguments_assert } from "./arguments_assert.mjs";
import { js_statement_wrap_if } from "./js_statement_wrap_if.mjs";
import { js_statement_if_return_add } from "./js_statement_if_return_add.mjs";
export function js_statement_wrap_guard(ast, selects) {
  arguments_assert(arguments, 2);
  ("Turns the chosen line into a guard - if this, then stop here - which is one");
  ("idea and was two commands.");
  ("The two halves were always run together and always in this order, and running");
  ("them apart leaves the file in a state nobody wants: a test with an empty body,");
  ("which is a line that reads as a decision and decides nothing. A pairing that");
  ("close belongs in one command, and each half stays where it is for the times");
  ("only one of them is wanted.");
  ("Wrapping puts the new node in the place of the old one rather than beside it,");
  ("so the selection still names the line after the first half - which is why the");
  ("second half needs no fresh address and this can be two calls and nothing else.");
  js_statement_wrap_if(ast, selects);
  js_statement_if_return_add(ast, selects);
}
