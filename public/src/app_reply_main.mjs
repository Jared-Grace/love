import { app_reply_generic } from "../../../love/public/src/app_reply_generic.mjs";
import { ebible_verse_download } from "../../../love/public/src/ebible_verse_download.mjs";
export async function app_reply_main() {
  let verse_get = ebible_verse_download;
  await app_reply_generic(verse_get);
}
