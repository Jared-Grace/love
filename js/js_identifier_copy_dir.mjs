import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_identifier_rename } from "./js_identifier_rename.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
("Copy a fn to a new ./<name_new>.mjs in a flat dir: duplicate name_old's source with the");
("identifier renamed old->new (so the copy exports the new name), leaving the original in");
("place. The hermetic, sandbox-testable core of function_copy — mirrors its duplicate-then-");
("rename-inside-the-copy, minus the ambient path/registry work.");
export async function js_identifier_copy_dir(dir, name_old, name_new) {
  let old_file = text_combine_multiple([name_old, ".mjs"]);
  let src = await file_read(path_join([dir, old_file]));
  let ast = js_parse(src);
  js_identifier_rename(ast, name_old, name_new);
  let new_src = js_unparse(ast);
  let new_file = text_combine_multiple([name_new, ".mjs"]);
  await file_overwrite(path_join([dir, new_file]), new_src);
}
