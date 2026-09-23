import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_upload_blob_browser_quiet_custom } from "./firebase_upload_blob_browser_quiet_custom.mjs";
export async function firebase_upload_blob_browser_quiet(destination, blob) {
  arguments_assert(arguments, 2);
  ("send one file's bytes up to storage from a browser, with nothing drawn over the page while it goes - for a send that happens behind a person's back, where covering the screen would stop them doing the next thing");
  ("The kind of file is the one the browser already knows the file to be, so a photo is stored as the picture it is rather than as text.");
  await firebase_upload_blob_browser_quiet_custom(destination, blob, {});
}
