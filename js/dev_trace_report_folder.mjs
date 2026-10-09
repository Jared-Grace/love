import { text_frozen } from "./text_frozen.mjs";
export function dev_trace_report_folder() {
  "the folder traces from a latest page land in, beside the error reports and inside the one opening in storage a browser is allowed to write to";
  let folder = text_frozen("trace/");
  return folder;
}
