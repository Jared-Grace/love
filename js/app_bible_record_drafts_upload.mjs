import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_take_kept_or_null } from "./app_bible_record_take_kept_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_bible_record_draft_upload } from "./app_bible_record_draft_upload.mjs";
export async function app_bible_record_drafts_upload(chapter_code, passages) {
  "$plain chapter_code";
  "Backs up every take of these passages that is kept on the phone and not sent yet (human 2026-11-25: a Sync button), and answers {backed_up, failed} counts - so takes made before signing in, or while offline, still reach storage. passages is a list of verse-number lists.";
  arguments_assert(arguments, 2);
  let backed_up = 0;
  let failed = 0;
  for (let verse_numbers of passages) {
    let kept = await app_bible_record_take_kept_or_null(
      chapter_code,
      verse_numbers,
    );
    if (null_is(kept)) {
      continue;
    }
    let up = await app_bible_record_draft_upload(
      chapter_code,
      verse_numbers,
      kept,
    );
    if (up) {
      backed_up += 1;
    } else {
      failed += 1;
    }
  }
  let r = {
    backed_up,
    failed,
  };
  return r;
}
