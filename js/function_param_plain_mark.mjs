import { arguments_assert } from "./arguments_assert.mjs";
import { function_params_get } from "./function_params_get.mjs";
import { function_params_plain } from "./function_params_plain.mjs";
import { function_transform } from "./function_transform.mjs";
import { js_code_string_statement } from "./js_code_string_statement.mjs";
import { js_flo_body_add_first } from "./js_flo_body_add_first.mjs";
import { js_parse_statement } from "./js_parse_statement.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_assert_json } from "./list_includes_assert_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { permission_plain_marker } from "./permission_plain_marker.mjs";
import { text_combine } from "./text_combine.mjs";
export async function function_param_plain_mark(f_name, param) {
  arguments_assert(arguments, 2);
  ("Writes into one function's body the declaration that one of its parameters carries ordinary data, so a word inside that parameter's name stops standing in for what the parameter holds.");
  ("The parameter has to be one the function declares, and that is checked here rather than where the marker is read: a marker naming nothing matches nothing, so the reader would see a mistake as silence, and the moment of writing is the only moment somebody is looking.");
  ("Marking a second time changes nothing, because the marker is already there and a function that says the same thing twice says no more than once.");
  let params = await function_params_get(f_name);
  let names = list_map_property(params, "name");
  list_includes_assert_json(names, param, {
    hint: "the parameter to declare plain has to be one this function declares",
    f_name,
    names,
  });
  let already = await function_params_plain(f_name);
  let marked = list_includes(already, param);
  if (marked) {
    let unchanged = {
      name: f_name,
      param,
      marked: false,
    };
    return unchanged;
  }
  let plain_prefix = permission_plain_marker();
  let text = text_combine(plain_prefix, param);
  let code = js_code_string_statement(text);
  function lambda$ast(ast) {
    let statement = js_parse_statement(code);
    js_flo_body_add_first(ast, statement);
  }
  await function_transform(f_name, lambda$ast);
  let done = {
    name: f_name,
    param,
    marked: true,
  };
  return done;
}
