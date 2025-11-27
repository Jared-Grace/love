import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let p = "C:\\Users\\chris\\Downloads\\characters";
  let files = await folder_read_files(p);
  return files;
}
