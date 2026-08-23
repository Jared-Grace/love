import { text_frozen } from "./text_frozen.mjs";
export function app_shared_error_report_folder() {
  ("the folder the error reports sit in, one step inside the place a person's own uploads are kept");
  ("A folder of their own rather than beside the messages, because the two are read by different questions - what somebody wanted to say, and what broke without anybody saying anything - and a reader of one should never have to sort the other out of what it is handed.");
  ("Inside the same opening as the messages rather than at the top, because that opening is the only place in storage a browser is allowed to write at all. A folder anywhere else would need the rules changed before a single report could land.");
  let folder = text_frozen("error/");
  return folder;
}
