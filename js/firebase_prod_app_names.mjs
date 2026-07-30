import { folder_public } from "./folder_public.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { html_extension } from "./html_extension.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
export async function firebase_prod_app_names() {
  "the pages that actually go live. hosting serves one folder out of one repo, so a list gathered across every repo on the machine names pages that were never uploaded and can only ever look missing";
  let fop = folder_public();
  let combined = await user_repo_path_combine(fop);
  let files = await folder_read_files(combined);
  let sufix = html_extension();
  let htmls = list_filter_ends_with(files, sufix);
  let names = list_map(htmls, path_name);
  return names;
}
