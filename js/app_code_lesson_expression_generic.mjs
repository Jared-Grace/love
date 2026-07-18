import { app_code_batch_code_eval } from "./app_code_batch_code_eval.mjs";
import { app_code_lesson_code_generic } from "./app_code_lesson_code_generic.mjs";
import { property_get } from "./property_get.mjs";
export function app_code_lesson_expression_generic(params) {
  "a bare-expression lesson (no console.log wrapper): the question is the expression, the answer is its value; caller passes next_arg (produces expression code strings), a name_id (title), an above intro, and example_count";
  let next_arg = property_get(params, "next_arg");
  let name_id = property_get(params, "name_id");
  let above = property_get(params, "above");
  let example_count = property_get(params, "example_count");
  function batch_get() {
    let arg = next_arg();
    let r = [arg];
    return r;
  }
  let b = app_code_batch_code_eval(batch_get);
  let lesson = app_code_lesson_code_generic({
    value: "value",
    batch_get: b,
    name_id,
    above,
    example_count,
    quiz_backwards_answer_count_override: null,
    forwards_answer_count_override: null,
  });
  return lesson;
}
