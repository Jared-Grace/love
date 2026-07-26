import { examples_folder } from "./examples_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
export async function examples_names() {
  "The file names the example corpus is made of, in whatever order the folder hands them over. Three readers wanted the same two steps - read the one folder, keep the code files - so the steps live here and the folder is named in one place.";
  let folder = examples_folder();
  let names = await folder_read(folder);
  function mjs_is(name) {
    let ew = text_ends_with(name, ".mjs");
    return ew;
  }
  let mjs = list_filter(names, mjs_is);
  return mjs;
}
