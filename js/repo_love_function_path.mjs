import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { folder_js } from "./folder_js.mjs";
import { text_combine } from "./text_combine.mjs";
import { path_join } from "./path_join.mjs";
export function repo_love_function_path(f_name) {
  arguments_assert(arguments, 1);
  ("where the file holding a function of this repo sits, given the function's name.");
  ("The name is enough because the repo is already known: this repo, worked out from where this very file is sitting, which is a fact a frozen copy of the tree carries with it. That is the whole reason the two readers above this exist at all - the general ones search every repo standing beside this one first, and inside a frozen copy there are none, so the search is what dies rather than the code being asked about.");
  ("One file per function and the file named after the function is the arrangement this whole repo rests on, so this is where that arrangement is spelled out rather than assumed twice.");
  let folder = folder_repo_love();
  let js = folder_js();
  let file_name = text_combine(f_name, ".mjs");
  let f_path = path_join([folder, js, file_name]);
  return f_path;
}
