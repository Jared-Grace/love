import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_object_key_nodes } from "./js_object_key_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { js_literal_value_get } from "./js_literal_value_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_stack_node_above } from "./js_stack_node_above.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { list_size_greater_than } from "./list_size_greater_than.mjs";
import { list_size } from "./list_size.mjs";
export function js_code_literal_entry_key_only(code, literal) {
  arguments_assert(arguments, 2);
  ("Whether every place a file writes a given word, outside its own account of");
  ("itself, is the word standing before the colon of a written-out record.");
  ("The narrower half of a drop that used to cover the naming of a field in all");
  ("three of its shapes. Two of those shapes have room for a call - the word inside");
  ("the brackets of a lookup, and the word handed second to a field call - and the");
  ("command that routes field names repairs both. This is the third, and it has no");
  ("room at all: a call written before a colon stops being a call and becomes a");
  ("field named by the letters of the call, so what would be written there is not a");
  ("wrong repair but an unparseable one.");
  ("So a file whose only mentions are of this one shape is not a site a report of");
  ("repeated spellings should offer, for the same reason as a sentence that merely");
  ("mentions the word: there is nowhere in it for a call to stand. Offering it asks");
  ("forever for something nobody can do, and the command that answers such a report");
  ("in one go would stop at that file rather than at the end of its list.");
  ("The word's own account of itself is passed over before anything is counted, so");
  ("a file that both names an entry with the word and explains itself with it still");
  ("reads as one shape and is still dropped. Prose is dropped by its own reader");
  ("beside this, and counting it here as a second shape would make the two disagree");
  ("about the same file.");
  let ast = js_parse(code);
  let keys = js_object_key_nodes(ast);
  let sites = [];
  let named = [];
  function lambda(v) {
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
    let key_is = list_includes(keys, node);
    if (key_is) {
      list_add(named, above_type);
    }
  }
  js_visit_types(ast, ["Literal"], lambda);
  let any = list_size_greater_than(sites, 0);
  let left = list_size(sites);
  let right = list_size(named);
  let all_named = equal(left, right);
  let entry_key_only = any && all_named;
  return entry_key_only;
}
