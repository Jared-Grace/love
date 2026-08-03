import { list_filter_size } from "./list_filter_size.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { js_statement_work_is } from "./js_statement_work_is.mjs";
export async function function_work_size_direct(f_name) {
  arguments_assert(arguments, 1);
  ("How many lines of work the named function holds at the top of its own body, counting nothing that sits inside a loop, a branch or a function written within it.");
  ("The twin of the count at every depth, and the two together say how a long function is long. A function whose two counts are close is a straight run of work. A function counting seventy deep and five direct is five lines wrapping a closure, and all its size is inside that closure.");
  ("It was asked in order to find out whether a second tool was needed for the second shape, and the answer was no. A closure written beside the lines that use it is a statement like any other, so the span extractor takes it as a span of one: it moves out under its own name, reads what it closed over as parameters, and is handed back to the line that passed it on. Measured on the curry step of the normalize pipeline, which went from seventy lines of work to five.");
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let body = js_function_declaration_to_block_body(declaration);
  let size = list_filter_size(body, js_statement_work_is);
  return size;
}
