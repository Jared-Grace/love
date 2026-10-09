import { firebase_bucket } from "./firebase_bucket.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { app_shared_error_report_prefix } from "./app_shared_error_report_prefix.mjs";
import { app_shared_open_prefix } from "./app_shared_open_prefix.mjs";
import { phone_photos_prefix } from "./phone_photos_prefix.mjs";
import { property_get } from "./property_get.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function app_message_files() {
  "Every file in storage holding something a person wrote, as the signed-in handles they were listed through rather than as what is inside them.";
  "what people have written, and only that: the error reports, the daily opens, the traces a latest page uploads and the photos sent from a phone land under the same opening because it is the only place a browser may write at all, so the folders they sit in are skipped here rather than read as somebody's message";
  "Listing them is asked apart from reading them because two callers want the same set and a different thing out of it - one wants what was said, the other wants each file kept on disk under the address it arrived at, which is a thing the contents alone cannot say. Spelled twice, the two would come to disagree about which files are somebody's message, and a reader quietly taking an error report for a message is a disagreement nothing would go red about.";
  let bucket = await firebase_bucket();
  let [all] = await bucket.getFiles({
    prefix: messages_firebase_path(),
  });
  let error_prefix = app_shared_error_report_prefix();
  let open_prefix = app_shared_open_prefix();
  let photos_prefix = phone_photos_prefix();
  function written_by_a_person(item) {
    let name = property_get(item, "name");
    let outside_errors = text_starts_with_not(name, error_prefix);
    let outside_opens = text_starts_with_not(name, open_prefix);
    let outside_photos = text_starts_with_not(name, photos_prefix);
    let outside_traces = text_starts_with_not(name, dev_trace_report_prefix());
    let outside = outside_errors && outside_opens && outside_photos && outside_traces;
    return outside;
  }
  let files = list_filter(all, written_by_a_person);
  return files;
}
