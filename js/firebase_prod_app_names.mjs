import { firebase_prod_file_names } from "./firebase_prod_file_names.mjs";
import { html_extension } from "./html_extension.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
export async function firebase_prod_app_names() {
  "the pages that actually go live. hosting serves one folder out of one repo, so a list gathered across every repo on the machine names pages that were never uploaded and can only ever look missing";
  let files = await firebase_prod_file_names();
  let sufix = html_extension();
  let htmls = list_filter_ends_with(files, sufix);
  let names = list_map(htmls, path_name);
  return names;
}
