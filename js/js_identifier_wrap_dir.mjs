import { js_file_dir_ast } from "./js_file_dir_ast.mjs";
import { js_file_dir_ast_write } from "./js_file_dir_ast_write.mjs";
import { js_name_taken_dir_check } from "./js_name_taken_dir_check.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_call_args_await_maybe_declaration_return_add } from "./js_call_args_await_maybe_declaration_return_add.mjs";
import { js_function_declaration_asyncify } from "./js_function_declaration_asyncify.mjs";
import { property_from } from "./property_from.mjs";
import { js_return_atomize } from "./js_return_atomize.mjs";
("Wrap a fn in a new ./<name_new>.mjs that delegates to name_old: the new file imports the");
("original, forwards the same params to it, and returns the result, leaving the original in");
("place. The hermetic core of the wrap tool — bakes the ./<name_old>.mjs import into the");
("scaffold and copies params directly, so it needs NO global dictionary and runs the same in");
("a sandbox as in the repo.");
export async function js_identifier_wrap_dir(dir, name_old, name_new) {
  await js_name_taken_dir_check(dir, name_new);
  let ast_old = await js_file_dir_ast(dir, name_old);
  let declaration_call = js_flo(ast_old);
  let arg_names = js_function_declaration_params_names(declaration_call);
  let scaffold = text_combine_multiple([
    "import { ",
    name_old,
    ' } from "./',
    name_old,
    '.mjs";\n',
    "export function ",
    name_new,
    "() {}",
  ]);
  let ast_new = js_parse(scaffold);
  js_call_args_await_maybe_declaration_return_add(
    name_old,
    arg_names,
    declaration_call,
    ast_new,
  );
  let declaration_new = js_flo(ast_new);
  js_function_declaration_asyncify(declaration_new, declaration_call);
  property_from(declaration_new, "params", declaration_call);
  await js_return_atomize(ast_new);
  await js_file_dir_ast_write(dir, name_new, ast_new);
}
