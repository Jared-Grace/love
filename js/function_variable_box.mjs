import { property_list_first } from "./property_list_first.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { add } from "./add.mjs";
import { js_variable_box_refusals } from "./js_variable_box_refusals.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
import { js_variable_box_assignments } from "./js_variable_box_assignments.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { property_get } from "./property_get.mjs";
import { property_equals_try } from "./property_equals_try.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { js_shorthand_properties_expand } from "./js_shorthand_properties_expand.mjs";
import { js_identifiers_referenced_named_nodes } from "./js_identifiers_referenced_named_nodes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_add } from "./list_add.mjs";
import { list_difference } from "./list_difference.mjs";
import { js_parse_expression } from "./js_parse_expression.mjs";
import { property_set } from "./property_set.mjs";
import { js_identifier_expression } from "./js_identifier_expression.mjs";
import { js_expression_string } from "./js_expression_string.mjs";
import { object_replace } from "./object_replace.mjs";
import { each } from "./each.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_auto } from "./function_auto.mjs";
export async function function_variable_box(f_name, name) {
  arguments_assert(arguments, 2);
  ("$plain name");
  ("the word one of this function's own locals is written under. Every mention of it inside the function is rewritten; nothing outside the function is touched, because a local has no mentions outside it.");
  ("Keep one of a function's locals in a one-entry record instead of in a plain local, so that a run of lines cut out of the function afterwards still reads and writes the same place rather than a copy of it.");
  ("THIS IS THE MOVE THAT MAKES A CUT SAFE, AND ON ITS OWN IT CHANGES NOTHING. A local held by a function and read inside the functions nested in it is one place, so a nested function sees every write the moment it happens. Cut that nested function out into a file of its own and it can only be handed the value and only hand a value back, and the copy is right only at the instant it crosses - which is how a lift left the replacing game unplayable for nine days. A record is one place again: everything given the record reads and writes it at the moment it actually runs, which is what the local did.");
  ("IT IS THE SAME CODE BY REASONING RATHER THAN BY TRYING IT. A plain local and a one-entry record differ in how they are spelled and in nothing else - both are one place, both are made at the same point in the run, both live as long as anything can still reach them. So the whole of the proof is that every mention gets rewritten, which is what the two readings in front of the write are for: one refuses every shape of mention that cannot be found by its word, the other refuses every shape of write that would mean something else as a call.");
  ("A MENTION THAT WERE MISSED WOULD FAIL LOUDLY RATHER THAN QUIETLY, which is the second half of why this is safe to run unasked. The local is renamed rather than left beside the record, so anything still asking for the old word is asking for a word nothing binds - the gate that reads for those names it, and the page throws on the line rather than drawing something subtly wrong.");
  ("It canonicalizes afterwards because the lines it writes call two functions the file may never have imported, and a file recorded in a commit without them does not load.");
  let held = add(name, "_held");
  function lambda(ast) {
    let refusals = js_variable_box_refusals(ast, name);
    let free_is = list_empty_is(refusals);
    true_is_assert_json(free_is, {
      f_name,
      name,
      refusals,
      hint: "this name is bound or changed somewhere a plain word cannot be followed, so moving it into a record would leave a mention behind",
    });
    let assignments = js_variable_box_assignments(ast, name);
    let declarators = js_list_type_nodes(ast, "VariableDeclarator");
    function declared_is(declarator2) {
      let id2 = property_get(declarator2, "id");
      let is = property_equals_try(id2, "name", name);
      return is;
    }
    let mine = list_filter(declarators, declared_is);
    let mine_size = list_size(mine);
    let alone_is = equal(mine_size, 1);
    true_is_assert_json(alone_is, {
      f_name,
      name,
      mine_size,
      hint: "a name to move into a record has to be written down as a local exactly once in the function - none of them and it is not a local here, more than one and there is more than one place under the one word",
    });
    let declarator = list_first(mine);
    js_shorthand_properties_expand(ast, name);
    let referenced = js_identifiers_referenced_named_nodes(ast, name);
    let id = property_get(declarator, "id");
    let lefts = list_map_property(assignments, "left");
    list_add(lefts, id);
    let reads = list_difference(referenced, lefts);
    function read_each(node) {
      let got = js_parse_expression(
        text_combine_multiple([fn_name("property_get"), '(holder, "field")']),
      );
      let arguments_got = property_get(got, "arguments");
      let value = js_identifier_expression(held);
      property_set(arguments_got, 0, value);
      let value2 = js_expression_string(name);
      property_set(arguments_got, 1, value2);
      object_replace(node, got);
    }
    each(reads, read_each);
    function assignment_each(node2) {
      let right = property_get(node2, "right");
      let written = js_parse_expression(
        text_combine_multiple([
          fn_name("property_set"),
          '(holder, "field", value)',
        ]),
      );
      let arguments_written = property_get(written, "arguments");
      let value3 = js_identifier_expression(held);
      property_set(arguments_written, 0, value3);
      let value4 = js_expression_string(name);
      property_set(arguments_written, 1, value4);
      property_set(arguments_written, 2, right);
      object_replace(node2, written);
    }
    each(assignments, assignment_each);
    let init = property_get(declarator, "init");
    let boxed = js_parse_expression("({ field: value })");
    let entry = property_list_first(boxed, "properties");
    let value5 = js_identifier_expression(name);
    property_set(entry, "key", value5);
    property_set(entry, "value", init);
    property_set(declarator, "init", boxed);
    property_set(id, "name", held);
  }
  await function_transform(f_name, lambda);
  let r = await function_auto(f_name);
  return r;
}
