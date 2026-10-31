import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_sermons_chapters } from "./app_bible_sermons_chapters.mjs";
import { list_includes } from "./list_includes.mjs";
import { error_json } from "./error_json.mjs";
import { g_sermon_generate_download } from "./g_sermon_generate_download.mjs";
export async function app_bible_sermons_download(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("the code is a chapter's name, like ROM01, chosen from the Bible's own book and chapter numbering. It names a stored file and nothing that runs.");
  ("One chapter's sermon, but only when that chapter is approved. The same place holds drafts for every other chapter, and a link can name any chapter at all, so the pickers offering approved chapters alone does not keep a draft off the screen - opened with no link, the reader starts at John, and John's draft was shown.");
  ("A chapter that is not approved is refused rather than answered with nothing, because the reader above already treats a refused chapter as one nobody has written yet: the verse stays, and no sermon is laid over it.");
  let approved = await app_bible_sermons_chapters();
  let included = list_includes(approved, chapter_code);
  if (not(included)) {
    error_json({
      chapter_code,
      approved,
    });
  }
  let value = await g_sermon_generate_download(chapter_code);
  return value;
}
