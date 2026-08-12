import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { js_function_declaration_params_ast_get } from "./js_function_declaration_params_ast_get.mjs";
import { property_get } from "./property_get.mjs";
import { js_function_declaration_params_named_assert } from "./js_function_declaration_params_named_assert.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { js_identifier_param_delete_dir } from "./js_identifier_param_delete_dir.mjs";
import { each_async } from "./each_async.mjs";
export async function js_identifier_params_delete_dir(
  dir,
  f_name,
  param_names_comma,
) {
  "Delete several of a function's parameters across a flat folder of modules, named in one comma-joined word.";
  "The hermetic heart of the repo-wide verb that takes a list. The twin that stood here before took a single name, so the corpus ran a different command from the one it named - a list arrived as one long parameter name that matched nothing, and the refusal it reported was a refusal of the whole word rather than of any name in it.";
  "The names are split with the same reader the whole-repo command splits them with, so a spelling the command would accept cannot be a spelling this refuses.";
  let param_names = text_split_comma_dot(param_names_comma);
  let def_path = js_file_dir_path(dir, f_name);
  let parsed = await file_js_parse(def_path);
  let ast = property_get(parsed, "ast");
  let got = js_function_declaration_params_ast_get(ast);
  let declaration = property_get(got, "declaration");
  js_function_declaration_params_named_assert(declaration, f_name, param_names);
  async function delete_one(param_name) {
    await js_identifier_param_delete_dir(dir, f_name, param_name);
  }
  await each_async(param_names, delete_one);
}
