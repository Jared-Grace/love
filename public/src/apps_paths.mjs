import { html_extension } from "../../../love/public/src/html_extension.mjs";
import { list_filter_ends_with } from "../../../love/public/src/list_filter_ends_with.mjs";
import { folder_public } from "../../../love/public/src/folder_public.mjs";
import { folder_read_files } from "../../../love/public/src/folder_read_files.mjs";
import { repos_paths_map_unordered_combine_squash } from "./repos_paths_map_unordered_combine_squash.mjs";
export async function apps_paths() {
  let fop = folder_public();
  let result = await repos_paths_map_unordered_combine_squash(
    fop,
    folder_read_files,
  );
  let sufix = html_extension();
  let aps = list_filter_ends_with(result, sufix);
  return aps;
}
