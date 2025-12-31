import { repos_folder } from "../../../love/public/src/repos_folder.mjs";
import { folder_read } from "../../../love/public/src/folder_read.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { list_includes_not } from "../../../love/public/src/list_includes_not.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
export async function repos_names() {
  marker("1");
  let path_folder = repos_folder();
  let rns = await folder_read(path_folder);
  let ignores = [".vscode"];
  let f = list_filter(rns, (r) => list_includes_not(ignores, r));
  return f;
}
