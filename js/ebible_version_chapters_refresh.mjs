import { invoke_cache_file_refresh } from "./invoke_cache_file_refresh.mjs";
import { ebible_version_chapters } from "./ebible_version_chapters.mjs";
export async function ebible_version_chapters_refresh(bible_folder) {
  "$plain bible_folder";
  "Forgets what one bible's chapters were remembered as and reads them out of the source again.";
  "THE REMEMBERED ANSWER OUTLIVES THE READING THAT MADE IT, AND NOTHING TELLS ANYBODY. Which shelf a bible comes from decides how its chapters are read, and a reading can be corrected long after an answer from the old one was written down. Every caller afterwards is handed the old answer, in the old shape, and it looks exactly like a fresh one - so the correction appears to have done nothing, and the road that reads the answer fails somewhere far from the reading that is actually wrong. That happened: a shelf handed verses over as plain words where the rest of the repo hands them over carrying their own numbers, and after the reading was put right the publishing road went on failing on the sentence it had already remembered.";
  "One bible is named rather than all of them, because working every bible's chapters out again is hours of reading and a correction touches one shelf at a time.";
  let refreshed = await invoke_cache_file_refresh(ebible_version_chapters, [
    bible_folder,
  ]);
  return refreshed;
}
