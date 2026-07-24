import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_flo } from "./js_flo.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { js_call_args_await_maybe_declaration_return_add } from "./js_call_args_await_maybe_declaration_return_add.mjs";
import { js_function_declaration_asyncify } from "./js_function_declaration_asyncify.mjs";
import { property_from } from "./property_from.mjs";
import { js_return_atomize } from "./js_return_atomize.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
("Wrap a fn in a new ./<name_new>.mjs that delegates to name_old: the new file imports the");
("original, forwards the same params to it, and returns the result, leaving the original in");
("place. The hermetic core of function_wrap — bakes the ./<name_old>.mjs import into the");
("scaffold and copies params directly, so it needs NO global dictionary and runs the same in");
("a sandbox as in the repo.");
export async function js_identifier_wrap_dir(dir, name_old, name_new) {
  let old_file = text_combine_multiple([name_old, ".mjs"]);
  let src = await file_read(path_join([dir, old_file]));
  let ast_old = js_parse(src);
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
  let new_src = js_unparse(ast_new);
  let new_file = text_combine_multiple([name_new, ".mjs"]);
  await file_overwrite(path_join([dir, new_file]), new_src);
}
