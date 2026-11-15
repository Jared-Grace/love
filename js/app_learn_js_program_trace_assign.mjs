import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { app_learn_js_program_trace_value } from "./app_learn_js_program_trace_value.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
import { not_equal } from "./not_equal.mjs";
import { error } from "./error.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
import { text_slice } from "./text_slice.mjs";
import { not } from "./not.mjs";
import { app_learn_js_program_trace_long_way } from "./app_learn_js_program_trace_long_way.mjs";
export function app_learn_js_program_trace_assign(
  expression,
  actions,
  code,
  values,
) {
  arguments_assert(arguments, 4);
  ("2026-10-15, at the human's asking: a name given a new value, as a = 5; does, solves what is right of the = if needed and assigns it, as a let line does without declaring, so the lessons that change what a name holds can be run a line at a time.");
  let operator2 = property_get(expression, "operator");
  let target = property_get(expression, "left");
  let target_type = property_get(target, "type");
  ("2026-11-14, at the human's asking, for Setting an item: a[1] = x; is an assign of one item, the index written out as a number, as every lesson setting an item writes it. value is the whole array after, so the name still holds its value as for any assign; item and index say which item changed, so the note changes only that item. The array is copied rather than changed, so a value handed out earlier still says what it said then. Not picked: an index needing solving, which no lesson writes yet");
  let item_set =
    equal(target_type, "MemberExpression") &&
    property_get(target, "computed") &&
    equal(property_get(property_get(target, "object"), "type"), "Identifier") &&
    list_includes(
      ["Literal", "Identifier"],
      property_get(property_get(target, "property"), "type"),
    ) &&
    equal(operator2, "=");
  if (item_set) {
    let object = property_get(target, "object");
    let array_name = property_get(object, "name");
    property_exists_assert(values, array_name);
    let object2 = property_get(target, "property");
    let index = property_get(object2, "value");
    ("2026-11-15, for Setting at a name and Changing every item: the index may be a name, a[i] = x;, and is then the value the name holds. It is read without a step of its own, as the value of i already shows on its // line. Not picked: a step solving i first, which writes a second value into the line and is not needed to see which item changed");
    let left2 = property_get(object2, "type");
    if (equal(left2, "Identifier")) {
      let index_name = property_get(object2, "name");
      property_exists_assert(values, index_name);
      index = property_get(values, index_name);
    }
    let right2 = property_get(expression, "right");
    let item = app_learn_js_program_trace_value(right2, actions, code, values);
    let before = property_get(values, array_name);
    let after = before.slice();
    after[index] = item;
    list_add(actions, {
      kind: "assign",
      name: array_name,
      value: after,
      item,
      index,
      from: property_get(right2, "start"),
      to: property_get(right2, "end"),
      long: null,
    });
    property_set(values, array_name, after);
    return;
  }
  if (not_equal(target_type, "Identifier")) {
    error({
      message: "only a name can be assigned here",
      code,
      operator: operator2,
      target_type,
    });
  }
  let name3 = property_get(target, "name");
  property_exists_assert(values, name3);
  let right = property_get(expression, "right");
  if (not_equal(operator2, "=")) {
    ("2026-10-15, at the human's asking: a += b; and the other operators that assign are the shorter way to write a = a + b;, as the lessons on them teach, so they are run as the long line is: the name's value is asked for first, as the computer reads it first, then the right side, then the operator, whose value is written into the line with an = in place of the += and what follows, so a += 8 reads a = 9. The name's value is asked for without being written into the line, since 1 += 8 would read as giving a value to 1. Not picked: writing the line out the long way first, a change that solves nothing");
    let left = text_size(operator2);
    let to4 = subtract(left, 1);
    ("the right side is a name or a value written out, as in every lesson on these operators; an operator there would need ( ) around it in the long way, a *= b + 1 being a = a * (b + 1), so it is refused rather than written out wrong");
    let right_type = property_get(right, "type");
    let symbol = text_slice(operator2, 0, to4);
    ("2026-10-28: a * / or % right of a += or -= needs no ( ), since it is solved before the + or - anyway: total += n * n is total = total + n * n. Let in for A running total of squares, stepped through a line at a time.");
    let tighter =
      equal(right_type, "BinaryExpression") &&
      list_includes(["+", "-"], symbol) &&
      list_includes(["*", "/", "%"], property_get(right, "operator"));
    ("2026-11-13: an item read out of an array, a[i], needs no ( ) either, since it is read before any operator is solved: total += a[i] is total = total + a[i]. Let in for Add them up, stepped through a line at a time.");
    if (
      not_equal(right_type, "Identifier") &&
      not_equal(right_type, "MemberExpression") &&
      not_equal(right_type, "Literal") &&
      not(tighter)
    ) {
      error({
        message:
          "only a name or a value written out can be right of an operator that assigns here",
        code,
        right_type,
      });
    }
    let right_from = property_get(right, "start");
    let right_to = property_get(right, "end");
    let right_text = text_slice(code, right_from, right_to);
    ("2026-10-21, at the human's asking: the line is written the long way first, and the long line is then run as one written that way is - the name's value asked for in its place in the line, then the right side, then the operator. What is said above of the value asked for without a place in the line, and of not writing the line out first, was so until then");
    let long = app_learn_js_program_trace_long_way(
      expression,
      name3,
      symbol,
      right_text,
      actions,
      code,
    );
    let expression_long = property_get(long, "expression");
    let code_long = property_get(long, "code");
    app_learn_js_program_trace_assign(
      expression_long,
      actions,
      code_long,
      values,
    );
    return;
  }
  let value9 = app_learn_js_program_trace_value(right, actions, code, values);
  list_add(actions, {
    kind: "assign",
    name: name3,
    value: value9,
    from: property_get(right, "start"),
    to: property_get(right, "end"),
    long: null,
  });
  property_set(values, name3, value9);
}
