import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { error } from "./error.mjs";
import { property_exists_assert } from "./property_exists_assert.mjs";
import { text_size } from "./text_size.mjs";
import { subtract } from "./subtract.mjs";
import { text_slice } from "./text_slice.mjs";
import { app_code_program_trace_value } from "./app_code_program_trace_value.mjs";
import { app_code_program_trace_shorter } from "./app_code_program_trace_shorter.mjs";
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
    if (
      not_equal(right_type, "Identifier") &&
      not_equal(right_type, "Literal")
    ) {
      error({
        message:
          "only a name or a value written out can be right of an operator that assigns here",
        code,
        right_type,
      });
    }
    let symbol = text_slice(operator2, 0, to4);
    let right_from = property_get(right, "start");
    let right_to = property_get(right, "end");
    let right_text = text_slice(code, right_from, right_to);
    function right_get() {
      let right_value = app_code_program_trace_value(
        right,
        actions,
        code,
        values,
      );
      return right_value;
    }
    app_code_program_trace_shorter({
      expression,
      target,
      operator: operator2,
      symbol,
      right_text,
      right_get,
      lead: "= ",
      actions,
      values,
      code,
    });
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
