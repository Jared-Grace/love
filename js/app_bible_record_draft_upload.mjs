import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_auth_user_or_null } from "./firebase_auth_user_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_bible_record_clip_path } from "./app_bible_record_clip_path.mjs";
import { app_bible_record_draft_path_of } from "./app_bible_record_draft_path_of.mjs";
import { firebase_upload_blob_browser_quiet } from "./firebase_upload_blob_browser_quiet.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function app_bible_record_draft_upload(
  chapter_code,
  verse_numbers,
  taken,
) {
  "$plain chapter_code";
  "Backs up a take not sent yet to storage, beside where it would go once sent (human 2026-11-25: syncing, so every video reaches storage), and answers whether it went up. Only when the owner is already signed in, since a take finishing must never stop to ask anyone to sign in; and a failed backup answers false rather than stopping the take being kept, because the phone still holds it and the Back up button tries again.";
  arguments_assert(arguments, 3);
  let user = await firebase_auth_user_or_null();
  if (null_is(user)) {
    return false;
  }
  let sent_path = app_bible_record_clip_path(
    chapter_code,
    verse_numbers,
    taken,
  );
  let path = app_bible_record_draft_path_of(sent_path);
  async function upload() {
    await firebase_upload_blob_browser_quiet(path, taken);
    return true;
  }
  let done = await catch_null_async(upload);
  let up = null_not_is(done);
  return up;
}
