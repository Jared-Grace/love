import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
export async function function_work_size_direct(f_name) {
  arguments_assert(arguments, 1);
  ("How many lines of work the named function holds at the top of its own body, counting nothing that sits inside a loop, a branch or a function written within it.");
  ("The twin of the count at every depth, and the two together say which tool a long function needs. A function whose two counts are close is a straight run of work, and a run is what the span extractor cuts. A function counting eighty deep and four direct is four lines wrapping a closure, and there is no span in it to take - what would have to move is the closure itself, which is a different edit and, at the time of writing, one nothing here can make.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let body = js_function_declaration_to_block_body(declaration);
  let work = list_filter(body, js_statement_work_is);
  let size = list_size(work);
  return size;
}
