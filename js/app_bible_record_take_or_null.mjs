import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_take_kept_or_null } from "./app_bible_record_take_kept_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_bible_record_take_sent_or_null } from "./app_bible_record_take_sent_or_null.mjs";
export async function app_bible_record_take_or_null(
  chapter_code,
  verse_numbers,
) {
  "$plain chapter_code";
  "The newest take there is for one passage in the current project, or null: the one kept on the phone first, since it is newer than anything sent, then the one sent to storage.";
  arguments_assert(arguments, 2);
  let kept = await app_bible_record_take_kept_or_null(
    chapter_code,
    verse_numbers,
  );
  if (null_not_is(kept)) {
    return kept;
  }
  let sent = await app_bible_record_take_sent_or_null(
    chapter_code,
    verse_numbers,
  );
  return sent;
}
