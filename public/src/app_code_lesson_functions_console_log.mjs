import { js_operators } from "../../../love/public/src/js_operators.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { app_code_lesson_functions_console_log_generic } from "../../../love/public/src/app_code_lesson_functions_console_log_generic.mjs";
import { js_code_call_arg_fn } from "../../../love/public/src/js_code_call_arg_fn.mjs";
import { js_operator_first_code_call_only } from "../../../love/public/src/js_operator_first_code_call_only.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { list_transform_first_combine } from "../../../love/public/src/list_transform_first_combine.mjs";
import { list_between_space_nb } from "../../../love/public/src/list_between_space_nb.mjs";
import { js_code_parenthesis_list } from "../../../love/public/src/js_code_parenthesis_list.mjs";
import { js_code_comma } from "../../../love/public/src/js_code_comma.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { js_operator_first_code_call } from "../../../love/public/src/js_operator_first_code_call.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
import { app_code_container_light_blue_cycle_code } from "../../../love/public/src/app_code_container_light_blue_cycle_code.mjs";
import { app_code_container_light_blue_cycle_code_multiple } from "../../../love/public/src/app_code_container_light_blue_cycle_code_multiple.mjs";
export function app_code_lesson_functions_console_log() {
  var r = app_code_lesson_functions_console_log_generic(above, identity, []);
  let next = property_get(r, "next");
  let fn_name = property_get(r, "fn_name");
  let next_operator = property_get(r, "next_operator");
  let lesson = property_get(r, "lesson");
  return lesson;
  function above(root) {
    let o_f = js_operator_first_code_call(next_operator);
    let code_operator = property_get(o_f, "code");
    let verb = property_get(o_f, "verb");
    let call = property_get(o_f, "call");
    let c = app_code_container_light_blue(root);
    let fn_name_call = js_code_call_arg_fn(fn_name, next);
    let operators = js_operators();
    let span = html_div_cycle_code(c, [
      "Here is an examples of a function call: ",
      call,
    ]);
    let r2 = js_code_parenthesis_list();
    let parts = list_between_space_nb(r2);
    let comma = js_code_comma();
    const inside = [" inside its ", ...parts];
    html_div_cycle_code(c, [
      "However, ",
      verb,
      " and ",
      fn_name,
      " are different",
    ]);
    let first = js_operator_first_code_call_only(next_operator);
    let v4 = js_code_call_arg_fn(fn_name, next);
    app_code_container_light_blue_cycle_code_multiple(root, [
      ["", verb, " has two numbers separated by a ", comma, ...inside, " :"],
      ["", first],
    ]);
    app_code_container_light_blue_cycle_code_multiple(root, [
      [
        "But ",
        fn_name,
        ...list_transform_first_combine(" only has one number ", inside),
        " :",
      ],
      ["", v4],
    ]);
    app_code_container_light_blue_cycle_code(root, [
      "Whatever is inside the ",
      ...parts,
      " of ",
      fn_name,
      " will be written out for someone to read",
    ]);
  }
}
