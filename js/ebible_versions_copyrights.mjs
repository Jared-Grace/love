import { ebible_version_copyright_read } from "./ebible_version_copyright_read.mjs";
import { ebible_versions_downloaded } from "./ebible_versions_downloaded.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function ebible_versions_copyrights() {
  "What every downloaded translation's licence page says about itself - terms, language and name, one record each.";
  "This is the whole reading the rest of the licence work stands on. It opens fifteen hundred pages so its answer is worth keeping rather than asking twice.";
  let bible_folders = await ebible_versions_downloaded();
  let read = await list_map_async(bible_folders, ebible_version_copyright_read);
  let found = list_filter_null_not_is(read);
  return found;
}
