import { path_resolve } from "../../../love/public/src/path_resolve.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { folder_vscode } from "../../../love/public/src/folder_vscode.mjs";
import { folder_public_combine } from "../../../love/public/src/folder_public_combine.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { file_name_json_folder } from "./file_name_json_folder.mjs";
export async function love_initialize() {
  marker("1");
  let vc = folder_vscode();
  let f_path = file_name_json_folder(vc, "tasks");
  let d_path = data_path();
  let joined = path_join([d_path, f_path]);
  let file_path_old = folder_public_combine(joined);
  let previous = folder_previous();
  let file_path_new = path_join([previous, f_path]);
  let v = await path_resolve(file_path_old);
  return v;
  await file_copy_overwrite(file_path_old, file_path_new);
}
