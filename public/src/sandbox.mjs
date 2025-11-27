import { each } from "../../../love/public/src/each.mjs";
import { folder_files_names_normalize } from "../../../love/public/src/folder_files_names_normalize.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let path = "C:\\Users\\chris\\Downloads\\characters";
  let files = await folder_files_names_normalize(path, "woman", "woman_");
  each(list, function lambda(item) {});
  await folder_files_names_normalize(path, "_man_", "man_");
}
