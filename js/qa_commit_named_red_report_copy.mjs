import { clipboard_copy_value } from "./clipboard_copy_value.mjs";
import { qa_commit_named_red_report } from "./qa_commit_named_red_report.mjs";
export async function qa_commit_named_red_report_copy() {
  "Say which gates are red at the newest judged commit and put that answer on the clipboard as well as printing it, so it can be pasted into a message rather than retyped.";
  let r = await qa_commit_named_red_report();
  await clipboard_copy_value(r);
  return r;
}
