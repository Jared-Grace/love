import { js_find_call_index_argument } from "./js_find_call_index_argument.mjs";
import { js_statement_find_call_named_index } from "./js_statement_find_call_named_index.mjs";
import { js_call_named_find_index } from "./js_call_named_find_index.mjs";
import { js_function_node_find_named_node } from "./js_function_node_find_named_node.mjs";
import { js_find_call_name_includes } from "./js_find_call_name_includes.mjs";
import { js_type_find } from "./js_type_find.mjs";
import { js_find_object_containing_text } from "./js_find_object_containing_text.mjs";
import { js_find_statement_after } from "./js_find_statement_after.mjs";
import { js_find_body_block } from "./js_find_body_block.mjs";
import { js_find_return } from "./js_find_return.mjs";
import { js_find_statement_last } from "./js_find_statement_last.mjs";
import { js_find_statement_index } from "./js_find_statement_index.mjs";
import { js_find_string_starting_with } from "./js_find_string_starting_with.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
import { js_statement_find_call_named } from "./js_statement_find_call_named.mjs";
import { js_call_named_find } from "./js_call_named_find.mjs";
export function example_selectors() {
  "Every address an example is allowed to name, by name. A selector and a transform multiply, so an example that can only use whichever address its verb was written with can show a cell of that multiplication and never a column of it.";
  "A list rather than a lookup by file, because an example naming something that is not an address should say so while the corpus is being read, not reach into the repo and run whatever answers to the name.";
  let selectors = {
    js_find_return,
    js_find_statement_last,
    js_find_statement_index,
    js_find_statement_after,
    js_find_body_block,
    js_find_string_starting_with,
    js_find_declaration_named,
    js_statement_find_call_named,
    js_call_named_find,
    js_find_object_containing_text,
    js_type_find,
    js_find_call_name_includes,
    js_function_node_find_named_node,
    js_call_named_find_index,
    js_statement_find_call_named_index,
    js_find_call_index_argument,
  };
  return selectors;
}
