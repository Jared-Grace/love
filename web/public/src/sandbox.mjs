import { string_is } from "../../../love/public/src/string_is.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function sandbox() {
  marker("1");
  let p = "C:\\Users\\chris\\Downloads\\characters";
  let files = await folder_read_files(p);
  async function lambda(item) {
    let si2 = string_is(value);
  }
  await each_async(list, lambda);
  return files;
}
