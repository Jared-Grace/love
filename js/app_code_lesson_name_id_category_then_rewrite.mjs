import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_first_remaining } from "./list_first_remaining.mjs";
import { list_each_size } from "./list_each_size.mjs";
import { js_list_calls_named_nodes } from "./js_list_calls_named_nodes.mjs";
import { app_code_lesson_name_id_category_then_maker_or_null } from "./app_code_lesson_name_id_category_then_maker_or_null.mjs";
import { app_code_lesson_name_id_category_then_painter_or_null } from "./app_code_lesson_name_id_category_then_painter_or_null.mjs";
import { app_code_lesson_name_id_category_then_opens_category_is } from "./app_code_lesson_name_id_category_then_opens_category_is.mjs";
import { app_code_lesson_name_id_category_then_paint_name } from "./app_code_lesson_name_id_category_then_paint_name.mjs";
export function app_code_lesson_name_id_category_then_rewrite(ast) {
  arguments_assert(arguments, 1);
  ("Puts one lesson file onto the shared unit: the three-deep nest that opened its title with the category word becomes a single painter, holding only the lines that were ever its own.");
  ("It changes the file it is handed and says what it did, rather than saying whether it could - a file it has no claim on is left exactly as it was, and the reason is handed back so a run over many files can be read afterwards.");
  ("The name being called is swapped only where the plain unit was called. Where a lesson went through the operators wrapper instead, that wrapper is the one that moved, so the line here already says the right thing.");
  let maker = app_code_lesson_name_id_category_then_maker_or_null(ast);
  if (maker === null) {
    let missing = {
      done: false,
      reason: "no title maker",
    };
    return missing;
  }
  let painter = app_code_lesson_name_id_category_then_painter_or_null(maker);
  let painter_body = property_get(painter, "body");
  let statements = property_get(painter_body, "body");
  let unpacked = list_first_remaining(statements);
  let opening = property_get(unpacked, "first");
  let remaining = property_get(unpacked, "remaining");
  let opens = app_code_lesson_name_id_category_then_opens_category_is(opening);
  if (!opens) {
    let other = {
      done: false,
      reason: "the title does not open with the category",
    };
    return other;
  }
  let params = property_get(painter, "params");
  property_set(maker, "params", params);
  property_set(painter_body, "body", remaining);
  property_set(maker, "body", painter_body);
  let calls = js_list_calls_named_nodes(ast, "app_code_lesson_name_id_generic");
  function callee_swap(call) {
    let callee = property_get(call, "callee");
    property_set(callee, "name", "app_code_lesson_name_id_category_then");
  }
  let swapped = list_each_size(calls, callee_swap);
  let renamed = app_code_lesson_name_id_category_then_paint_name(ast, maker);
  let done = {
    done: true,
    swapped,
    renamed,
  };
  return done;
}
