import { data_path } from "../../../love/public/src/data_path.mjs";
import { folder_vscode } from "../../../love/public/src/folder_vscode.mjs";
import { folder_public_combine } from "../../../love/public/src/folder_public_combine.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { file_copy_overwrite } from "../../../love/public/src/file_copy_overwrite.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function love_initialize() {
  marker("1");
  let d_path = data_path();
  let f = folder_vscode();
  let joined2 = path_join(segments);
  let joined = path_join([d_path, f]);
  let file_path_old = folder_public_combine(joined);
  await file_copy_overwrite(file_path_old, file_path_new);
}
