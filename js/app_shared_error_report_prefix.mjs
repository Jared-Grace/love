import { app_shared_error_report_folder } from "./app_shared_error_report_folder.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_shared_error_report_prefix() {
  ("the opening every error report's address starts with, and nothing else does");
  ("Two readers stand on opposite sides of it. The one after what people have written skips every name that starts with this; the one after what has broken keeps only those. Spelled once, the two cannot come to disagree about which files are which - and a message quietly read as an error, or an error as a message, is a disagreement nothing would go red about.");
  let opening = messages_firebase_path();
  let folder = app_shared_error_report_folder();
  let prefix = text_combine(opening, folder);
  return prefix;
}
