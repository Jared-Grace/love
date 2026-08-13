import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_file_dir_path } from "./js_file_dir_path.mjs";
import { file_read } from "./file_read.mjs";
import { js_parse } from "./js_parse.mjs";
export async function js_file_dir_ast(dir, name) {
  arguments_assert(arguments, 2);
  ("The tree of the file a name has in a flat directory - one ./<name>.mjs per name, so the name is the whole address and finding it, reading it and parsing it are one step rather than three.");
  ("It parses and hands back the tree alone, where the wider ",
    fn_name("file_js_parse"),
    " hands back the tree, the text it came from and the path. That pairing is for writing the same file back and noticing nothing changed; here the file being read and the file being written are different files, so the text and the path of the one read are of no use to the caller and asking it to carry them is asking it to carry a promise this cannot keep.");
  let f_path = js_file_dir_path(dir, name);
  let src = await file_read(f_path);
  let ast = js_parse(src);
  return ast;
}
