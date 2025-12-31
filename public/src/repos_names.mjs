import { folder_vscode } from "../../../love/public/src/folder_vscode.mjs";
import { repos_folder } from "../../../love/public/src/repos_folder.mjs";
import { folder_read } from "../../../love/public/src/folder_read.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_includes_not } from "../../../love/public/src/list_includes_not.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export async function repos_names() {
  marker("1");
  let path_folder = repos_folder();
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
