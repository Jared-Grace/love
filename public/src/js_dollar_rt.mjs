import { js_parse_expression } from "./js_parse_expression.mjs";
import { js_return_empty } from "./js_return_empty.mjs";
import { marker } from "./marker.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { list_second } from "./list_second.mjs";
import { js_node_type_is } from "./js_node_type_is.mjs";
import { log } from "./log.mjs";
import { object_replace } from "./object_replace.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { js_code_return_empty } from "./js_code_return_empty.mjs";
export function js_dollar_rt({ stack1, stack2, stack3 }) {
  marker("1");
  const code = "true";
  let from = js_return_empty();
  let expression = js_parse_expression(code);
  object_property_set(from, "argument", expression);
  object_replace(stack1, from);
  return;
}
