import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { dev_trace_report_folder } from "./dev_trace_report_folder.mjs";
import { text_combine } from "./text_combine.mjs";
export function dev_trace_report_prefix() {
  "the opening every uploaded trace's address starts with - spelled once so the page that writes and the reader that reads cannot disagree";
  let opening = messages_firebase_path();
  let folder = dev_trace_report_folder();
  let prefix = text_combine(opening, folder);
  return prefix;
}
