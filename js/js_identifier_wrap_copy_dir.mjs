import { arguments_assert } from "./arguments_assert.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { js_identifier_wrap_dir } from "./js_identifier_wrap_dir.mjs";
import { js_file_dir_ast } from "./js_file_dir_ast.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_parse_statement_module } from "./js_parse_statement_module.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_first } from "./list_add_first.mjs";
import { js_return_name } from "./js_return_name.mjs";
import { js_find_return_insert_statement } from "./js_find_return_insert_statement.mjs";
import { js_file_dir_ast_write } from "./js_file_dir_ast_write.mjs";
export async function js_identifier_wrap_copy_dir(dir, name_old) {
  arguments_assert(arguments, 2);
  ("$plain dir");
  ("Wraps a function in the twin that answers exactly as it does and also leaves the answer on the clipboard, writing both the copying call and the import it needs.");
  ("THE HERMETIC CORE OF THE COPYING WRAP, which is what lets the corpus show it. The command it proves reads and writes wherever the repo is, so no example can run one - each such command has a twin taking the folder as its first argument, and that twin is what an example executes inside a temporary directory.");
  ("THE IMPORT IS BAKED IN RATHER THAN LOOKED UP, exactly as the plain wrap next door bakes in the import of the function being wrapped. The pass that adds imports asks a dictionary of the whole repo, which is the one thing a sandbox does not have - and the answer here is known without asking, because a twin sits beside the copier in the same folder every time.");
  ("The call is written above the return and handed the local the return is about to give back, so the twin answers with the very thing it copied rather than with a second reading of it.");
  let name_new = function_name_combine(name_old, "copy");
  await js_identifier_wrap_dir(dir, name_old, name_new);
  let ast = await js_file_dir_ast(dir, name_new);
  let copier = fn_name("clipboard_copy_value");
  let import_code = text_combine_multiple([
    "import { ",
    copier,
    ' } from "./',
    copier,
    '.mjs";',
  ]);
  let statement_import = js_parse_statement_module(import_code);
  let body = property_get(ast, "body");
  list_add_first(body, statement_import);
  let name_returned = js_return_name(ast);
  let call_code = text_combine_multiple([
    "await ",
    copier,
    "(",
    name_returned,
    ");",
  ]);
  let statement_call = js_parse_statement_module(call_code);
  js_find_return_insert_statement(ast, statement_call);
  await js_file_dir_ast_write(dir, name_new, ast);
}
