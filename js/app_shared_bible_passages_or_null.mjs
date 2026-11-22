import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_passages_download_key } from "./app_shared_bible_passages_download_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function app_shared_bible_passages_or_null(context, chapter_code) {
  "One chapter's passages as the app's own download hands them over, or null when the app has none or this chapter has none yet.";
  "A chapter nobody has written yet has no file, and asking storage for it is an error rather than an empty answer, so the error is turned into null here: the reader then keeps the verse it was showing, which is how an unwritten chapter has always read.";
  arguments_assert(arguments, 2);
  let key = app_shared_bible_passages_download_key();
  let download = property_get_or_null(context, key);
  if (null_is(download)) {
    return null;
  }
  async function download_chapter() {
    let d = await download(chapter_code);
    return d;
  }
  let downloaded = await catch_null_async(download_chapter);
  return downloaded;
}
