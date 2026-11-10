import { fn_name } from "./fn_name.mjs";
import { not_equal } from "./not_equal.mjs";
import { file_read } from "./file_read.mjs";
import { messenger_reply_proposed_file } from "./messenger_reply_proposed_file.mjs";
import { messenger_since_mine_file } from "./messenger_since_mine_file.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function messenger_reply_proposed_approve(id, proposed) {
  "$plain id";
  "$plain proposed";
  ("Says yes to the reply proposed to messenger conversation number id: the words become the finalized reply that ",
    fn_name("facebook_messenger_since_mine_reply_send"),
    " sends. It sends nothing itself. Answers whether it was approved, or why not.");
  ("★ ONLY THE WORDS THAT WERE ON THE SCREEN ARE APPROVED: proposed is the text the page showed, and when the proposal has changed since, nothing is approved - a yes given to other words is not a yes to these.");
  let file_path = messenger_reply_proposed_file(id);
  let current = await file_read(file_path);
  if (not_equal(current, proposed)) {
    let r2 = {
      id,
      approved: false,
      why: "the proposal changed since it was shown",
    };
    return r2;
  }
  let since_file = messenger_since_mine_file(id);
  let saved = await file_read_json(since_file);
  if (saved.sent_at) {
    let r3 = {
      id,
      approved: false,
      why: "already sent",
    };
    return r3;
  }
  saved.reply = proposed;
  saved.reply_approved_at = new Date().toISOString();
  await file_overwrite_json(since_file, saved);
  let r = {
    id,
    approved: true,
  };
  return r;
}
