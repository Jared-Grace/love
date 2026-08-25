import { clipboard_copy_value } from "./clipboard_copy_value.mjs";
import { qa_commit_named_red_report } from "./qa_commit_named_red_report.mjs";
export async function qa_commit_named_red_report_copy() {
  let r = await qa_commit_named_red_report();
  await clipboard_copy_value(r);
  return r;
}
