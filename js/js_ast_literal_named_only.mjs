import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_stack_node_above } from "./js_stack_node_above.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_add } from "./list_add.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { list_size } from "./list_size.mjs";
export function js_ast_literal_named_only(ast, literal, key_is_of) {
  "$plain ast";
  "$plain literal";
  "Whether every place a parsed file writes a given word, outside its own account of itself, is a place the caller counts as naming something.";
  "WHAT COUNTS AS NAMING SOMETHING IS THE CALLER'S TO DECIDE, and it is the only thing that differs between the two questions asked here. One asks whether the word is the name of a field wherever it is written; the other asks the narrower question of whether it names an entry of an object being built. Everything else - parsing, matching the word, passing over the file's own prose, and requiring that every site found agrees - was written out twice for the sake of that one line.";
  "The file's own account of itself is passed over before anything is counted, so a file that both names something with the word and explains itself with it still reads as one shape. Prose is dropped by its own reader beside this, and counting it here as a second shape would make the two disagree about the same file.";
  "Nothing is answered for a file that never writes the word, because a file with no sites at all is not a file whose sites all agree - it is a file the question was not about.";
  arguments_assert(arguments, 3);
  let sites = [];
  let named = [];
  function js_ast_literal_named_only_lambda(v) {
    let node = property_get(v, "node");
    let held = js_literal_value_get(node);
    let same = equal(held, literal);
    if (not(same)) {
      return;
    }
    let stack = property_get(v, "stack");
    let above = js_stack_node_above(stack);
    let above_type = js_node_type(above);
    let prose_is = equal(above_type, "ExpressionStatement");
    if (prose_is) {
      return;
    }
    list_add(sites, above_type);
    let key_is = key_is_of(node, stack);
    if (key_is) {
      list_add(named, above_type);
    }
  }
  js_visit_types(ast, ["Literal"], js_ast_literal_named_only_lambda);
  let any = list_size_greater_than(sites, 0);
  let left = list_size(sites);
  let right = list_size(named);
  let all_named = equal(left, right);
  let named_only = any && all_named;
  return named_only;
}
