import { ebible_version_download_path } from "./ebible_version_download_path.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export async function ebible_version_downloaded_page_stems(bible_folder) {
  "$plain bible_folder";
  "What a downloaded translation holds, named the way eBible names it - GEN for the book of Genesis, GEN01 for its first chapter - with the file ending taken off.";
  "One listing of one folder answers everything anybody asks about how much of a bible was downloaded. Both counters next door read this rather than listing the folder again, so asking a translation two questions costs one look at a disk holding fifteen hundred of them.";
  "The pages are all that is kept. A translation also brings its fonts, its keys, its signature and a picture of a certificate, and none of those is scripture.";
  let download_path = ebible_version_download_path(bible_folder);
  let file_names = await folder_read(download_path);
  function page_is(file_name) {
    let ends = text_ends_with(file_name, ".htm");
    return ends;
  }
  let pages = list_filter(file_names, page_is);
  let stems = list_map(pages, path_name);
  return stems;
}
