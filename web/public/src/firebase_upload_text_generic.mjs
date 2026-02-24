import { firebase_upload_text_generic_browser } from "../../../love/public/src/firebase_upload_text_generic_browser.mjs";
import { firebase_upload_generic } from "../../../love/public/src/firebase_upload_generic.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
export async function firebase_upload_text_generic(
  content,
  destination,
  content_type,
) {
  log({
    msg: "uploading to firebase",
    destination,
  });
  if (browser_is()) {
    await firebase_upload_text_generic_browser(destination, content);
    return;
  }
  let buffer = Buffer.from(content);
  const settings = {
    contentType: content_type,
    gzip: true,
  };
  await firebase_upload_generic(destination, settings, buffer);
}
