import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
export async function apps_paths() {
  let fop = folder_public();
  let aps = await folder_read_files(fop);
  let filtered = list_filter_ends_with(list, sufix);
  return aps;
}
