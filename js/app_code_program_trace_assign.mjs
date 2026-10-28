import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { error } from "./error.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
import { text_slice } from "./text_slice.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { app_code_program_trace_long_way } from "./app_code_program_trace_long_way.mjs";
import { app_code_program_trace_value } from "./app_code_program_trace_value.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export function app_code_program_trace_assign(
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
    if (
      not_equal(right_type, "Identifier") &&
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
    let long = app_code_program_trace_long_way(
      expression,
      name3,
      symbol,
      right_text,
      actions,
      code,
    );
    let expression_long = property_get(long, "expression");
    let code_long = property_get(long, "code");
    app_code_program_trace_assign(expression_long, actions, code_long, values);
    return;
  }
  let value9 = app_code_program_trace_value(right, actions, code, values);
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
