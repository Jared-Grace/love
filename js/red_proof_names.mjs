import { red_proof_folder } from "./red_proof_folder.mjs";
import { folder_read } from "./folder_read.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function red_proof_names() {
  "The file names of every wrong-version corpus on disk, in one order however the folder hands them over.";
  "Sorted, because the gate below prints one line per corpus and a report whose order moves about between runs cannot be read as a diff.";
  let folder = red_proof_folder();
  let names = await folder_read(folder);
  function mjs_is(name) {
    let ew = text_ends_with(name, ".mjs");
    return ew;
  }
  let mjs = list_filter(names, mjs_is);
  list_sort_text(mjs);
  return mjs;
}
