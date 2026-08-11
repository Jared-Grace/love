import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { js_list_function_nodes } from "./js_list_function_nodes.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_lesson_name_id_category_then_painter_or_null } from "./app_code_lesson_name_id_category_then_painter_or_null.mjs";
export function app_code_lesson_name_id_category_then_maker_or_null(ast) {
  arguments_assert(arguments, 1);
  ("The one function in this file that a lesson name and id was handed to be titled by, or null when the file holds no such thing.");
  ("It is known by the two names it receives and by holding nothing but a painter and the line handing that painter back. Every one of the fifty written by hand matched that, so anything else is a shape nobody has seen and is left alone rather than guessed at.");
  let nodes = js_list_function_nodes(ast);
  function maker_is(node) {
    let params = property_get(node, "params");
    let params_size = list_size(params);
    if (not_equal(params_size, 2)) {
      return false;
    }
    let second = property_get(params, "1");
    let second_type = property_get(second, "type");
    if (not_equal(second_type, "Identifier")) {
      return false;
    }
    let second_name = property_get(second, "name");
    if (not_equal(second_name, "left_upper")) {
      return false;
    }
    let body = property_get(node, "body");
    let statements = property_get(body, "body");
    let statements_size = list_size(statements);
    if (not_equal(statements_size, 2)) {
      return false;
    }
    let last = property_get(statements, "1");
    let last_type = property_get(last, "type");
    if (not_equal(last_type, "ReturnStatement")) {
      return false;
    }
    let painter = app_code_lesson_name_id_category_then_painter_or_null(node);
    let found = not_equal(painter, null);
    return found;
  }
  let makers = list_filter(nodes, maker_is);
  let maker = list_first_try(makers);
  return maker;
}
