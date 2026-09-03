import { arguments_assert } from "./arguments_assert.mjs";
import { functions_path } from "./functions_path.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_import_node_add(f_name, module_name) {
  "$plain f_name";
  "$plain module_name";
  "Puts a default import of a module that is not a file in this repo back at the top of a function's file, and says whether it had to.";
  "IT EXISTS BECAUSE THE AUTO PASS TAKES SUCH AN IMPORT OUT AND REPORTS SUCCESS. Every import the pass writes is a relative one it worked out from a name this repo answers to, and an import of something the repo has never heard of is not a name it can work out, so the line is dropped rather than kept. The file it leaves behind parses, canonicalizes, commits, and throws the moment it is run. Nothing goes red, because nothing here runs a server to find out.";
  "So this is the repair, and it is a command rather than a hand edit for the ordinary reason: a hand edit cannot be run again after the next promote takes the line out again, and it is the next promote that will.";
  "It is written over the file's text rather than through the tree on purpose. The tree is what dropped the line, so asking the tree to put it back is asking the thing that cannot hold it to hold it. A line of text at the top of a file is a thing text can say.";
  "Asking twice changes nothing the second time, so it is safe to run over a file that is already right.";
  arguments_assert(arguments, 2);
  let folder = functions_path();
  let f_file = text_combine(f_name, ".mjs");
  let file_path = path_join([folder, f_file]);
  let before = await file_read(file_path);
  let line = text_combine_multiple([
    "import ",
    module_name,
    ' from "',
    module_name,
    '";',
  ]);
  let already = text_includes(before, line);
  if (already) {
    let unchanged = {
      file_path,
      line,
      added: false,
    };
    return unchanged;
  }
  let after = list_join_newline([line, before]);
  await file_overwrite(file_path, after);
  let r = {
    file_path,
    line,
    added: true,
  };
  return r;
}
