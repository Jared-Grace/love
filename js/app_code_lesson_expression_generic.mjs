import { app_code_batch_code_eval } from "./app_code_batch_code_eval.mjs";
import { app_code_lesson_code_generic } from "./app_code_lesson_code_generic.mjs";
import { app_code_lesson_name_id_words } from "./app_code_lesson_name_id_words.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { null_is } from "./null_is.mjs";
export function app_code_lesson_expression_generic(params) {
  "a bare-expression lesson (no console.log wrapper): the question is the expression, the answer is its value; caller passes next_arg (produces expression code strings), an above intro, example_count, and either a name_id or (name_id_rights + category) for the title";
  let next_arg = property_get(params, "next_arg");
  let above = property_get(params, "above");
  let example_count = property_get(params, "example_count");
  let name_id = property_get_or_null(params, "name_id");
  let name_id_missing = null_is(name_id);
  if (name_id_missing) {
    let category = property_get_or(params, "category", "expressions");
    let name_id_rights = property_get(params, "name_id_rights");
    name_id = app_code_lesson_name_id_words(category, name_id_rights);
  }
  function batch_get() {
    let arg = next_arg();
    let r = [arg];
    return r;
  }
  let b = app_code_batch_code_eval(batch_get);
  let forwards_answer_count_override = property_get_or(
    params,
    "forwards_answer_count_override",
    null,
  );
  let quiz_backwards_answer_count_override = property_get_or(
    params,
    "quiz_backwards_answer_count_override",
    null,
  );
  let decoys = property_get_or(params, "decoys", null);
  let lesson = app_code_lesson_code_generic({
    value: "value",
    batch_get: b,
    name_id,
    above,
    example_count,
    quiz_backwards_answer_count_override,
    forwards_answer_count_override,
    decoys,
  });
  return lesson;
}
