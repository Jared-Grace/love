import { arguments_assert } from "./arguments_assert.mjs";
import { functions_path } from "./functions_path.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function function_import_line_add(f_name, line) {
  "$plain f_name";
  "$plain line";
  "Puts one already-written import line back at the top of a function's file, and says whether it had to.";
  "IT IS TEXT ON PURPOSE, BECAUSE THE TREE IS WHAT DROPPED THE LINE. Every import this repo writes is a relative one worked back from a name the repo answers to, so an import of something the repo has never heard of cannot be worked back at all, and a step that rebuilds a file from its tree leaves that line out. Asking the tree to put it back is asking the thing that cannot hold it to hold it; a line of text at the top of a file is a thing text can say.";
  "The line is handed over whole rather than built here from a name and a source, so every spelling survives - a default under its own name, a set of names in braces, and a bare bring-in kept for what it does rather than for what it gives.";
  "Asking twice changes nothing the second time, so it is safe to run over a file that is already right.";
  arguments_assert(arguments, 2);
  let folder = functions_path();
  let f_file = text_combine(f_name, ".mjs");
  let file_path = path_join([folder, f_file]);
  let before = await file_read(file_path);
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
