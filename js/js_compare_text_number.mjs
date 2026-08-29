import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_list_types_nodes } from "./js_list_types_nodes.mjs";
import { js_nodes_of_types } from "./js_nodes_of_types.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { not } from "./not.mjs";
import { js_call_name_text_cut_is } from "./js_call_name_text_cut_is.mjs";
import { property_set } from "./property_set.mjs";
import { js_call_name_number_made_is } from "./js_call_name_number_made_is.mjs";
import { each } from "./each.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { js_name_number_is } from "./js_name_number_is.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_size } from "./list_size.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { and } from "./and.mjs";
import { or } from "./or.mjs";
import { list_join } from "./list_join.mjs";
import { list_add } from "./list_add.mjs";
export function js_compare_text_number(ast) {
  arguments_assert(arguments, 1);
  ("$plain ast");
  ("Every exact comparison in this code that holds a piece of text cut out of something written down against a number, each written out as the line that makes it.");
  ("A NUMBER AND THE SAME NUMBER WRITTEN OUT ARE NEVER EQUAL HERE, AND NOTHING SAYS SO. The comparison used is exact, so a chapter read out of a file as writing and a chapter handed in as a number simply never match - and what the caller gets back is not an error but an empty answer, which is indistinguishable from a passage that really holds nothing. That happened, cost a morning, and is the whole reason for this reading.");
  ("Where a name is bound to a call, the call decides what it holds, and only two kinds of call are trusted to decide: one that cuts text out of text, and one that makes a number out of something else. Everything else leaves the name undecided, which is right - a reading that guessed would be accusing whoever wrote a name it did not recognise.");
  ("A name nothing here binds is read for what it says of itself, and a name that says number counts as one. That is how a parameter counts, and a parameter is where the two sides usually meet: the text is cut a line above the comparison and the number arrived from somewhere else entirely.");
  ("What a call was bound to beats what its name says, in both directions. A name that says number and is filled from a cut of text is holding text whatever it is called, and this reading exists precisely because such a name was called number.");
  ("Both sides have to be plain names. A comparison written with the cutting done inside it is missed, and that is accepted: the pass that canonicalizes this repo pulls such a call out into a name of its own, so the shape barely occurs, and looking through it would mean deciding what an arbitrary expression holds.");
  let types = ["VariableDeclarator", "CallExpression"];
  let gathered = js_list_types_nodes(ast, types);
  let declarators = js_nodes_of_types(gathered, ["VariableDeclarator"]);
  let calls = js_nodes_of_types(gathered, ["CallExpression"]);
  let kinds = {};
  function declarator_each(node) {
    let id = property_get(node, "id");
    let named = js_node_type_is(id, "Identifier");
    if (not(named)) {
      return;
    }
    let init = property_get(node, "init");
    let called = js_node_type_is(init, "CallExpression");
    if (not(called)) {
      return;
    }
    let callee = property_get(init, "callee");
    let callee_named = js_node_type_is(callee, "Identifier");
    if (not(callee_named)) {
      return;
    }
    let bound = property_get(id, "name");
    let callee_name = property_get(callee, "name");
    let cut = js_call_name_text_cut_is(callee_name);
    if (cut) {
      property_set(kinds, bound, "text");
      return;
    }
    let made = js_call_name_number_made_is(callee_name);
    if (made) {
      property_set(kinds, bound, "number");
    }
  }
  each(declarators, declarator_each);
  function kind_of(name) {
    let kept = property_or_null(kinds, name);
    let unknown = null_is(kept);
    if (not(unknown)) {
      return kept;
    }
    let numbered = js_name_number_is(name);
    if (numbered) {
      let r = "number";
      return r;
    }
    let r2 = "";
    return r2;
  }
  let compares = [equal.name, fn_name("not_equal")];
  let found = [];
  function call_each(node) {
    let callee = property_get(node, "callee");
    let callee_named = js_node_type_is(callee, "Identifier");
    if (not(callee_named)) {
      return;
    }
    let callee_name = property_get(callee, "name");
    let comparing = list_includes(compares, callee_name);
    if (not(comparing)) {
      return;
    }
    let args = property_get(node, "arguments");
    let size = list_size(args);
    let two = equal(size, 2);
    if (not(two)) {
      return;
    }
    let left = list_first(args);
    let right = list_second(args);
    let left_named = js_node_type_is(left, "Identifier");
    let right_named = js_node_type_is(right, "Identifier");
    if (not(left_named)) {
      return;
    }
    if (not(right_named)) {
      return;
    }
    let left_name = property_get(left, "name");
    let right_name = property_get(right, "name");
    let left_kind = kind_of(left_name);
    let right_kind = kind_of(right_name);
    let text_left = equal(left_kind, "text");
    let number_right = equal(right_kind, "number");
    let number_left = equal(left_kind, "number");
    let text_right = equal(right_kind, "text");
    let one_way = and(text_left, number_right);
    let other_way = and(number_left, text_right);
    let mixed = or(one_way, other_way);
    if (not(mixed)) {
      return;
    }
    let pieces = [callee_name, "(", left_name, ", ", right_name, ")"];
    let said = list_join(pieces, "");
    list_add(found, said);
  }
  each(calls, call_each);
  return found;
}
