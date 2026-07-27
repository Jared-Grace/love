import { js_flo_body } from "./js_flo_body.mjs";
import { list_last } from "./list_last.mjs";
export function js_find_statement_last(ast) {
  "The last line of the function. Every other address here names something about";
  "a line — what it calls, what it binds, what it says — and the last line has no";
  "such property to name, only its place.";
  "It is also the one end of a block that cannot be reached by naming a";
  "neighbour, because it has no line after it to name.";
  let body = js_flo_body(ast);
  let last = list_last(body);
  return last;
}
