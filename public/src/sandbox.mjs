import { folder_files_names_underscore } from "../../../love/public/src/folder_files_names_underscore.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let list = await folder_files_names_underscore(path);
}
