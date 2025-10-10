import { function_open } from "../../../love/public/src/function_open.mjs";
import { function_new_declaration } from "../../../love/public/src/function_new_declaration.mjs";
import { js_parse_statement_module } from "../../../love/public/src/js_parse_statement_module.mjs";
import { js_code_declaration } from "../../../love/public/src/js_code_declaration.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { string_and_empty_not_is_assert } from "../../../love/public/src/string_and_empty_not_is_assert.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
export async function app_new_fn(name) {
  marker("1");
  string_and_empty_not_is_assert(name);
  let a_name = app_name_prefixed(name);
  marker("1");
  const code_declaration = js_code_declaration(a_name, "", false);
  let declaration = js_parse_statement_module(code_declaration);
  await function_new_declaration(declaration);
  await function_open(a_name);
}
