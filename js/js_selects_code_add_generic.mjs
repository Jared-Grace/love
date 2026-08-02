import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_selects_statement_add_generic } from "./js_selects_statement_add_generic.mjs";
export function js_selects_code_add_generic(ast, selects, code, index_delta) {
  "Writes one written line of code beside a chosen line in the block that line sits in";
  "Until this written code could only land at the top or the bottom of a block so a line that has to sit between two particular lines was a hand edit every time and the commonest one of those is a value that must be worked out after the line above it and before the line that reads it";
  "The prose family beside this one was already shaped exactly right and only ever differed in what it turned the written value into so this is that same working out asked to parse rather than to quote";
  "One statement only because the address names one place and a second statement would have nowhere of its own to be";
  let statement = js_parse_statement(code);
  js_selects_statement_add_generic(ast, selects, statement, index_delta);
}
