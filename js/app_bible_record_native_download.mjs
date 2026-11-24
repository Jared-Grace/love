import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_record_native_download_multiple } from "./app_bible_record_native_download_multiple.mjs";
export async function app_bible_record_native_download(blob, name) {
  "$plain name";
  "Hands one take to the Android app this page is running inside, which saves a copy cut down to the speaking to the phone's Downloads, named name (human 2026-11-24: download a passage's video, so that just reading is in it). One take is a chapter of one.";
  arguments_assert(arguments, 2);
  await app_bible_record_native_download_multiple([blob], name);
}
