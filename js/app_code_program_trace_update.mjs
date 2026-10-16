import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { not_equal } from "./not_equal.mjs";
import { error } from "./error.mjs";
import { text_slice } from "./text_slice.mjs";
import { app_code_program_trace_shorter } from "./app_code_program_trace_shorter.mjs";
export function app_code_program_trace_update(
  expression,
  actions,
  code,
  values,
) {
  arguments_assert(arguments, 4);
  ("2026-10-15, at the human's asking: a++; is the shorter way to write a = a + 1;, and a--; of a = a - 1;, as the lessons on them teach, so they are run as a += 1; is: the name's value is asked for, then what the operator comes to, written into the line in place of the ++ as = and the value, so a++ reads a = 10. Not picked: ++a, which no lesson writes, and which gives a different value when it is used rather than run as a line, so it is refused rather than run as if it were the same");
  let prefix = property_get(expression, "prefix");
  let target = property_get(expression, "argument");
  let target_type2 = property_get(target, "type");
  if (prefix || not_equal(target_type2, "Identifier")) {
    error({
      message: "only a name followed by ++ or -- is run here",
      code,
      target_type: target_type2,
    });
  }
  let operator = property_get(expression, "operator");
  let symbol = text_slice(operator, 0, 1);
  function one_get() {
    let r = 1;
    return r;
  }
  app_code_program_trace_shorter({
    expression,
    target,
    operator,
    symbol,
    right_text: "1",
    right_get: one_get,
    lead: " = ",
    actions,
    values,
    code,
  });
}
