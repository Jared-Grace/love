import { firebase_upload_blob_browser_quiet } from "./firebase_upload_blob_browser_quiet.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_loading } from "./html_loading.mjs";
export async function firebase_upload_blob_browser(destination, blob) {
  arguments_assert(arguments, 2);
  ("send one file's bytes up to storage from a browser, with the loading overlay around the wait");
  ("The kind of file is the one the browser already knows the file to be, so a photo is stored as the picture it is rather than as text.");
  async function lambda() {
    await firebase_upload_blob_browser_quiet(destination, blob);
  }
  let r = await html_loading(lambda);
  return r;
}
