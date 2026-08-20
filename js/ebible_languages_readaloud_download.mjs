import { each_async } from "./each_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { ebible_readaloud_published_is } from "./ebible_readaloud_published_is.mjs";
import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { ebible_version_readaloud_download } from "./ebible_version_readaloud_download.mjs";
export async function ebible_languages_readaloud_download() {
  "Fetches the read-aloud edition of every translation this app ships that eBible publishes one of, one after another.";
  "Read aloud is not an extra the reader may go without - it is how a chapter is cut into verses, because a line read aloud is a verse and the numbers come from the marks on the page. A translation missing it has no verses at all, so this has to have run before chapters can be built or sent anywhere.";
  "A bible carried from the other catalogue is not asked for. eBible has no page for it, so the address this would fetch is one nobody publishes, and the fetch comes back as a page not found. The walk is one bible after another and a fetch that fails stops it where it stands, so a single such bible left in the list means every bible after it in the order is never fetched at all - which is how the whole thing had been failing on its first bible while the ones behind it looked merely unfetched.";
  "Whatever is already on disk is kept rather than fetched again, because each fetch is cached against the address it came from.";
  let offered = ebible_languages_without_original_bible_folders();
  let bible_folders = list_filter(offered, ebible_readaloud_published_is);
  await each_async(bible_folders, lambda);
  async function lambda(bible_folder) {
    await ebible_version_readaloud_download(bible_folder);
  }
}
