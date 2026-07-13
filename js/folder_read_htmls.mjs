import { file_exists } from "./file_exists.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { html_extension } from "./html_extension.mjs";
export async function folder_read_htmls(folder) {
  let exists = await file_exists(folder);
  if (exists) {
    let files = await folder_read_files(folder);
    let htmls = list_filter_ends_with(files, html_extension());
    return htmls;
  }
  return [];
}
