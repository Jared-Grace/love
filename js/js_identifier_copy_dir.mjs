import { js_file_dir_ast } from "./js_file_dir_ast.mjs";
import { js_file_dir_ast_write } from "./js_file_dir_ast_write.mjs";
import { js_name_taken_dir_check } from "./js_name_taken_dir_check.mjs";
import { fn_name } from "./fn_name.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
("Copy a fn to a new ./<name_new>.mjs in a flat dir: duplicate name_old's source with the");
("identifier renamed old->new (so the copy exports the new name), leaving the original in");
("place. The hermetic, sandbox-testable core of ",
  fn_name("function_copy"),
  " — mirrors its duplicate-then-");
("rename-inside-the-copy, minus the ambient path/registry work.");
export async function js_identifier_copy_dir(dir, name_old, name_new) {
  await js_name_taken_dir_check(dir, name_new);
  let ast = await js_file_dir_ast(dir, name_old);
  js_identifier_rename(ast, name_old, name_new);
  await js_file_dir_ast_write(dir, name_new, ast);
}
