import { folder_current_logical } from "./folder_current_logical.mjs";
import { folder_vscode } from "./folder_vscode.mjs";
import { repos_folder } from "./repos_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
import { path_join } from "./path_join.mjs";
export async function repos_names() {
  "The name of every repository sitting beside this one, with the editor's own folder left out.";
  "The folder is spelled absolute from the folder this process was started in as the person spelled it, so that when this repo is reached through a link into another tree the names answer about the copy the person works in rather than the original the link points through to.";
  let here = folder_current_logical();
  let previous = repos_folder();
  let path_folder = path_join([here, previous]);
  let rns = await folder_read(path_folder);
  let v = folder_vscode();
  let ignores = [v];
  function lambda(r) {
    let n = list_includes_not(ignores, r);
    return n;
  }
  let f = list_filter(rns, lambda);
  return f;
}
