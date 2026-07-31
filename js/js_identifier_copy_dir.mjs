import { fn_name } from "./fn_name.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_read } from "./file_read.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
("Copy a fn to a new ./<name_new>.mjs in a flat dir: duplicate name_old's source with the");
("identifier renamed old->new (so the copy exports the new name), leaving the original in");
("place. The hermetic, sandbox-testable core of ",
  fn_name("function_copy"),
  " — mirrors its duplicate-then-");
("rename-inside-the-copy, minus the ambient path/registry work.");
export async function js_identifier_copy_dir(dir, name_old, name_new) {
  let old_path = js_file_dir_path(dir, name_old);
  let src = await file_read(old_path);
  let ast = js_parse(src);
  js_identifier_rename(ast, name_old, name_new);
  let new_src = js_unparse(ast);
  let new_path = js_file_dir_path(dir, name_new);
  await file_overwrite(new_path, new_src);
}
