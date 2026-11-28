import { app_bible_record_screens } from "./app_bible_record_screens.mjs";
import { app_shared_bible_passages_download_key } from "./app_shared_bible_passages_download_key.mjs";
import { property_set } from "./property_set.mjs";
import { app_bible_record_passages_download } from "./app_bible_record_passages_download.mjs";
import { app_bible_record_local_is } from "./app_bible_record_local_is.mjs";
import { not } from "./not.mjs";
import { app_shared_bible_settings_sign_in_key } from "./app_shared_bible_settings_sign_in_key.mjs";
import { firebase_auth_ensure } from "./firebase_auth_ensure.mjs";
import { app_bible_sermons_start } from "./app_bible_sermons_start.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
import { app_bible_record_home } from "./app_bible_record_home.mjs";
import { app_bible_record_offline_auto } from "./app_bible_record_offline_auto.mjs";
export async function app_bible_record(context) {
  "Record yourself reading a passage of the Bible aloud, with its words laid over the video. The passages are the ones the gospel game preaches from, chosen the same way the sermons app chooses them.";
  "Only chapters with passages are offered, because a chapter nobody has cut into passages has nothing to record yet.";
  let screens = app_bible_record_screens();
  ("no chapter list is named, so every chapter of the Bible is offered - a recording needs a passage, not a sermon (asked for by the human 2026-11-22)");
  let key_passages = app_shared_bible_passages_download_key();
  property_set(context, key_passages, app_bible_record_passages_download);
  ("SETTINGS OFFERS SIGN IN, since Send and Back up show only once signed in (human 2026-11-27) - except in the phone apps that keep every take on the phone, where there is nothing to sign in for.");
  let b = app_bible_record_local_is();
  if (not(b)) {
    let key_sign_in = app_shared_bible_settings_sign_in_key();
    property_set(context, key_sign_in, firebase_auth_ensure);
  }
  ("BUILT OUT OF THE SERMONS APP ON PURPOSE: it opens where that app opens and records the passages that app preaches, so it asks that app for both rather than keeping a second copy that would drift from what the sermons show.");
  await app_bible_sermons_start();
  await app_shared_bible_initialize(
    context,
    app_bible_record,
    screens,
    app_bible_record_home,
  );
  ("THE PHONE APPS KEEP THE BIBLES ON THE PHONE (human 2026-11-28), started only once the first screen is drawn so it never slows the page appearing, and not waited on, so reading and recording go on while it runs.");
  if (b) {
    await app_bible_record_offline_auto();
  }
}
