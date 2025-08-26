import { js_declare_single_init } from "./js_declare_single_init.mjs";
import { log } from "./log.mjs";
import { marker_next_get } from "./marker_next_get.mjs";
import { js_dollar_choices } from "./js_dollar_choices.mjs";
import { function_transform_marker_specified } from "./function_transform_marker_specified.mjs";
import { marker } from "./marker.mjs";
export async function js_dollar_new(code) {
  marker("1");
  async function lambda(a) {
    let { next } = marker_next_get(a);
    let array_expression = js_declare_single_init(next);
    let { elements } = array_expression;
    log(array_expression);
  }
  let code2 = await function_transform_marker_specified(
    js_dollar_choices.name,
    "choices",
    lambda,
  );
  return code2;
}
