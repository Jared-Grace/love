import { ebible_languages_without_original_bible_folders_each } from "./ebible_languages_without_original_bible_folders_each.mjs";
import { ebible_version_readaloud_download } from "./ebible_version_readaloud_download.mjs";
export async function ebible_languages_readaloud_download() {
  "Fetches the read-aloud edition of every translation this app ships, one after another.";
  "Read aloud is not an extra the reader may go without - it is how a chapter is cut into verses, because a line read aloud is a verse and the numbers come from the marks on the page. A translation missing it has no verses at all, so this has to have run before chapters can be built or sent anywhere.";
  "Whatever is already on disk is kept rather than fetched again, because each fetch is cached against the address it came from.";
  await ebible_languages_without_original_bible_folders_each(lambda);
  async function lambda(bible_folder) {
    await ebible_version_readaloud_download(bible_folder);
  }
}
