import { json_extension } from "./json_extension.mjs";
import { local_function_folder } from "./local_function_folder.mjs";
import { g_sermon_write } from "./g_sermon_write.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
export async function g_verify_chapters_available() {
  "Which chapters of the sermon already have a written file, read off the folder itself rather than from a list somebody keeps by hand.";
  let folder = local_function_folder(g_sermon_write);
  let files = null;
  try {
    files = await folder_read_files(folder);
  } catch (missing) {
    let r = {
      chapters: [],
    };
    return r;
  }
  function lambda(name) {
    let ext_j = json_extension();
    let r2 = name.endsWith(ext_j);
    return r2;
  }
  function lambda2(name) {
    let r3 = name.slice(0, -5);
    return r3;
  }
  let chapters = files.filter(lambda).map(lambda2).sort();
  let r4 = {
    chapters,
  };
  return r4;
}
