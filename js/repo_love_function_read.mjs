import { repo_love_function_path } from "./repo_love_function_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
export async function repo_love_function_read(f_name) {
  arguments_assert(arguments, 1);
  ("the source of a function of this repo, read from this repo, given its name.");
  ("The general reader searches every repo standing beside this one for the name before it reads anything, and that search is what makes it the wrong reader for a gate. A gate runs inside a frozen copy of the tree that has no repos beside it, so the search reaches a folder that is not there and the whole gate dies without ever looking at the code it was asked about.");
  ("Here the name is enough because the repo is already known: this repo, worked out from where this very file is sitting, which is a fact a frozen copy carries with it. A name that is not one of this repo's functions is a file that is not there and the read says so, which is the right answer rather than a search that wanders off looking for it.");
  let f_path = repo_love_function_path(f_name);
  let source = await file_read(f_path);
  return source;
}
