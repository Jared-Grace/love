import { html_loading } from "./html_loading.mjs";
import { firebase_upload_text_browser_quiet } from "./firebase_upload_text_browser_quiet.mjs";
export async function firebase_upload_text_generic_browser(
  destination,
  content,
) {
  ("send one piece of text up to storage from a browser, with the loading overlay around the wait");
  ("The send itself is the quiet twin's, so the two cannot come to send a file two ways. What is left here is only the overlay - which is the whole of the difference between a send somebody asked for and one nobody did.");
  async function lambda() {
    await firebase_upload_text_browser_quiet(destination, content);
  }
  let r = await html_loading(lambda);
  return r;
}
