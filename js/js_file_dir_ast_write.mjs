import { arguments_assert } from "./arguments_assert.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function js_file_dir_ast_write(dir, name, ast) {
  arguments_assert(arguments, 3);
  ("Writes a tree out as the file a name has in a flat directory - one ./<name>.mjs per name, so saying the name is saying where it goes.");
  ("It writes whatever it is given, without asking whether the file already says that. The pairing that does ask is for changing a file in place, where writing the same bytes back is work done for nothing; this is for making a file that was not there a moment ago, where there is nothing to compare against.");
  let f_path = js_file_dir_path(dir, name);
  let src = js_unparse(ast);
  await file_overwrite(f_path, src);
}
