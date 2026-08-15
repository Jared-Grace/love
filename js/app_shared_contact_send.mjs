import { app_shared_contact_user_id } from "./app_shared_contact_user_id.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { firebase_upload_object_browser } from "./firebase_upload_object_browser.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
import { html_url } from "./html_url.mjs";
import { uuid } from "./uuid.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_shared_contact_send(message) {
  "send one message to the developer's inbox: <messages path>/<device id>/<message id>.json = { message, url, when }. The one send used by every app's Contact screen and by the message app.";
  "`url` is the page as it stood when they wrote, which names the app, the stage it was served from and - in the hash - the screen they were on. It replaced a hand-typed app name at every call site: a typed name is one more thing to keep true, and the one in the message app had already stopped being able to follow a rename. The address is measured rather than typed, so it cannot drift, and it says more.";
  let user_id = await app_shared_contact_user_id();
  let message_id = await uuid();
  let v = messages_firebase_path();
  let file_name = text_combine_multiple([v, user_id, "/", message_id]);
  let file_path = file_name_json(file_name);
  await firebase_upload_object_browser(file_path, {
    message,
    url: html_url(),
    when: date_now_iso(),
  });
}
