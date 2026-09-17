import { text_split_comma_map_async } from "./text_split_comma_map_async.mjs";
import { app_ceb_bible_gloss_chapter_upload_stored } from "./app_ceb_bible_gloss_chapter_upload_stored.mjs";
export async function app_ceb_bible_gloss_chapters_upload_stored(
  chapter_codes_comma,
) {
  "Publish several chapters of the Cebuano gloss store exactly as they already stand, generating nothing.";
  "It exists for the chapters a stored correction touched. Those were published before, so the command that finds unpublished chapters does not see them, and their readers keep the uncorrected copy until each is sent again.";
  "$plain chapter_codes_comma";
  "the codes are chapter names, like JHN01, joined by commas. They name text to publish and nothing that runs.";
  let outputs = await text_split_comma_map_async(
    chapter_codes_comma,
    app_ceb_bible_gloss_chapter_upload_stored,
  );
  return outputs;
}
