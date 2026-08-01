import { list_size_2 } from "./list_size_2.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_get_property } from "./list_get_property.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { equal_not } from "./equal_not.mjs";
import { each } from "./each.mjs";
import { and } from "./and.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_set } from "./property_set.mjs";
import { object_replace } from "./object_replace.mjs";
import { add } from "./add.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
export function js_assert_json_get_lambda_collapse(ast) {
  "points every hand-written lazy payload in this file at the helper that already builds one, and answers how many it moved";
  "There are two of these checks side by side: one takes the record itself and one";
  "takes a wrapper that will build the record if it is ever needed. The first is the";
  "second with the wrapper already supplied, and it has been there the whole time.";
  "Twelve functions wrote the wrapper out anyway - a named inner function";
  "whose whole body is one record of its own arguments and a line handing that record";
  "back - because each was written by copying the one beside it. That is the same way";
  "the same words ended up in eighteen lessons.";
  "The wrapper is not removed, it is unwrapped. The record's own line already stands";
  "inside the inner function, so the inner function is replaced by that very line and";
  "no new code is written at all: the record keeps its name, its words and its order.";
  "Only a body that is exactly one record of plain names and one line handing it back";
  "is touched. Where the wrapper computes something - a list difference asked only once";
  "the check has already failed - the waiting is the whole point of the wrapper, so it";
  "is left alone. That is why this cannot be a search for the word and a rewrite.";
  "Three things would break it and each is refused rather than risked: a record built";
  "below the line that reads it, since an inner function may stand under its own call";
  "and a plain name may not; a name the enclosing function already binds, which would";
  "be two declarations of one word; and anything handed over that is not a plain name.";
  let moved = 0;
  let bound = js_binding_names(ast);
  function identifier_name(node) {
    let plain = js_node_type_is(node, "Identifier");
    if (not(plain)) {
      let none = null;
      return none;
    }
    let name = property_get(node, "name");
    return name;
  }
  function variable_name(variable) {
    let declarators = property_get(variable, "declarations");
    let one_is = list_size_1(declarators);
    if (not(one_is)) {
      let none = null;
      return none;
    }
    let id = list_get_property(declarators, 0, "id");
    let name = identifier_name(id);
    return name;
  }
  function record_of_plain_names_is(variable) {
    "true only when the record is written out right here and holds nothing but plain names, so reading it early can neither wait on anything nor go wrong";
    let declarators = property_get(variable, "declarations");
    let one_is = list_size_1(declarators);
    if (not(one_is)) {
      return false;
    }
    let init = list_get_property(declarators, 0, "init");
    let record_is = js_node_type_is(init, "ObjectExpression");
    if (not(record_is)) {
      return false;
    }
    let entries = property_get(init, "properties");
    let plain = true;
    function entry_each(entry) {
      let entry_is = js_node_type_is(entry, "Property");
      if (not(entry_is)) {
        plain = false;
        return;
      }
      let value = property_get(entry, "value");
      let named = identifier_name(value);
      let named_is = equal_not(named, null);
      if (not(named_is)) {
        plain = false;
      }
    }
    each(entries, entry_each);
    return plain;
  }
  function payload_line(declaration) {
    "the one line of the wrapper's body holding the record, when the body is nothing else";
    let f_body = property_get(declaration, "body");
    let inner = property_get(f_body, "body");
    let two_is = list_size_2(inner);
    if (not(two_is)) {
      let none = null;
      return none;
    }
    let first = list_get(inner, 0);
    let second = list_get(inner, 1);
    let variable_is = js_node_type_is(first, "VariableDeclaration");
    let return_is = js_node_type_is(second, "ReturnStatement");
    let shaped = and(variable_is, return_is);
    if (not(shaped)) {
      let none = null;
      return none;
    }
    let record_name = variable_name(first);
    let name_is = equal_not(record_name, null);
    if (not(name_is)) {
      let none = null;
      return none;
    }
    let handed = property_get(second, "argument");
    let handed_name = identifier_name(handed);
    let same = equal(handed_name, record_name);
    if (not(same)) {
      let none = null;
      return none;
    }
    let plain_is = record_of_plain_names_is(first);
    if (not(plain_is)) {
      let none = null;
      return none;
    }
    return first;
  }
  function name_free_is(record_name) {
    "the record's name may leave the wrapper only if the wrapper is the one place binding it";
    function named(one) {
      let same = equal(one, record_name);
      return same;
    }
    let left4 = list_filter_size(bound, named);
    let once_is = equal(left4, 1);
    return once_is;
  }
  function call_below(body, declaration, wrapper_name) {
    "the lazy check standing under this wrapper and handing the wrapper over, when there is one";
    let declared_at = list_index_of(body, declaration);
    let found = null;
    function candidate_each(candidate) {
      let taken = equal_not(found, null);
      if (taken) {
        return;
      }
      let expression_is = js_node_type_is(candidate, "ExpressionStatement");
      if (not(expression_is)) {
        return;
      }
      let candidate_at = list_index_of(body, candidate);
      let below = greater_than(candidate_at, declared_at);
      if (not(below)) {
        return;
      }
      let call = property_get(candidate, "expression");
      let call_is = js_node_type_is(call, "CallExpression");
      if (not(call_is)) {
        return;
      }
      let callee = property_get(call, "callee");
      let callee_name = identifier_name(callee);
      let right = fn_name("assert_json_get");
      let asked = equal(callee_name, right);
      if (not(asked)) {
        return;
      }
      let args = property_get(call, "arguments");
      let two_is = list_size_2(args);
      if (not(two_is)) {
        return;
      }
      let second = list_get(args, 1);
      let second_name = identifier_name(second);
      let handed = equal(second_name, wrapper_name);
      if (not(handed)) {
        return;
      }
      found = call;
    }
    each(body, candidate_each);
    return found;
  }
  function call_point_at_record(call, record_name) {
    let callee = property_get(call, "callee");
    let value2 = fn_name("assert_json");
    property_set(callee, "name", value2);
    let args = property_get(call, "arguments");
    let second = list_get(args, 1);
    property_set(second, "name", record_name);
  }
  function block_each(v) {
    let node = property_get(v, "node");
    let body = property_get(node, "body");
    function statement_each(statement) {
      let declared_is = js_node_type_is(statement, "FunctionDeclaration");
      if (not(declared_is)) {
        return;
      }
      let held = payload_line(statement);
      let held_is = equal_not(held, null);
      if (not(held_is)) {
        return;
      }
      let id = property_get(statement, "id");
      let wrapper_name = identifier_name(id);
      let call = call_below(body, statement, wrapper_name);
      let called_is = equal_not(call, null);
      if (not(called_is)) {
        return;
      }
      let record_name = variable_name(held);
      let free_is = name_free_is(record_name);
      if (not(free_is)) {
        return;
      }
      call_point_at_record(call, record_name);
      object_replace(statement, held);
      moved = add(moved, 1);
    }
    each(body, statement_each);
  }
  js_visit_types(ast, ["BlockStatement"], block_each);
  return moved;
}
