import { app_shared_contact_user_id } from "./app_shared_contact_user_id.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { firebase_upload_object_browser } from "./firebase_upload_object_browser.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
import { uuid } from "./uuid.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_shared_contact_send(from, message) {
  "send one message to the developer's inbox: <messages path>/<device id>/<message id>.json = { from, message, when }. `from` names the app the person is writing about so a reply knows the context. The one send used by every app's Contact screen and by the message app.";
  let user_id = await app_shared_contact_user_id();
  let message_id = await uuid();
  let file_name = text_combine_multiple([
    messages_firebase_path(),
    user_id,
    "/",
    message_id,
  ]);
  let file_path = file_name_json(file_name);
  await firebase_upload_object_browser(file_path, {
    from,
    message,
    when: date_now_iso(),
  });
}
