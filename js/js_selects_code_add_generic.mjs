import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_insert } from "./list_insert.mjs";
import { add } from "./add.mjs";
import { property_get } from "./property_get.mjs";
import { js_block_find_from_nodes_single } from "./js_block_find_from_nodes_single.mjs";
export function js_selects_code_add_generic(ast, selects, code, index_delta) {
  "Writes one written line of code beside a chosen line in the block that line sits in";
  "Until this written code could only land at the top or the bottom of a block so a line that has to sit between two particular lines was a hand edit every time and the commonest one of those is a value that must be worked out after the line above it and before the line that reads it";
  "The prose family beside this one was already shaped exactly right and only ever differed in what it turned the written value into so this is that same working out asked to parse rather than to quote";
  let f = js_block_find_from_nodes_single(ast, selects);
  let body = property_get(f, "body");
  let index = property_get(f, "index");
  ("Where that line sits in its block is what the two commands above shift by one or by nothing");
  let index_insert = add(index, index_delta);
  ("One statement only because the address names one place and a second statement would have nowhere of its own to be");
  let statement = js_parse_statement(code);
  list_insert(body, index_insert, statement);
}
