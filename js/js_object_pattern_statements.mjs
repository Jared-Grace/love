import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { js_node_identifier_replace } from "./js_node_identifier_replace.mjs";
import { property_set } from "./property_set.mjs";
import { list_get } from "./list_get.mjs";
import { js_expression_string } from "./js_expression_string.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function js_object_pattern_statements(name_held, names, node_right) {
  arguments_assert(arguments, 3);
  ("$plain name_held");
  ("the word the record itself is written under on the first of the lines this makes. Nothing else in the function may already be using it.");
  ("$plain names");
  ("the words the record is taken apart into, in the order they were written, which is the order the lines come out in.");
  ("The run of lines that says, one line at a time, what a record taken apart in a single line says all at once: write the record down under a word of its own, then write each of its entries into the word it was going to land in anyway.");
  ("THE ORDER IS THE WHOLE OF WHY IT IS THE SAME CODE. Taking a record apart reads its entries in the order they are written and writes each one where it says, and these lines do exactly that in exactly that order, from exactly that record. The right-hand side is not copied or read twice - the very same piece of code is moved onto the first line, so whatever it does, it still does once and still does it first.");
  ("THE RECORD NEEDS A WORD OF ITS OWN BECAUSE THE RIGHT-HAND SIDE MAY BE A CALL. Reading the entries straight off the call would run the call once per entry, which is a different program. Writing it down once and reading the entries off what was written keeps it at one.");
  let statement_held = js_parse_statement("let holder = 0;");
  let declarations = property_get(statement_held, "declarations");
  let declarator = list_first(declarations);
  let id = property_get(declarator, "id");
  js_node_identifier_replace(id, name_held);
  property_set(declarator, "init", node_right);
  let statements = [statement_held];
  function name_each(word) {
    let statement = js_parse_statement(
      'landing = property_get(holder, "field");',
    );
    let expression = property_get(statement, "expression");
    let left = property_get(expression, "left");
    js_node_identifier_replace(left, word);
    let right = property_get(expression, "right");
    let args = property_get(right, "arguments");
    let holder = list_first(args);
    js_node_identifier_replace(holder, name_held);
    let field = list_get(args, 1);
    let text = js_expression_string(word);
    object_replace(field, text);
    list_add(statements, statement);
  }
  each(names, name_each);
  return statements;
}
