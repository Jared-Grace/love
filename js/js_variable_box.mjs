import { arguments_assert } from "./arguments_assert.mjs";
import { js_variable_box_refusals } from "./js_variable_box_refusals.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { js_variable_box_assignments } from "./js_variable_box_assignments.mjs";
import { js_variable_declarator_single } from "./js_variable_declarator_single.mjs";
import { js_shorthand_properties_expand } from "./js_shorthand_properties_expand.mjs";
import { js_identifiers_referenced_named_nodes } from "./js_identifiers_referenced_named_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add } from "./list_add.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_variable_box_read_replace } from "./js_variable_box_read_replace.mjs";
import { each } from "./each.mjs";
import { js_variable_box_write_replace } from "./js_variable_box_write_replace.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_list_first } from "./property_list_first.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { property_set } from "./property_set.mjs";
export function js_variable_box(ast, f_name, name, name_held) {
  arguments_assert(arguments, 4);
  ("$plain f_name");
  ("the word the function is written under, carried only so that a refusal can say which function it was asked about.");
  ("$plain name");
  ("the word one of that function's own locals is written under.");
  ("$plain name_held");
  ("the word the record that local moves into is written under.");
  ("Moves one of a function's locals into a one-entry record, rewriting every reading of it, every writing of it, and the line that made it.");
  ("THE WHOLE OF THE PROOF IS THAT EVERY MENTION GETS REWRITTEN, which is what the two readings in front of the writing are for: one refuses every shape of mention that cannot be found by its word, the other refuses every shape of write that would mean something else as a call.");
  ("THE ORDER OF THE STEPS MATTERS IN ONE PLACE. Entries written in the short form, where one word stands for both the name of the entry and the value in it, are written out in full first - otherwise rewriting the value would rewrite the name of the entry with it, and every reader of that record would ask for a word that is no longer there.");
  let refusals = js_variable_box_refusals(ast, name);
  let free_is = list_empty_is(refusals);
  true_is_assert_json(free_is, {
    f_name,
    name,
    refusals,
    hint: "this name is bound or changed somewhere a plain word cannot be followed, so moving it into a record would leave a mention behind",
  });
  let assignments = js_variable_box_assignments(ast, name);
  let declarator = js_variable_declarator_single(ast, f_name, name);
  js_shorthand_properties_expand(ast, name);
  let referenced = js_identifiers_referenced_named_nodes(ast, name);
  let id = property_get(declarator, "id");
  let lefts = list_map_property(assignments, "left");
  list_add(lefts, id);
  let reads = list_difference(referenced, lefts);
  function read_each(node) {
    js_variable_box_read_replace(node, name_held, name);
  }
  each(reads, read_each);
  function assignment_each(node2) {
    js_variable_box_write_replace(node2, name_held, name);
  }
  each(assignments, assignment_each);
  let init = property_get(declarator, "init");
  let boxed = js_parse_expression("({ field: value })");
  let entry = property_list_first(boxed, "properties");
  let value = js_identifier_expression(name);
  property_set(entry, "key", value);
  property_set(entry, "value", init);
  property_set(declarator, "init", boxed);
  property_set(id, "name", name_held);
}
