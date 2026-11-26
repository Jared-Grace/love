import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { app_bible_record_drafts_upload_all } from "./app_bible_record_drafts_upload_all.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { greater_than } from "./greater_than.mjs";
import { html_text_set } from "./html_text_set.mjs";
export async function app_bible_record_inline_path_backup(
  sign_in,
  busy,
  backup_button,
) {
  arguments_assert(arguments, 3);
  await firebase_auth_ensure(sign_in);
  let counts = null;
  async function work() {
    counts = await app_bible_record_drafts_upload_all();
  }
  await busy(backup_button, "⏳ Backing up the videos...", work);
  let backed_up = property_get(counts, "backed_up");
  let failed = property_get(counts, "failed");
  let v = String(backed_up);
  let said = text_combine_multiple(["✅ ", v, " backed up"]);
  if (greater_than(failed, 0)) {
    let v4 = String(failed);
    said = text_combine_multiple([said, ", ", v4, " failed - try again"]);
  }
  html_text_set(backup_button, said);
}
