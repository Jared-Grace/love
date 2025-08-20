import { functions_paths } from "./functions_paths.mjs";
import { each_async } from "./each_async.mjs";
import { marker } from "./marker.mjs";
export async function data_files_update() {
  let f_paths = functions_paths();
  marker("1");
  function lambda(f_path) {}
  await each_async(f_paths, lambda);
}
