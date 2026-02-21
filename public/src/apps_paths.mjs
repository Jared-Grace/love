import { html_extension } from "../../../love/public/src/html_extension.mjs";
import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
export async function apps_paths() {
  let fop = folder_public();
  let files = await folder_read_files(fop);
  let sufix = html_extension();
  let aps = list_filter_ends_with(files, sufix);
  return aps;
}
