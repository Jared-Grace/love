import { repos_folder } from "./repos_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { marker } from "./marker.mjs";
export async function repos_names() {
  marker("1");
  let path_folder = repos_folder();
  let rns = await folder_read(path_folder);
  return rns;
}
