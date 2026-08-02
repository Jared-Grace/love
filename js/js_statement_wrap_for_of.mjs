import { js_selects_block_item } from "./js_selects_block_item.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { json_copy } from "./json_copy.mjs";
import { list_add } from "./list_add.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_statement_wrap_for_of(ast, selects, name_item, code_list) {
  arguments_assert(arguments, 4);
  ("Puts a chosen line inside a loop over a list, so the line that handled one");
  ("thing now handles each of them. Writing one case and then repeating it is how");
  ("this shape is reached by hand every time, and the repeating is the whole");
  ("edit.");
  ("The line is copied before its old node is turned into the loop, because the");
  ("loop it is going into is the same node it is coming out of.");
  let item = js_selects_block_item(ast, selects);
  let pieces = ["for (let ", name_item, " of ", code_list, ") {}"];
  let code = text_combine_multiple(pieces);
  let loop = js_parse_statement(code);
  let inner = js_function_declaration_to_block_body(loop);
  let copy = json_copy(item);
  list_add(inner, copy);
  object_replace(item, loop);
}
