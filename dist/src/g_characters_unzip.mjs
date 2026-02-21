import { folder_files_names_normalize_unzip } from "../../../love/public/src/folder_files_names_normalize_unzip.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
export async function g_characters_unzip() {
  let path = "C:\\Users\\chris\\Downloads\\characters";
  function lambda(input) {
    let i = text_includes(input, "woman");
    return i;
  }
  await folder_files_names_normalize_unzip(path, lambda, "woman_");
  function lambda2(input) {
    const item = "man";
    let v = text_includes(input, "_" + item);
    return v;
  }
  await folder_files_names_normalize_unzip(path, lambda2, "man_");
}
