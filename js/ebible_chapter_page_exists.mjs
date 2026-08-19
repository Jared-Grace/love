import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_download_path_combine } from "./ebible_version_download_path_combine.mjs";
import { file_exists } from "./file_exists.mjs";
export async function ebible_chapter_page_exists(bible_folder, chapter_code) {
  arguments_assert(arguments, 2);
  ("$plain bible_folder");
  ("$plain chapter_code");
  ("Whether one chapter's page was actually shipped in the download this machine has.");
  ("A bible's own book index can link a chapter whose page is not there. The Greek of the Septuagint links Proverbs thirty and ships twenty-nine and thirty-one, because that chapter's words sit inside chapter twenty-four in the Greek and there is no thirtieth page to write.");
  ("Asked of the disk every time rather than kept in a list of known gaps, so a page that arrives later is read the moment it is there and a list cannot go stale in silence.");
  let chapter_path = ebible_version_download_path_combine(
    bible_folder,
    chapter_code,
  );
  let shipped = await file_exists(chapter_path);
  return shipped;
}
