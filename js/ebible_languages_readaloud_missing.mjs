import { ebible_readaloud_bible_folders } from "./ebible_readaloud_bible_folders.mjs";
import { ebible_version_readaloud_download_url } from "./ebible_version_readaloud_download_url.mjs";
import { url_available_is } from "./url_available_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function ebible_languages_readaloud_missing() {
  "Every translation this app ships that eBible publishes no read-aloud edition for.";
  "Read aloud is how a chapter is cut into verses, so a translation without one can offer a reader nothing. This says which of the shipped ones those are, before anything is fetched.";
  "The address is built rather than looked up - every read-aloud edition lives at the same address with the translation's own name in it, so a page saying where it is would be a second thing to fetch that could only repeat what the address already says.";
  "Asked only of the bibles read-aloud is how the verses are cut for. One carried from the other catalogue brings its verses with it and has no edition here to be missing, so naming it would be reporting a fault in a bible that is being served correctly.";
  let bible_folders = ebible_readaloud_bible_folders();
  async function missing_or_null(bible_folder) {
    let url = ebible_version_readaloud_download_url(bible_folder);
    let available = await url_available_is(url);
    if (available) {
      return null;
    }
    return bible_folder;
  }
  let asked = await list_map_async(bible_folders, missing_or_null);
  let missing = list_filter_null_not_is(asked);
  return missing;
}
